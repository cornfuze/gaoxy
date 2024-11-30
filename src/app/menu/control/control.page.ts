import { Component, OnInit } from '@angular/core'
import { IonContent, IonIcon } from '@ionic/angular/standalone'
import { RouterModule } from '@angular/router'
import { addIcons } from 'ionicons'
import { notificationsOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons'

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent]
})
export class ControlPage implements OnInit {

  constructor() {
    addIcons({ notificationsOutline, chevronUpOutline, chevronDownOutline, });
  }

  ngOnInit() { }

}
