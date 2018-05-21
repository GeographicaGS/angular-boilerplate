import { NgModule } from '@angular/core';
import { CommonModule as NGCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CommonRouting } from './common.routing';

import { AuthenticationService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

const components = [
  // Place your components here
];

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  minScrollbarLength: 25
};

@NgModule({
  imports: [
    NGCommonModule,
    HttpClientModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule,
    CommonRouting
  ],
  declarations: components,
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationService,
    AuthGuard
  ],
  exports : [...components, TranslateModule, PerfectScrollbarModule, HttpClientModule]
})
export class CommonModule { }
