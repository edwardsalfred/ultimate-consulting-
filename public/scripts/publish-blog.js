const fs = require("fs");
const path = require("path");

const draftsDir = path.join(process.cwd(), "content/blog/drafts");
const publishedDir = path.join(process.cwd(), "content/blog/published");

if (!fs.existsSync(publishedDir)) {
    fs.mkdirSync(publishedDir, { recursive: true });
}

const today = new Date().toISOString().slice(0, 10);
const files = fs.readdirSync(draftsDir).filter(file => file.endsWith(".md"));

let published = false;

for (const file of files) {
    const filePath = path.join(draftsDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    const match = content.match(/publishDate:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);

    if (match && match[1] <= today) {
        fs.renameSync(filePath, path.join(publishedDir, file));
        console.log(`Published ${file}`);
        published = true;
    }
}

if (!published) {
    console.log("No posts to publish today.");
}