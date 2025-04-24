import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = [
    {
      id: 1,
      name: 'Google',
      email: 'info@google.com'
    },
    {
      id: 2,
      name: 'Microsoft',
      email: 'hello@microsoft.com'
    },
    {
      id: 3,
      name: 'Facebook',
      email: 'insta@facebook.com'
    }
  ];

  getCustomers() {
    return this.customers;
  }
}
