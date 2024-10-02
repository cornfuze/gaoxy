import { Routes } from '@angular/router'

import { HomePage } from '../home/home.page'
import { MonitoringPage } from '../monitoring/monitoring.page'
import { ControlPage } from '../control/control.page'
import { ProfilePage } from '../profile/profile.page'

export const NavbarRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'monitoring', component: MonitoringPage },
    { path: 'control', component: ControlPage },
    { path: 'profile', component: ProfilePage }
]