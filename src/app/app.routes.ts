import { Routes } from '@angular/router'
import { Page404 } from './404/404.page'
import { NavbarComponent } from './menu/navbar/navbar.component'

import { NavbarRoutes } from './menu/navbar/navbar.routes'
import { MonitoringRoutes } from './menu/monitoring/monitoring.routes'
import { ProfileRoutes } from './menu/profile/profile.routes'

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      ...NavbarRoutes,
      { path: 'profile', children: ProfileRoutes },
      { path: 'monitoring', children: MonitoringRoutes }
    ]
  },
  { path: '**', component: Page404 }
]
