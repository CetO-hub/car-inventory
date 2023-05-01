import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCarDialogComponent } from './components/add-car-dialog/add-car-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-inventory';

  constructor(private _dialogRef: MatDialog){}

  openDialog() {
    this._dialogRef.open(AddCarDialogComponent)
  }
}
