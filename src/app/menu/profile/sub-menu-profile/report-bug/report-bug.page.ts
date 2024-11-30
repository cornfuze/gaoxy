import { Component, OnInit } from '@angular/core'
import { IonContent, IonButton, IonIcon, IonAlert } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { arrowBackOutline, timeOutline, arrowUpOutline, notificationsOutline, documentTextOutline, chevronForwardOutline, informationCircleOutline, folderOpen } from 'ionicons/icons'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.page.html',
  styleUrls: ['./report-bug.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, RouterModule, IonAlert]
})
export class ReportBugPage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline, informationCircleOutline, folderOpen, arrowUpOutline, timeOutline, notificationsOutline, documentTextOutline, chevronForwardOutline })
  }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      const file = input.files[0]
      console.log('Selected file:', file)
    }
  }

}
