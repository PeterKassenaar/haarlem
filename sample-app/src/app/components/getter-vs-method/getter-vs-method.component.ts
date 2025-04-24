import {Component} from '@angular/core';

@Component({
  selector: 'app-getter-vs-method',
  standalone: true,
  imports: [],
  templateUrl: './getter-vs-method.component.html',
  styleUrl: './getter-vs-method.component.css'
})
export class GetterVsMethodComponent {
// getters vs methods. Which one to use?

  firstName = 'Peter';
  lastName = 'Kassenaar';

  // getter
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  // method
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }


}
