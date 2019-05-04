import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { CoreModule } from '@app/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let statusBarSpy: any, splashScreenSpy: any;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), CoreModule],
      declarations: [AppComponent],
      providers: [{ provide: StatusBar, useValue: statusBarSpy }, { provide: SplashScreen, useValue: splashScreenSpy }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
