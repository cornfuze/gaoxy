import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-harvest-stat',
  templateUrl: './harvest-stat.page.html',
  styleUrls: ['./harvest-stat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HarvestStatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
