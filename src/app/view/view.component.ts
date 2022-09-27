import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeserviceService } from '../cakeservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  public viewDatas =<any>[];
  data:any =[];

  constructor(private serv3:CakeserviceService ,private route:ActivatedRoute,private router:Router) { 
    this.id = this.route.snapshot.params
    console.log(this.id.id)
  }

  ngOnInit(): void {
    this.viewDatas = this.serv3.getdatabyid(this.id.id)
   console.log(this.viewDatas);
   this.data.push(this.serv3.viewData)
  }
  check(id:any){
    console.log(id);
    this.router.navigate(['checkout',id]);
  }

}
