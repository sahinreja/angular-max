import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyserverComponent } from './myserver.component';

describe('MyserverComponent', () => {
  let component: MyserverComponent;
  let fixture: ComponentFixture<MyserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
