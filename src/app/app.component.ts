import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'relume-blurryface';

  slideIndex = 1;

  constructor() {

    this.showDivs(this.slideIndex);
  }

  plusDivs(n: any) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n: any) {
    var i;
    let x: any = document.getElementsByClassName("mySlides");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
  }
}
