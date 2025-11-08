import { HttpClient } from '@angular/common/http';
import { CvInterface } from './../interfaces/cv.interface';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvService {
  private http = inject(HttpClient);
  public hireResult = signal<boolean | null>(null);

  getCVs(): Observable<CvInterface[]> {
    return this.http.get<CvInterface[]>('/assets/data/cv.data.json').pipe(
      map((cvs: CvInterface[]) => {
        const realCV = cvs.find((cv) => cv.isReal === true);
        const fakeCVs = cvs.filter((cv) => cv.isReal !== true);
        const shuffledFakes = this.shuffle([...fakeCVs]);

        return realCV ? [...shuffledFakes, realCV] : shuffledFakes;
      })
    );
  }

  private shuffle(array: CvInterface[]): CvInterface[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
