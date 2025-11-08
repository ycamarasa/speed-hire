import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { CvCardComponent } from '../../components/cv-card/cv-card.component';
import { CvService } from '../../services/cv.service';
import { CvInterface } from '../../interfaces/cv.interface';
import { Router } from '@angular/router';
import { CountdownComponent } from '../../components/countdown/countdown.component';

@Component({
  selector: 'app-game',
  imports: [CommonModule, CvCardComponent, CountdownComponent],
  templateUrl: './game-page.component.html',
})
export class GameComponent implements OnInit {
  @ViewChild(CvCardComponent) cvCardComponent!: CvCardComponent;

  public cvService = inject(CvService);
  public router = inject(Router);

  restartCountdownTrigger = signal(0);

  cvs: CvInterface[] = [];
  currentCV!: CvInterface;
  currentIndex = 0;

  ngOnInit() {
    this.cvService.getCVs().subscribe((cvs) => {
      if (!cvs || cvs.length === 0) return;

      this.cvs = cvs;
      this.currentCV = this.cvs[this.currentIndex];
    });
  }

  restart() {
    this.restartCountdownTrigger.update((v) => v + 1);
    return this.restartCountdownTrigger();
  }

  handleDecision(hired: boolean) {
    if (hired) {
      if (this.currentCV.isReal) {
        this.endGame(true);
      } else {
        this.endGame(false);
      }
    } else {
      this.currentIndex++;

      if (this.currentIndex >= this.cvs.length) {
        this.endGame(false);
      } else {
        this.currentCV = this.cvs[this.currentIndex];

        setTimeout(() => {
          this.restart();
          this.cvCardComponent?.setActiveTab(1);
        });
      }
    }
  }

  private endGame(result: boolean): void {
    this.cvService.hireResult.set(result);
    this.router.navigate(['/final']);
  }
}
