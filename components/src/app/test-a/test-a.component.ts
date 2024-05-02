import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-a',
  standalone: true,
  imports: [],
  templateUrl: './test-a.component.html',
  styleUrl: './test-a.component.css',
})
export class TestAComponent {
  @Input() valueA: string = 'TestADefaultValue';
}
