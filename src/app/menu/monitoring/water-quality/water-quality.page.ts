import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./water-quality.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WaterQualityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
