import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-popup',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './alert-popup.component.html',
  styleUrl: './alert-popup.component.css'
})
export class AlertPopupComponent {
  imgSrc: string;

  constructor(public dialogRef: MatDialogRef<AlertPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {
        title: string[], message: string, type: string
      }
  ) {
  }

  ngOnInit() {
    this.imgSrc = this.data.type + '.gif';
  }

  get primaryColor(): string {
    switch (this.data.type) {
      case 'DBError': return '#c30b56'; // red
      case 'About': return '#d22e2e'; // dark-mango
      case 'Warning': return '#eb5e29'; // orange
      case 'Error': return '#f25575'; // yellow
      case 'Next': return '#052a75'; // navy
      case 'Info': return '#5F1887'; // purple accent
      default: return '#6a1b9a'; // fallback purple
    }
  }

  get iconImage(): string {
    switch (this.data.type) {
      case 'DBError': return 'clear';
      case 'About': return 'doorbell';
      case 'Warning': return 'light';
      case 'Error': return 'error';
      case 'Next': return 'redo';
      case 'Info': return 'thumb_up';
      default: return 'clear';
    }
  }

  closeDialog(): void {
    // You can add logic here before closing
    this.dialogRef.close('Done!');
  }
}
