import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedListItemComponent } from './related-list-item.component';

describe('RelatedListItemComponent', () => {
  let component: RelatedListItemComponent;
  let fixture: ComponentFixture<RelatedListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
