import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  loggedinuser: any;
  constructor(private route:ActivatedRoute,private router:Router)  { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinuser = localStorage.getItem('token');
    return this.loggedinuser;

  }
  onlogout(){
    localStorage.removeItem('token');
    alertyfy.set('notifier','position', 'top-center');
    alertyfy.success(' You are LoggedOut !');
    
  }
}
