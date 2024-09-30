import { Component, OnInit } from '@angular/core'
import { IonContent, IonIcon, IonButton, IonAlert } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { arrowBackOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
  standalone: true,
  imports: [IonAlert, IonIcon, IonContent, IonButton, RouterModule]
})
export class PersonalPage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() { }

}
