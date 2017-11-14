import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetyComponent } from './sprzety.component';

describe('SprzetyComponent', () => {
  let component: SprzetyComponent;
  let fixture: ComponentFixture<SprzetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
