import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';
import { cloudyOutline, thermometerOutline, invertModeOutline, waterOutline, sunnyOutline } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonToggle,
  IonIcon,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../header/header.component';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-facade',
  templateUrl: './facade.page.html',
  styleUrls: ['./facade.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonToggle,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterModule
  ],
})
export class FacadePage implements OnInit {

  toggle1Status: string = 'Unactive'; // Status untuk toggle 1
  toggle2Status: string = 'Unactive'; // Status untuk toggle 2
  toggle3Status: string = 'Unactive'; // Status untuk toggle 3

  // Fungsi untuk menangani perubahan pada toggle 1
  toggle1Changed(event: any) {
    this.toggle1Status = event.detail.checked ? 'Active' : 'Unactive';
  }

  // Fungsi untuk menangani perubahan pada toggle 2
  toggle2Changed(event: any) {
    this.toggle2Status = event.detail.checked ? 'Active' : 'Unactive';
  }

  // Fungsi untuk menangani perubahan pada toggle 3
  toggle3Changed(event: any) {
    this.toggle3Status = event.detail.checked ? 'Active' : 'Unactive';
  }

  constructor(private navCtrl: NavController) {
    addIcons({ cloudyOutline, thermometerOutline, invertModeOutline, waterOutline, sunnyOutline });

  }
  navigateToTab() {
    this.navCtrl.navigateForward('/overview');
  }

  ngOnInit() {
    console.log('FacadePage initialized');
  }
}
