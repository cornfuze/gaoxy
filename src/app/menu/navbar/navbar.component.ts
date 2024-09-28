import { Component, OnInit, EnvironmentInjector, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonTabs, IonTabBar, IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { personOutline, homeOutline, desktopOutline, settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule, IonTabs, IonTabBar, IonIcon]
})
export class NavbarComponent implements OnInit {
  public environmentInjector = inject(EnvironmentInjector)

  constructor() {
    addIcons({ homeOutline, desktopOutline, settingsOutline, personOutline });
  }

  ngOnInit() { }

  setActive(event: Event): void {
    const list = document.querySelectorAll('.list');
    list.forEach((item) => item.classList.remove('active'));
    (event.currentTarget as HTMLElement).classList.add('active');
  }
}
