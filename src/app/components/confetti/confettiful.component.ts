export class Confettiful {
  private containerEl: HTMLDivElement | null = null;

  private confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  private confettiAnimations = ['slow', 'medium', 'fast'];
  private confettiInterval: number | undefined;

  constructor(private el: HTMLElement) {
    this._setupElements();
    this._renderConfetti();
  }

  private _setupElements(): void {
    const containerEl = document.createElement('div');
    const elPosition = getComputedStyle(this.el).position;
    if (elPosition !== 'relative' && elPosition !== 'absolute') {
      this.el.style.position = 'relative';
    }

    containerEl.classList.add('confetti-container');
    this.el.appendChild(containerEl);
    this.containerEl = containerEl;
  }

  private _renderConfetti(): void {
    this.confettiInterval = window.setInterval(() => {
      if (!this.containerEl) return;

      const confettiEl = document.createElement('div');
      const confettiSize = `${Math.floor(Math.random() * 3) + 7}px`;
      const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
      const confettiLeft = `${Math.floor(Math.random() * this.el.offsetWidth)}px`;
      const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

      confettiEl.classList.add('confetti', `confetti--animation-${confettiAnimation}`);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      setTimeout(() => {
        if (confettiEl.parentNode) {
          confettiEl.parentNode.removeChild(confettiEl);
        }
      }, 3000);

      this.containerEl.appendChild(confettiEl);
    }, 25);
  }
}
