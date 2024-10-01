import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
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
  IonBadge
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader, IonToggle, IonIcon, IonBadge, IonicModule]
})
export class OverviewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
