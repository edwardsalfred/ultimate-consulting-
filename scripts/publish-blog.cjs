const fs = require("fs");
const path = require("path");

const draftsDir = path.join(process.cwd(), "content/blog/drafts");
const publishedDir = path.join(process.cwd(), "content/blog/published");

if (!fs.existsSync(draftsDir)) {
  console.log("Drafts folder does not exist. Nothing to publish.");
  process.exit(0);
}

if (!fs.existsSync(publishedDir)) {
  fs.mkdirSync(publishedDir, { recursive: true });
}

const today = new Date().toISOString().slice(0, 10);
const files = fs.readdirSync(draftsDir).filter(file => file.endsWith(".md"));

const duePosts = files
  .map(file => {
    const filePath = path.join(draftsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const match = content.match(/publishDate:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);

    return {
      file,
      filePath,
      publishDate: match ? match[1] : null,
    };
  })
  .filter(post => post.publishDate && post.publishDate <= today)
  .sort((a, b) => a.publishDate.localeCompare(b.publishDate));

if (duePosts.length === 0) {
  console.log("No posts to publish today.");
  process.exit(0);
}

const postToPublish = duePosts[0];

fs.renameSync(
  postToPublish.filePath,
  path.join(publishedDir, postToPublish.file)
);

console.log(`Published ${postToPublish.file}`);