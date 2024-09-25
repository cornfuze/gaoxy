import { Component, EnvironmentInjector, inject } from '@angular/core'
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone"

// import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone'
// import { addIcons } from 'ionicons'
// import { personOutline, homeOutline, desktopOutline, settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
  // imports: [IonApp, IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class AppComponent {
  // public environmentInjector = inject(EnvironmentInjector)

  constructor() {
    // addIcons({ homeOutline, desktopOutline, settingsOutline, personOutline })
  }
}
