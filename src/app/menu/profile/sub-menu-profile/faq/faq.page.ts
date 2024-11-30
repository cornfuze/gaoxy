import { Component, OnInit } from '@angular/core'
import { IonContent, IonIcon, IonButton, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/angular/standalone'
import { RouterModule } from '@angular/router'
import { addIcons } from 'ionicons'
import { arrowBackOutline } from 'ionicons/icons'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonButton, IonContent, RouterModule, IonIcon, IonAccordion, IonItem, IonLabel]
})
export class FaqPage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() { }

  setActive(event: Event) {
    // Menghapus semua kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('.segment-btn');
    buttons.forEach((button) => button.classList.remove('active'));

    // Menambahkan kelas 'active' ke tombol yang sedang diklik
    const clickedButton = event.currentTarget as HTMLElement;
    clickedButton.classList.add('active');
  }

}
