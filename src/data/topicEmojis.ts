export const topicEmojis: Record<string, string> = {
  activism: '✊',
  ai: '🤖',
  analog: '📝',
  anomalies: '🔍',
  astro: '🚀',
  automation: '⚙️',
  'digital-garden': '🌱',
  future: '🔮',
  javascript: '💻',
  'knowledge-management': '🧠',
  media: '📺',
  meta: '🎭',
  organization: '📊',
  pkm: '📚',
  politics: '🏛️',
  productivity: '⚡',
  prompting: '💬',
  protocols: '🔗',
  security: '🔒',
  thinking: '💭',
  'web-dev': '🌐',
  'web-development': '🌐',
  welcome: '👋',
  writing: '✍️',
};

export function getTopicEmoji(topic: string): string {
  return topicEmojis[topic] || '📌';
}
