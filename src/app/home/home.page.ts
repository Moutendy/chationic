import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  activedTab:string = 'chats'
  constructor() {}

  segmentChange(event:any)
  {
this.activedTab=event.target.value;
  }
}
