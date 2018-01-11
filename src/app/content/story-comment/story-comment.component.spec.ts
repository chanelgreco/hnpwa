import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCommentComponent } from './story-comment.component';

describe('StoryCommentComponent', () => {
  let component: StoryCommentComponent;
  let fixture: ComponentFixture<StoryCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
