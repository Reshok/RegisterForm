import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiredComponent } from './thired.component';

describe('ThiredComponent', () => {
  let component: ThiredComponent;
  let fixture: ComponentFixture<ThiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
