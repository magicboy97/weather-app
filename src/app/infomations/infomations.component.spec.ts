import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationsComponent } from './infomations.component';

describe('InfomationsComponent', () => {
  let component: InfomationsComponent;
  let fixture: ComponentFixture<InfomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
