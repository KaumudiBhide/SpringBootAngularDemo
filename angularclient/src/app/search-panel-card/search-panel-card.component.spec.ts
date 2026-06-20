import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelCardComponent } from './search-panel-card.component';

describe('SearchPanelCardComponent', () => {
  let component: SearchPanelCardComponent;
  let fixture: ComponentFixture<SearchPanelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPanelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPanelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
