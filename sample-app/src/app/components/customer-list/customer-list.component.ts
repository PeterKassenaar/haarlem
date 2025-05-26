import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Customer, CustomerService} from "../../shared/services/customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  //...
  customerService = inject(CustomerService);
  customers: Customer[] = [];

  ngOnInit(): void {
    //...
    this.customers = this.customerService.getCustomers();
  }

  ngOnDestroy(): void {
    //...
  }
}
