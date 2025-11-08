import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="w-6 h-6"
      [innerHTML]="safeSvg"
      [ngClass]="class"
    ></span>
  `,
})
export class IconComponent {
  svg = input<string>();
  class = input<string>();
  safeSvg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

   ngOnChanges() {
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.svg() ?? '');
  }
}
