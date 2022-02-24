import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogContactFormComponent } from './popup-dialog-contact-form/popup-dialog-contact-form.component';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.scss']
})
export class IconHeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(PopupDialogContactFormComponent);
  }
}


