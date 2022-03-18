import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLibraryComponent } from './icon-library.component';

describe('IconLibraryComponent', () => {
  let component: IconLibraryComponent;
  let fixture: ComponentFixture<IconLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
