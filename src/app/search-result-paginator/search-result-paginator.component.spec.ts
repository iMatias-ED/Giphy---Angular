import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPaginatorComponent } from './search-result-paginator.component';

describe('SearchResultPaginatorComponent', () => {
  let component: SearchResultPaginatorComponent;
  let fixture: ComponentFixture<SearchResultPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
