import { Routes } from '@angular/router'

import { FacadePage } from './facade/facade.page'
import { OverviewPage } from './facade/overview/overview.page'

export const MonitoringRoutes: Routes = [
    {
        path: 'facade',
        component: FacadePage,
        children: [{ path: 'overview', component: OverviewPage }]
    }
]