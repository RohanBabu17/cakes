import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-del',
  templateUrl: './ship-del.component.html',
  styleUrls: ['./ship-del.component.css']
})
export class ShipDelComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
