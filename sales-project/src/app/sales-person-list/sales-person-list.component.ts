import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {

  // Creat an array of object

 salesPersonList: SalesPerson[] = [
   new SalesPerson ("Moez", "Zouari", "moez.zouari@gmail.com", 5000),
   new SalesPerson ("Majdi", "Zouari", "majdi.zouari@outlook.com",100000),
   new SalesPerson ("Fakher","Zouari","fakher.zouari@hotmail.fr",25000),
   new SalesPerson ("Ahmad","Kallel","Ahmad.Kallel@live.tn",60000)
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
