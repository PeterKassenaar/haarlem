import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractPublicPrivateComponent } from './abstract-public-private.component';

describe('AbstractPublicPrivateComponent', () => {
  let component: AbstractPublicPrivateComponent;
  let fixture: ComponentFixture<AbstractPublicPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractPublicPrivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbstractPublicPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
