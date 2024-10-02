import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cloudyOutline, thermometerOutline, invertModeOutline, waterOutline } from 'ionicons/icons';
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
  ],
})
export class FacadePage implements OnInit {

  toggleStatus: string = 'Unactive';

  toggleChanged(event: any) {
    if (event.detail.checked) {
      this.toggleStatus = 'Active';
    } else {
      this.toggleStatus = 'Unactive'; 
    };
  }
  constructor() {
    addIcons({ cloudyOutline, thermometerOutline, invertModeOutline, waterOutline });
  }

  ngOnInit() {
    console.log('FacadePage initialized');
  }
}
