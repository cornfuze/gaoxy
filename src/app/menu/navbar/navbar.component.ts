import { Component, OnInit, EnvironmentInjector, inject } from '@angular/core'
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { IonTabs, IonTabBar, IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { personOutline, homeOutline, desktopOutline, settingsOutline } from 'ionicons/icons'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule, IonTabs, IonTabBar, IonIcon],
})
export class NavbarComponent implements OnInit {
  public environmentInjector = inject(EnvironmentInjector)

  constructor(private router: Router, private route: ActivatedRoute) {
    addIcons({ homeOutline, desktopOutline, settingsOutline, personOutline })
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.setActiveTab())
  }

  setActiveTab() {
    const currentPage = this.route.snapshot.firstChild?.routeConfig?.path || ''
    document.querySelectorAll('.list').forEach((item) => item.classList.remove('active'))
    const activeTab = document.querySelector(`.${currentPage}`)
    if (activeTab) {
      (activeTab as HTMLElement).classList.add('active')
    }
  }
}
