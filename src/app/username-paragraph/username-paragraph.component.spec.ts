import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameParagraphComponent } from './username-paragraph.component';

describe('UsernameParagraphComponent', () => {
  let component: UsernameParagraphComponent;
  let fixture: ComponentFixture<UsernameParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernameParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
