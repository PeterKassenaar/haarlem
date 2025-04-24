import {Component} from '@angular/core';
import {JsonPipe} from "@angular/common";


// Examples of the keywords public, private, and protected.
// The classes below SHOULD BE in their own files, but omitted here for brevity.

// ***** class 1
// abstract class, can not be instantiated.
abstract class Animal {
  // protected and private are not inherited. They are only available in the class.
  protected name: string;

  // instantiation of the name property
  constructor(name: string) {
    this.name = name;
  }

  // makeSound is abstract, can not be instantiated.
  abstract makeSound(): void;

  // move is public, can be instantiated.
  public move(): void {
    console.log(`${this.name} moves`);
  }
}

// ***** class 2
// class Dog, extends the Animal class, can be instantiated.
class Dog extends Animal {
  private breed: string;

  // constructor for this class
  constructor(name: string, breed: string) {
    // call the base class constructor, pass name as parameter.
    super(name);
    // initialize the breed property of THIS class
    this.breed = breed;
  }

  // override the makeSound method of the Animal class (which is abstract).
  makeSound(): void {
    console.log("Woof!");
  }
}

// ***** class 3
// The component itself.
@Component({
  selector: 'app-abstract-public-private',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './abstract-public-private.component.html',
  styleUrl: './abstract-public-private.component.css'
})
export class AbstractPublicPrivateComponent {

  // usage of the classes above. The keyword 'public' is not actually necessary.
  public myDog = new Dog("Max", "Labrador");

  // call methods of the classes above.
  constructor() {
    this.myDog.move(); // method on the base abstract class Animal
    this.myDog.makeSound(); // method on the derived class Dog
  }
}
