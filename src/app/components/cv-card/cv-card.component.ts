import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { CvInterface } from '../../interfaces/cv.interface';
import { IconComponent } from '../../icons/icon.component';
import {
  emailIcon,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  locationIcon,
  telfIcon,
} from '../../icons/icons.icon';

@Component({
  selector: 'cv-card-component',
  imports: [CommonModule, IconComponent],
  templateUrl: './cv-card.component.html',
})
export class CvCardComponent {
  cv = input<CvInterface>();
  selected = output<boolean>();
  activeTab = signal(1);

  private hasClickedOnce = false;
  private confirmTimeoutId: any = null;

  email = emailIcon;
  facebook = facebookIcon;
  instagram = instagramIcon;
  linkedin = linkedinIcon;
  location = locationIcon;
  telf = telfIcon;

  get hasManySkills(): boolean {
    return (this.cv()?.skills?.length || 0) > 4;
  }

  get reversedExperiences() {
    return (this.cv()?.experiences || []).slice().reverse();
  }

  setActiveTab(tabNumber: number) {
    this.activeTab.set(tabNumber);
  }

  onConfirmChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (!this.hasClickedOnce) {
      this.hasClickedOnce = true;
      checkbox.checked = true;

      return;
    }

    this.hasClickedOnce = false;
    if (this.confirmTimeoutId) clearTimeout(this.confirmTimeoutId);

    this.selected.emit(true);
    checkbox.checked = false;
  }

  selectCV(decision: boolean) {
    this.selected.emit(decision);
    this.setActiveTab(1);
  }
}
