import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SkillcardComponent } from './skillcard/skillcard.component';
import { BannerComponent } from './banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainentryComponent } from './mainentry/mainentry.component';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridbreaksDirective } from './directives/gridbreaks.directive';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillcardComponent,
    BannerComponent,
    MainentryComponent,
    GridbreaksDirective,
    AboutPageComponent,
    SkillsPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatGridListModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
