import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulamin',
  templateUrl: './regulamin.page.html',
  styleUrls: ['./regulamin.page.scss'],
})
export class RegulaminPage implements OnInit {

  constructor(
    private router: Router,
    ) { }

    Login() {
      this.router.navigate(['/']);
    }

  ngOnInit() {
  }

}
