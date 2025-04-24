import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterVsMethodComponent } from './getter-vs-method.component';

describe('GetterVsMethodComponent', () => {
  let component: GetterVsMethodComponent;
  let fixture: ComponentFixture<GetterVsMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterVsMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetterVsMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
