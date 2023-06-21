import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAComponent } from './dialog-a.component';

describe('DialogAComponent', () => {
  let component: DialogAComponent;
  let fixture: ComponentFixture<DialogAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAComponent]
    });
    fixture = TestBed.createComponent(DialogAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
