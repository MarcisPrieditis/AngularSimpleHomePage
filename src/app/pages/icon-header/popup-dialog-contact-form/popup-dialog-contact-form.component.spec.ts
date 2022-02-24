import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDialogContactFormComponent } from './popup-dialog-contact-form.component';

describe('PopupDialogContactFormComponent', () => {
  let component: PopupDialogContactFormComponent;
  let fixture: ComponentFixture<PopupDialogContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDialogContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDialogContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
