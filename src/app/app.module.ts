import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TicketComponent} from './components/ticket/ticket.component';
import { MostbuttonsComponent } from './components/mostbuttons/mostbuttons.component';
import { FilterComponent } from './components/filter/filter.component';
import { WallPageComponent } from './pages/wall-page/wall-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DurationTimePipe} from './pipes/durationTime.pipe';
import {TimeArrayPipe} from './pipes/timeArray.pipe';
import {QuatityTicketsPipe} from './pipes/quatityTickets.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    MostbuttonsComponent,
    FilterComponent,
    WallPageComponent,
    DurationTimePipe,
    TimeArrayPipe,
    QuatityTicketsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
