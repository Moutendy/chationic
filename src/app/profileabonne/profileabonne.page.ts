import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileabonne',
  templateUrl: './profileabonne.page.html',
  styleUrls: ['./profileabonne.page.scss'],
})
export class ProfileabonnePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  natigateactue()
  {
    this.router.navigateByUrl('/actualiter');
  }
}
