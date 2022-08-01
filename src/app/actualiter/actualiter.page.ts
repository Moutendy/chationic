import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualiter',
  templateUrl: './actualiter.page.html',
  styleUrls: ['./actualiter.page.scss'],
})
export class ActualiterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  natigate()
  {
this.router.navigateByUrl('/menu/home');
  }
}
