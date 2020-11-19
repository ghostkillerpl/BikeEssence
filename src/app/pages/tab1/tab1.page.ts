import { Component, OnInit } from '@angular/core';
import { on } from 'process';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listwiev() {
    document.querySelectorAll(".toggler").forEach(obj=>obj.classList.remove("ibox"))
    document.querySelectorAll(".text-align-to-ibox").forEach(obj=>obj.classList.remove("center"))
    };

  tablewiev() {
      document.querySelectorAll(".toggler").forEach(obj=>obj.classList.add("ibox"))
      document.querySelectorAll(".text-align-to-ibox").forEach(obj=>obj.classList.add("center"))
    };

}

