import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router) { }

  public menus=[
    {title:"Home",url:"/menu/home",icon:'share'},

    {title:"Profil",url:"/menu/profil",icon:'school'},

    {title:"Logout",url:"/menu/logout",icon:'log-out'},
    {title:"Exit",url:"Exit",icon:'power'},
]
  ngOnInit() {}

  onMenuItem(m:any) {
    if(m.url=='logout'){

      this.router.navigateByUrl("/login");
    }
    else if(m.url=='Exit'){
        navigator['app'].exitApp();
    }
    else{
        this.router.navigateByUrl(m.url);
    }
  }
}
