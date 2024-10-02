import { Component, OnInit } from '@angular/core'
import { IonContent, IonIcon, IonRadio, IonRadioGroup } from '@ionic/angular/standalone'
import { RouterModule } from '@angular/router'
import { addIcons } from 'ionicons'
import { arrowBackOutline } from 'ionicons/icons'

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonContent, RouterModule, IonIcon]
})
export class LanguagePage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() { }

}
