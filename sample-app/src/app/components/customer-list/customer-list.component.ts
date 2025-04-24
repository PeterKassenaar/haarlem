import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "../../shared/services/customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  //...

  ngOnInit(): void {
    //...
  }

  ngOnDestroy(): void {
    //...
  }
}
