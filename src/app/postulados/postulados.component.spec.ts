import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuladosComponent } from './postulados.component';

describe('PostuladosComponent', () => {
  let component: PostuladosComponent;
  let fixture: ComponentFixture<PostuladosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostuladosComponent]
    });
    fixture = TestBed.createComponent(PostuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
