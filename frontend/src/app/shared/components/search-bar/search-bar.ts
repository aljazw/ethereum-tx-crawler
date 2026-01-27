import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  private readonly fb = inject(FormBuilder);

  placeholder = input<string>('');
  label = input.required<string>();

  form = this.fb.group({
    query: ['']
  });

  search = output<string>();

  onSearch(event?: Event, inputEl?: HTMLInputElement): void {
    event?.preventDefault();

    const value = this.form.value.query?.trim();
    if (!value) return;

    this.search.emit(value);

    inputEl?.blur();
  }

  clear(): void {
    this.form.reset();
  }
}
