import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-table-header',
  imports: [
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './table-header.html',
  styleUrl: './table-header.css',
})
export class TableHeader {
  tooltip = input.required<string>();
  label = input.required<string>();
}
