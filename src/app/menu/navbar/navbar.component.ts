import { Component, OnInit, EnvironmentInjector, inject } from '@angular/core'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { personOutline, homeOutline, desktopOutline, settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class NavbarComponent implements OnInit {
  public environmentInjector = inject(EnvironmentInjector)

  constructor() {
    addIcons({ homeOutline, desktopOutline, settingsOutline, personOutline });
  }

  ngOnInit() { }
}
