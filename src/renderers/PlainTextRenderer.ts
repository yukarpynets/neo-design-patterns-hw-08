import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const underline = (level === 1 ? '=' : '-').repeat(text.length);
    return `${text}\n${underline}\n\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  renderList(items: string[]): string {
    return items.map(i => `• ${i}`).join('\n') + '\n\n';
  }
}