/**
 * Blog provenance metadata.
 * Every post in blogs.json carries an `origin` field so readers always know
 * how a piece was made:
 *   - "original"      → written by Prince (Own Thoughts)
 *   - "ai-researched" → researched/drafted with AI assistance, curated by Prince
 */
export const ORIGIN_META = {
  original: {
    label: 'Own Thoughts',
    glyph: '✍',
    className: 'origin-own',
    description: 'Written by Prince — personal notes, reflections and original thoughts.',
  },
  'ai-researched': {
    label: 'AI-Researched',
    glyph: '✦',
    className: 'origin-ai',
    description: 'Researched and drafted with AI assistance, then reviewed and curated by Prince.',
  },
};

export const getOriginMeta = (origin) => (origin && ORIGIN_META[origin]) || null;
