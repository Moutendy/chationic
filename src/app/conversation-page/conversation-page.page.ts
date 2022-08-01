import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  natigate()
  {
this.router.navigateByUrl('/menu/home');
  }
}
