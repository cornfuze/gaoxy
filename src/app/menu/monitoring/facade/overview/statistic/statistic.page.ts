import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSelectOption,
  ],
})
export class StatisticPage implements OnInit {
  selectedLevel: string;
  selectedGaoxy: string;
  public buffer = 0.06;
  public progress = 0;

  constructor() {
    this.selectedLevel = '';
    this.selectedGaoxy = '';

    setInterval(() => {
      this.buffer = 0.06;
      this.progress = 0.63;

      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
  }

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    const ctx = document.getElementById('trendChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Percentage %',
            data: [60, 40, 65, 45, 70, 50, 80],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
