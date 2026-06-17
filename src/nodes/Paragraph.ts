import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { performance } from "perf_hooks";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}

  render(): string {
    const start = performance.now();
    const content = this.renderer.renderParagraph(this.text);
    const renderTime = performance.now() - start;

    RenderEventPublisher.notify({
      type: 'Paragraph',
      content,
      renderTime,
    });

    return content;
  }
}