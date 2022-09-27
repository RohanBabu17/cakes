import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeserviceService {
  public viewData:any;
  constructor() { }
  public data:any=[
    {
      id:1,
      name:"Chocolate mousse Cake",
      Rs:2500,
      img:"../../assets/dried.jpg"

    },
    {
      id:2,
      name:"Nutella Cheese cake",
      Rs:1500,
      img:"../../assets/nutela.jpg"
      
    },
    {
      id:3,
      name:"Classy litchi cake",
      Rs:2300,
      img:"../../assets/litchi.jpg"
    },
    {
      id:4,
      name:"Rasberrry cake",
      Rs:2800,
      img:"../../assets/strawbery.jpg"
    },
    {
      id:5,
      name:"Victoria cheese cake",
      Rs:2800,
      img:"../../assets/cheese.jpg"
    },
    {
      id:6,
      name:"Truffle cake",
      Rs:1500,
      img:"../../assets/truffle.jpg"
    },
    {
      id:7,
      name:"Chocochipcake",
      Rs:2700,
      img:"../../assets/chocochip.jpg"
    },
    {
      id:8,
      name:"Black Forest cake",
      Rs:1500,
      img:"../../assets/black.jpg"
    },
    {
      id:9,
      name:"Tiramisu pull me up cake",
      Rs:1400,
      img:"../../assets/tira.jpg"
    }
  ]
  getdata(){
    return <any> (this.data)
  }
  getdatabyid(id:any){
    this.data.forEach((item:any)=>{
     if(item.id == id){
       console.log(item);
       this.viewData = item;
       return this.viewData
     }
    })
  }
  adduser(user:any){
      let users =[];
      if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users')!);
        users = [user,...users];
      }
      else{
        users =[user];
      }
      localStorage.setItem('users',JSON.stringify(users));
  }
  authuser(user :any){
    let userarray=[];
    if(localStorage.getItem('users')){
      userarray= JSON.parse(localStorage.getItem('users')!);
    }
    return userarray.find((p:any) => p.Email === user.Email && p.Password === user.Password); 
  }
}
