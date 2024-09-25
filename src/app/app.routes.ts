import { Routes } from '@angular/router'
import { Page404 } from './404/404.page'

export const routes: Routes = [
  { path: '', loadChildren: () => import('./menu/navbar/navbar.routes').then(m => m.routes) },
  { path: '**', component: Page404 }
]