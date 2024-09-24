import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then((m) => m.HomePage) },
  { path: 'monitoring', loadComponent: () => import('./monitoring/monitoring.page').then((m) => m.MonitoringPage) },
  { path: 'control', loadComponent: () => import('./control/control.page').then((m) => m.ControlPage) },
  { path: 'profile', loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage) }
]