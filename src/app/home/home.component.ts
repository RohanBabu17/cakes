import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeserviceService } from '../cakeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv:CakeserviceService,private route:ActivatedRoute,private router:Router) { }
  public homearray:any=[]
  ngOnInit(): void {
    this.homearray=this.serv.getdata();
  }
  view(id:any){
    console.log(id);
    this.router.navigate(['view',id]);
  }
}
