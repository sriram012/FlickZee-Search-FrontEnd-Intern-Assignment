import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchAppComponent } from './search.component';

describe('SearchAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SearchAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'flickzee-search'`, () => {
    const fixture = TestBed.createComponent(SearchAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('flickzee-search');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('FlickZee');
  });
});
