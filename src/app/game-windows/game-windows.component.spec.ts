import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWindowsComponent } from './game-windows.component';

describe('GameWindowsComponent', () => {
  let component: GameWindowsComponent;
  let fixture: ComponentFixture<GameWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWindowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
