import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-b',
  standalone: true,
  imports: [],
  templateUrl: './test-b.component.html',
  styleUrl: './test-b.component.css',
})
export class TestBComponent {
  @Input() valueB: string = 'TestBDefaultValue';
}
