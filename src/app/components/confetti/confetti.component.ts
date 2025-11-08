import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Confettiful } from './confettiful.component';

@Component({
  selector: 'app-confetti',
  imports: [],
  templateUrl: './confetti.component.html',
})
export class ConfettiComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const container = this.elRef.nativeElement.querySelector('.js-confetti');
    if (container) {
      new Confettiful(container);
    }
  }
 }
