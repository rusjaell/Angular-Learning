import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAComponent } from './test-a.component';

describe('TestAComponent', () => {
  let component: TestAComponent;
  let fixture: ComponentFixture<TestAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
