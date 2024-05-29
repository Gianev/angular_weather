import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcardComponent } from './tempcard.component';

describe('TempcardComponent', () => {
  let component: TempcardComponent;
  let fixture: ComponentFixture<TempcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
