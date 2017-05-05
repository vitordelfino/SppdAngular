import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 openNav(elemento) {
    elemento.style.width = "250px";
}

 closeNav(elemento) {
    elemento.style.width = "0";
}

}
