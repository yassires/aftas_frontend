import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HuntingComponent } from './components/hunting/hunting.component';
import { MemberComponent } from './components/member/member.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CompetitionFormComponent } from './components/competition/competition-form/competition-form.component';
import { CompetitionMemberFormComponent } from './components/competition/competition-member-form/competition-member-form.component';
import { HuntingFormComponent } from './components/hunting/hunting-form/hunting-form.component';
import { MemberFormComponent } from './components/member/member-form/member-form.component';
import { RankingTopComponent } from './components/ranking/ranking-top/ranking-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    HomePageComponent,
    HuntingComponent,
    MemberComponent,
    NavbarComponent,
    RankingComponent,
    CompetitionFormComponent,
    CompetitionMemberFormComponent,
    HuntingFormComponent,
    MemberFormComponent,
    RankingTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
