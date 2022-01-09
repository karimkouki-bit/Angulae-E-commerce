import { CartapiService } from './../../services/cartapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalNumber:number = 0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
     this.cartapi.getProductData().subscribe(res=>{
      this.totalNumber = res.length;
    })
  }

}
