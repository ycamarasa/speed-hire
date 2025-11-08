import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'countdown-component',
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent {
  secondsSignal = signal(0);
  minutesSignal = signal(1);

  timeExpired = output<boolean>();
  restartCountdown = input<number>();

  timeDisplay = computed(() => {
    const m = this.minutesSignal();
    const s = this.secondsSignal();
    return `${m}:${s.toString().padStart(2, '0')}`;
  });

  startCountdownEffect = effect((onCleanUp) => {
    const restartValue = this.restartCountdown();

    this.secondsSignal.set(0);
    this.minutesSignal.set(1);

    const interval = setInterval(() => {
      const seconds = this.secondsSignal();
      const minutes = this.minutesSignal();

      if (seconds === 0 && minutes === 0) {
        clearInterval(interval);
        this.timeExpired.emit(false);
        return;
      }

      if (seconds === 0) {
        this.minutesSignal.update((m) => m - 1);
        this.secondsSignal.set(59);
      } else {
        this.secondsSignal.update((s) => s - 1);
      }
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });
}
