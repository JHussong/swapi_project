import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { PeopleService } from './service/people.service';
import { FilmsService } from './service/films.service';
import { ShipsService } from './service/ships.service';
import { PlanetsService } from './service/planets.service';
import { SpeciesService } from './service/species.service';
import { VehiclesService } from './service/vehicles.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    PeopleService,
    FilmsService,
    ShipsService,
    VehiclesService,
    PlanetsService,
    SpeciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }