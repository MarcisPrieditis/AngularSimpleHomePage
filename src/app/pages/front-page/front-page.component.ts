import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogContactFormComponent } from '../icon-header/popup-dialog-contact-form/popup-dialog-contact-form.component';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(PopupDialogContactFormComponent);
  }
}
