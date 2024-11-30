import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { IonContent, IonIcon, IonButton, IonAlert } from '@ionic/angular/standalone'
import { RouterModule } from '@angular/router'
import { addIcons } from 'ionicons'
import { logOutOutline, personOutline, chevronForward, settingsOutline, warningOutline, globeOutline, helpCircleOutline, moon, cameraOutline } from 'ionicons/icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonAlert, IonContent, IonIcon, IonButton, RouterModule]
})
export class ProfilePage implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>
  profileImage: string = '../../../assets/images/pp.png'

  constructor() {
    addIcons({ logOutOutline, moon, cameraOutline, personOutline, chevronForward, settingsOutline, warningOutline, globeOutline, helpCircleOutline })
  }

  ngOnInit() { }

  triggerFileInput() {
    this.fileInput.nativeElement.click()
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length) {
      const file = input.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        this.profileImage = reader.result as string
      }

      reader.readAsDataURL(file)
    }
  }

  public logoutButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'alert-button-cancel'
    },
    {
      text: 'Logout',
      role: 'logout',
      cssClass: 'alert-button-logout'
    },
  ]

  setResult(event: CustomEvent) {
    console.log(`Dismissed with role: ${event.detail.role}`)
  }
}
