import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-water-stat',
  templateUrl: './water-stat.page.html',
  styleUrls: ['./water-stat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WaterStatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
