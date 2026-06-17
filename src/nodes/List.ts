import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { performance } from "perf_hooks";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}

  render(): string {
    const start = performance.now();
    const content = this.renderer.renderList(this.items);
    const renderTime = performance.now() - start;

    RenderEventPublisher.notify({
      type: 'List',
      content,
      items: this.items,
      renderTime,
    });

    return content;
  }
}