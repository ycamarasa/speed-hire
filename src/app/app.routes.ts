import { Routes } from '@angular/router';
import { GameComponent } from './pages/game-page/game-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FinalPageComponent } from './pages/final-page/final-page/final-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'final',
    component: FinalPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
