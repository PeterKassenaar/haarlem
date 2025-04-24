import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

// This is a simple example of how to use the HttpClient.
// The interface should be in its own file, but omitted here for brevity.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// The actual component.
@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent implements OnInit {
  // local variable
  users$?: Observable<User[]>;
  private http = inject(HttpClient);

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

}
