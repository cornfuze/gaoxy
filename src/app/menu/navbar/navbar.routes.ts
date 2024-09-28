import { Routes } from '@angular/router'
import { NavbarComponent } from './navbar.component'

import { HomePage } from '../home/home.page'
import { MonitoringPage } from '../monitoring/monitoring.page'
import { ControlPage } from '../control/control.page'
import { ProfilePage } from '../profile/profile.page'
import { FacadePage } from '../monitoring/facade/facade.page'

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomePage },
            { path: 'monitoring', component: MonitoringPage },
            { path: 'control', component: ControlPage },
            { path: 'profile', component: ProfilePage },
            { path: 'facade', component: FacadePage}
        ]
    }
]