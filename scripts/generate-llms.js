import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://prince-bhalse.vercel.app';

try {
  console.log('Generating llms.txt and llms-full.txt...');

  const dataDir = path.resolve(__dirname, '../src/data');

  const readJson = (fileName) => {
    const filePath = path.join(dataDir, fileName);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return [];
  };

  const blogs = readJson('blogs.json');
  const stories = readJson('stories.json');
  const projects = readJson('projects.json');
  const books = readJson('books.json');
  const shayari = readJson('shayari.json');
  const thoughts = readJson('thoughts.json');

  // Filter valid items
  const validBlogs = blogs.filter(b => b.title && b.slug && b.slug.trim());
  const validStories = stories.filter(s => s.title && s.slug && s.slug.trim());

  // Build llms.txt (following llmstxt.org specification)
  let llmsTxt = `# Prince Bhalse

> Personal portfolio, digital garden, essays, fiction, poetry (Shayari, Nazm), and software architecture projects by Prince Bhalse.

Prince Bhalse is a Software Architect, Writer, and Poet. This digital garden serves as a comprehensive portfolio featuring open-source software projects, full-stack architectures, philosophical essays, psychological crime fiction, Hindi and Urdu poetry, reading recommendations, and digital artwork.

## Core Navigation

- [Home](${BASE_URL}/): Main landing page featuring bio, skills overview, highlights, and primary site navigation.
- [Software Projects](${BASE_URL}/projects): Software engineering portfolio including blockchain applications, AI analytics tools, and machine learning systems.
- [Blog & Essays](${BASE_URL}/blog): In-depth essays and articles exploring philosophy, emotional depth, university life, and mindfulness.
- [Stories](${BASE_URL}/stories): Narrative prose, psychological thrillers, and immersive dark crime stories.
- [Shayari & Poetry](${BASE_URL}/shayari): Original Hindi and Urdu poetry collection including Nazms, Ghazals, and couplets.
- [Thoughts](${BASE_URL}/thoughts): Short-form insights, stream-of-consciousness reflections, and philosophical maxims.
- [Books](${BASE_URL}/books): Author page and book catalogue, featuring novels, reading notes, and recommendations.
- [Artwork](${BASE_URL}/art-work): Visual digital art gallery and creative media showcase.

## Software Projects

`;

  projects.forEach(p => {
    if (p.title) {
      const link = p.live || `${BASE_URL}/projects`;
      const desc = p.desc ? p.desc.replace(/\r?\n|\r/g, ' ') : 'Software project by Prince Bhalse';
      llmsTxt += `- [${p.title}](${link}): ${desc}\n`;
    }
  });

  if (books.length > 0) {
    llmsTxt += `\n## Books & Novels\n\n`;
    books.forEach(b => {
      const link = b.amazonUrl || `${BASE_URL}/books`;
      const desc = b.tagline || (b.synopsis && b.synopsis[0]) || 'Book by Prince Bhalse';
      llmsTxt += `- [${b.title}](${link}): ${desc}\n`;
    });
  }

  if (validBlogs.length > 0) {
    llmsTxt += `\n## Blog & Articles\n\n`;
    validBlogs.forEach(b => {
      const link = `${BASE_URL}/blog/${b.slug}`;
      const desc = b.summary || 'Essay by Prince Bhalse';
      llmsTxt += `- [${b.title}](${link}): ${desc}\n`;
    });
  }

  if (validStories.length > 0) {
    llmsTxt += `\n## Fiction & Stories\n\n`;
    validStories.forEach(s => {
      const link = `${BASE_URL}/stories/${s.slug}`;
      const desc = s.summary || 'Story by Prince Bhalse';
      llmsTxt += `- [${s.title}](${link}): ${desc}\n`;
    });
  }

  llmsTxt += `\n## Optional\n\n- [Full Content Catalog](${BASE_URL}/llms-full.txt): Complete, consolidated plain-text catalog containing all articles, stories, poetry, and project details for LLMs.\n`;

  // Write llms.txt
  const llmsTxtPath = path.resolve(__dirname, '../public/llms.txt');
  fs.writeFileSync(llmsTxtPath, llmsTxt, 'utf-8');
  console.log(`llms.txt successfully generated at ${llmsTxtPath}`);

  // Build llms-full.txt (complete plain-text archive for deep LLM ingestion)
  let llmsFull = `# Prince Bhalse - Complete Content Archive

> Comprehensive text dump and documentation of writings, poetry, fiction, and software engineering projects by Prince Bhalse.
> Website: ${BASE_URL}

---

## 1. About Prince Bhalse
Prince Bhalse is a Software Architect, Writer, and Poet based in India. His work spans full-stack software development, decentralized applications, AI tooling, literary fiction, philosophical essays, and Hindi/Urdu poetry.

Social & Code Profiles:
- Website: ${BASE_URL}
- GitHub: https://github.com/princebhalse
- LinkedIn: https://www.linkedin.com/in/princebhalse/
- Twitter / X: https://x.com/Princebhalse
- Instagram: https://www.instagram.com/princebhalse92/
- Medium: https://medium.com/@princebhalse

---

## 2. Software Projects
`;

  projects.forEach((p, idx) => {
    llmsFull += `\n### 2.${idx + 1} ${p.title}\n`;
    if (p.desc) llmsFull += `${p.desc}\n\n`;
    if (p.live) llmsFull += `- Live Application: ${p.live}\n`;
    if (p.github) llmsFull += `- Source Code: ${p.github}\n`;
    if (p.date) llmsFull += `- Date: ${p.date}\n`;
  });

  if (books.length > 0) {
    llmsFull += `\n---\n\n## 3. Books & Publications\n`;
    books.forEach((b, idx) => {
      llmsFull += `\n### 3.${idx + 1} ${b.title}\n`;
      if (b.series) llmsFull += `Series: ${b.series}\n`;
      if (b.tagline) llmsFull += `Tagline: ${b.tagline}\n`;
      if (b.format) llmsFull += `Format: ${b.format} | ${b.pages || ''}\n`;
      if (b.amazonUrl) llmsFull += `Amazon URL: ${b.amazonUrl}\n`;
      if (b.synopsis && b.synopsis.length) {
        llmsFull += `\nSynopsis:\n${b.synopsis.join('\n\n')}\n`;
      }
    });
  }

  if (validBlogs.length > 0) {
    llmsFull += `\n---\n\n## 4. Blog Posts & Essays\n`;
    validBlogs.forEach((b, idx) => {
      llmsFull += `\n### 4.${idx + 1} ${b.title}\n`;
      llmsFull += `URL: ${BASE_URL}/blog/${b.slug}\n`;
      if (b.date) llmsFull += `Date: ${b.date} | Category: ${b.category || 'General'}\n`;
      if (b.summary) llmsFull += `Summary: ${b.summary}\n\n`;
      if (Array.isArray(b.content)) {
        llmsFull += `${b.content.join('\n\n')}\n`;
      }
    });
  }

  if (validStories.length > 0) {
    llmsFull += `\n---\n\n## 5. Fiction & Stories\n`;
    validStories.forEach((s, idx) => {
      llmsFull += `\n### 5.${idx + 1} ${s.title}\n`;
      llmsFull += `URL: ${BASE_URL}/stories/${s.slug}\n`;
      if (s.date) llmsFull += `Date: ${s.date} | Category: ${s.category || 'Story'}\n`;
      if (s.summary) llmsFull += `Summary: ${s.summary}\n\n`;
      if (Array.isArray(s.content)) {
        llmsFull += `${s.content.join('\n\n')}\n`;
      }
    });
  }

  if (shayari.length > 0) {
    llmsFull += `\n---\n\n## 6. Shayari, Nazm & Poetry Collection\n`;
    shayari.forEach((item, idx) => {
      llmsFull += `\n### 6.${idx + 1} ${item.title || 'Untitled'} (${item.category || 'Poetry'})\n`;
      if (item.date) llmsFull += `Date: ${item.date}\n\n`;
      llmsFull += `${item.content}\n`;
    });
  }

  if (thoughts.length > 0) {
    llmsFull += `\n---\n\n## 7. Thoughts & Musings\n`;
    thoughts.forEach((t, idx) => {
      llmsFull += `\n- "${t.text}" — ${t.author || 'Prince Bhalse'} (${t.date || ''})\n`;
    });
  }

  // Write llms-full.txt
  const llmsFullPath = path.resolve(__dirname, '../public/llms-full.txt');
  fs.writeFileSync(llmsFullPath, llmsFull, 'utf-8');
  console.log(`llms-full.txt successfully generated at ${llmsFullPath}`);

} catch (error) {
  console.error('Error generating llms files:', error);
  process.exit(1);
}
