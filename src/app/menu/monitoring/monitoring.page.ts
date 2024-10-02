import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { earthOutline, waterOutline, leafOutline} from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonRow,
  IonGrid,
  IonCardContent,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class MonitoringPage implements OnInit {
  constructor(private navCtrl: NavController) {
    addIcons({ earthOutline, waterOutline, leafOutline });
  }

  navigateToTab() {
    this.navCtrl.navigateForward(`/facade`);
  }

  ngOnInit() {
    console.log('MonitoringPage initialized');
  }
}
