import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.page.html',
  styleUrls: ['./report-bug.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ReportBugPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
