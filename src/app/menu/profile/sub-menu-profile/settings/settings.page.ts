import { Component, OnInit } from '@angular/core'
import { IonIcon, IonContent, IonButton, IonToggle } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { arrowBackOutline, timeOutline, arrowUpOutline, notificationsOutline, documentTextOutline, chevronForwardOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonToggle, IonIcon, IonContent, IonButton, RouterModule]
})
export class SettingsPage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline, arrowUpOutline, timeOutline, notificationsOutline, documentTextOutline, chevronForwardOutline });
  }

  ngOnInit() {
  }

}
