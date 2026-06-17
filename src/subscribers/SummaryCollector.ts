import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class SummaryCollector implements RenderEventSubscriber {
  private stats = { Section: 0, Paragraph: 0, List: 0 };

  update(context: RenderContext): void {
    this.stats[context.type]++;
  }

  printSummary(): void {
    console.log(`[Summary] Rendered: ${this.stats.Section} sections, ${this.stats.Paragraph} paragraphs, ${this.stats.List} lists`);
  }
}