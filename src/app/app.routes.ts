import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dangelo-dev', loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
  {
    path: '', redirectTo: 'dangelo-dev', pathMatch: 'full'
  },
];
