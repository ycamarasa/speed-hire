import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { ConfettiComponent } from '../../components/confetti/confetti.component';
import { IconComponent } from '../../icons/icon.component';
import {
  checkIcon,
  cvIcon,
  downloadIcon,
  githubIcon,
} from '../../icons/icons.icon';

@Component({
  selector: 'app-final-page',
  imports: [RouterLink, ConfettiComponent, IconComponent],
  templateUrl: './final-page.component.html',
})
export class FinalPageComponent {
  public hireResultSignal = inject(CvService).hireResult;
  public githubLinktSignal = inject(CvService).githubLink;
  downloadMessage = signal('');

  check = checkIcon;
  cv = cvIcon;
  download = downloadIcon;
  github = githubIcon;

  showDownloadMessage() {
    this.downloadMessage.set('Descarga iniciada');

    setTimeout(() => {
      this.downloadMessage.set('');
    }, 3000);
  }
}
