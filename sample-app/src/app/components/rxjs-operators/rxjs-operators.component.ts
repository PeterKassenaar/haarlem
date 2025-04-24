import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {debounceTime, forkJoin, from, fromEvent, map, mergeMap, of, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements AfterViewInit {

  @ViewChild('inputRef') inputRef?: ElementRef;
  http = inject(HttpClient);

  // Example of RxJS operators.
  constructor() {

    // 1. The Tap operator is used for debugging purposes.
    of(1, 2, 3).pipe(
      tap(x => console.log('before map:', x)),
      map(x => x * 2)
    ).subscribe();

    // 2. The Map operator is used to transform the data.
    of(1, 2, 3).pipe(
      map(x => x * 10)
    ).subscribe(console.log); // 10, 20, 30

  }

  ngAfterViewInit() {
    // give the input focus, so the user can start typing.
    this.inputRef?.nativeElement.focus();
    if (this.inputRef) {
      // 3. The DebounceTime operator is used to delay the emission of an item.
      fromEvent(this.inputRef?.nativeElement, 'input').pipe(
        debounceTime(300),
        map((e: any) => e.target.value)
      ).subscribe(console.log);


      // 4. The SwitchMap operator is used to switch to a new observable.
      // Ideal for typeahead functionality. NOTE: This is Dummy Code! The
      // http.get() doesn't actually work.
      fromEvent(this.inputRef.nativeElement, 'input').pipe(
        map((e: any) => e.target.value),
        switchMap(query => this.http.get(`/search?q=${query}`))
      ).subscribe(console.log);

      // 5. The ForkJoin operator is used to wait for multiple observables to complete.
      // NOTE: This is Dummy Code! The http.get() doesn't actually work.'
      forkJoin([
        this.http.get('/user'),
        this.http.get('/settings')
      ]).subscribe(([user, settings]) => {
        console.log(user, settings);
      });

      // 6. The MergeMap operator is used to wait for multiple observables to complete.
      // NOTE: This is Dummy Code! The http.get() doesn't actually work.'
      from([1, 2, 3]).pipe(
        mergeMap(id => this.http.get(`/item/${id}`))
      ).subscribe(console.log);

    }
  }
}
