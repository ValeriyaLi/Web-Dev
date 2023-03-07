import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  openImage() {
    window.open('/assets/my_image2.jpg', '_blank', 'width= 600, height = 600');
  }
}
