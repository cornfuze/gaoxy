import { Component, OnInit } from '@angular/core'
import { IonContent, IonHeader, IonTitle, IonButton, IonIcon, IonToolbar } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { arrowBack } from 'ionicons/icons'

@Component({
  selector: 'app-404',
  templateUrl: './404.page.html',
  styleUrls: ['./404.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonButton, IonIcon, IonToolbar]
})
export class Page404 implements OnInit {

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() { }

}
