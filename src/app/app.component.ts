import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    if (scrolled > 10) {
      document.getElementById("mainID").style.fontSize = "30px";
    } else {
      document.getElementById("mainID").style.fontSize = "50px";
    }
  }

  // When the user scrolls the page, execute myFunction 


@HostListener('window:scroll', ['$event']) // for window scroll events
onScroll(event) {
  this.myFunction()

}

}
