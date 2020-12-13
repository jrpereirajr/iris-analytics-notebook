import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NbCellComponent } from '../nb-cell/nb-cell.component';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellMarkdownComponent),
  multi: true,
};

@Component({
  selector: 'app-nb-cell-markdown',
  templateUrl: './nb-cell-markdown.component.html',
  styleUrls: ['./nb-cell-markdown.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NbCellMarkdownComponent extends NbCellComponent implements OnInit, ControlValueAccessor {
//   public value = `
// ## Markdown __rulez__!
// ---

// ### Syntax highlight
// \`\`\`typescript
// const language = 'typescript';
// \`\`\`

// ### Lists
// 1. Ordered list
// 2. Another bullet point
//   - Unordered list
//   - Another unordered bullet point

// ### Blockquote
// > Blockquote to the max`;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
