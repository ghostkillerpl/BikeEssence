import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  tracking() {
    this.router.navigate(['/home1']);
  }
  track1() {
    this.router.navigate(['/track1']);
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
