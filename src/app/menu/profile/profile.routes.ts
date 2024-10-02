import { Routes } from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component'

import { PersonalPage } from './sub-menu-profile/personal/personal.page'
import { SettingsPage } from './sub-menu-profile/settings/settings.page'
import { ReportBugPage } from './sub-menu-profile/report-bug/report-bug.page'
import { LanguagePage } from './sub-menu-profile/language/language.page'
import { FaqPage } from './sub-menu-profile/faq/faq.page'

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'personal', component: PersonalPage },
      { path: 'settings', component: SettingsPage },
      { path: 'report', component: ReportBugPage },
      { path: 'language', component: LanguagePage },
      { path: 'faq', component: FaqPage },
    ]
  }

]