const VALID_REQUEST_TYPES = ['Content Change', 'Design Tweak', 'Bug / Issue', 'New Feature', 'Other'];
const VALID_PRIORITIES = ['Low', 'Medium', 'High'];

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

  const { businessName, requestType, priority, pageSection, description } = payload ?? {};

  if (!String(businessName || '').trim() || !String(requestType || '').trim() || !String(description || '').trim()) {
    return json(400, { error: 'Missing required fields' });
  }

  if (!VALID_REQUEST_TYPES.includes(String(requestType))) {
    return json(400, { error: 'Invalid request type' });
  }
  if (priority && !VALID_PRIORITIES.includes(String(priority))) {
    return json(400, { error: 'Invalid priority' });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

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
          'Business Name': {
            title: [{ text: { content: String(businessName).trim().slice(0, MAX_TEXT) } }],
          },
          'Request Type': {
            select: { name: String(requestType) },
          },
          'Priority': {
            select: { name: String(priority || 'Medium') },
          },
          'Page/Section': {
            rich_text: [{ text: { content: String(pageSection || '').slice(0, MAX_TEXT) } }],
          },
          'Description': {
            rich_text: [{ text: { content: String(description).trim().slice(0, MAX_TEXT) } }],
          },
          'Status': {
            status: { name: 'New' },
          },
          'Dated Submitted': {
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
    console.error('Feedback submission error:', err);
    return json(500, { error: 'Failed to submit request' });
  }
};
