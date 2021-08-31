import { Component, OnInit } from '@angular/core';
import {Service, Customer} from '../app.service';
@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css'],
  providers: [Service]
})
export class OrdertableComponent implements OnInit {
  dataSource: Customer[] = [];

  constructor(service: Service){
    this.dataSource = service.getCustomers();

  }

  ngOnInit(): void {
  }

}
