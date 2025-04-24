import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, CommonModule} from "@angular/common";
import {delay, map, Observable} from "rxjs";

// This is a simple example of how to use the HttpClient.
// The interface should be in its own file, but omitted here for brevity.
interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit {
  // injectint the HttpClient to a local variable http
  http = inject(HttpClient);

  // the observable stream, containing the countries
  countries$?: Observable<Country[]>;
  countries: any;
  url: string = 'https://restcountries.com/v3.1/all';

  ngOnInit() {
    // assigning the observable stream to the local variable countries$.
    // This SHOULD be in a service or the like, but omitted here for brevity.
    this.countries$ = this.http.get<Country[]>(this.url)
      .pipe(
        // using the .pipe() and operators inside the pipeline.
        // In this case, we only return the first 10 elements.
        map(data => data.slice(0, 10))
      );

    // old school-syntax using .subscribe() including next:, error: and complete:
    // should look like:
    // this.http.get<Country[]>('https://restcountries.com/v3.1/all')
    //   .subscribe({
    //     next: data => {
    //       this.countries = data.slice(0, 10);
    //     },
    //     error: err => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('Fetching all countries :: Done');
    //     }
    //   });
  }
}
