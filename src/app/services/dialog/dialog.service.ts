import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MatDialog,
    private config: MatDialogConfig
  ) { }

  custom(component, data?: any, config?: any): Observable<any> {
    if (data) {
      this.config.data = data;
    }
    this.config = {...this.config, ...config};
    return this.dialog.open(component, this.config).afterClosed();
  }
}
