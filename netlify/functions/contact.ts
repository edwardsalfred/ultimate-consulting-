const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid JSON body' });
  }

  const { firstName, lastName, email, phone, institution, role, message } = payload ?? {};

  if (
    !String(firstName || '').trim() ||
    !String(lastName || '').trim() ||
    !String(email || '').trim() ||
    !String(message || '').trim()
  ) {
    return json(400, { error: 'Missing required fields' });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_CONTACT_DATABASE_ID || process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return json(500, { error: 'Server configuration error' });
  }

  try {
    const MAX_TEXT = 2000;

    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          'Name': {
            title: [{ text: { content: `${String(firstName).trim()} ${String(lastName).trim()}`.slice(0, MAX_TEXT) } }],
          },
          'Email': {
            email: String(email).trim().slice(0, 200),
          },
          'Phone': {
            phone_number: String(phone || '').trim().slice(0, 40),
          },
          'Institution': {
            rich_text: [{ text: { content: String(institution || '').slice(0, MAX_TEXT) } }],
          },
          'Role': {
            rich_text: [{ text: { content: String(role || '').slice(0, MAX_TEXT) } }],
          },
          'Message': {
            rich_text: [{ text: { content: String(message).trim().slice(0, MAX_TEXT) } }],
          },
          'Status': {
            select: { name: 'New' },
          },
          'Date Submitted': {
            date: { start: new Date().toISOString().split('T')[0] },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Notion API error:', error);
      throw new Error('Notion API error');
    }

    return json(200, { success: true });
  } catch (err) {
    console.error('Contact submission error:', err);
    return json(500, { error: 'Failed to submit contact form' });
  }
};
