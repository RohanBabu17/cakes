import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeserviceService } from '../cakeservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id:any;
  public viewDatas =<any>[];
  data:any =[];

  constructor(private serv4:CakeserviceService,private route:ActivatedRoute,private router:Router) { 
    this.id = this.route.snapshot.params
    console.log(this.id.id)
  }

  ngOnInit(): void {
    this.viewDatas = this.serv4.getdatabyid(this.id.id)
    console.log(this.viewDatas);
    this.data.push(this.serv4.viewData)
  }

}
