import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FilmsService } from '../service/films.service';
import { PeopleService } from '../service/people.service';
import { ShipsService } from '../service/ships.service';
import { PlanetsService } from '../service/planets.service';
import { SpeciesService } from '../service/species.service';
import { VehiclesService } from '../service/vehicles.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayForm: FormGroup;
  public _result: string;
  public _name: any[];
  public _birthyear: any[];




  searchValue = [
    { view: 'Films', value: 'films'},
    { view: 'Ships', value: 'starships' }, 
    { view: 'People', value: 'people' },
    { view: 'Planets', value: 'planets' },
    { view: 'Species', value: 'species' },
    { view: 'Vehicles', value: 'vehicles' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private shipsService: ShipsService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private vehiclesService: VehiclesService,
  ) { }

  ngOnInit() {
    this.displayForm = this.formBuilder.group({
      searchMenu: new FormControl(),
      searchValue: new FormControl()
    })
  }

  submitSearch(): void {
    console.log("button clicked")
    
    if (this.displayForm.controls['searchMenu'].value === 'films') {
      this.filmsService.filmsFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {
        console.log(res.results[0]);
        
        this._result = `${res.results[0].title} was released on ${res.results[0].release_date}. The movie was directed by ${res.results[0].director} and produced by ${res.results[0].producer}.`;})
    } 
    
    else if (this.displayForm.controls['searchMenu'].value === 'starships') {
      this.shipsService.shipsFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {
        console.log(res.results[0]);
        
        this._result = `The ${res.results[0].name} has a crew of ${res.results[0].crew} and has a cargo capacity of ${res.results[0].cargo_capacity}.
         It is manufactured by ${res.results[0].manufacturer} at a cost of ${res.results[0].cost_in_credits} credits.
          It has model name of ${res.results[0].model} and has a hyper drive rating of ${res.results[0].hyperdrive_rating}.`;})
    } 
    
    else if (this.displayForm.controls['searchMenu'].value === 'people') {
      this.peopleService.peopleFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {

        this._result = `The character of ${res.results[0].name} was born in ${res.results[0].birth_year}.`;})
    } 
    
    else if (this.displayForm.controls['searchMenu'].value === 'vehicles') {
      this.vehiclesService.vehiclesFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {

        this._result = `The ${res.results[0].name} has a crew of ${res.results[0].crew}, a cargo capacity of ${res.results[0].cargo_capacity}, and can hold ${res.results[0].passengers} passengers.
         It is manufactured by ${res.results[0].manufacturer} at a cost of ${res.results[0].cost_in_credits} credits.
          It has model name of ${res.results[0].model} and has a max atmosphering speed of ${res.results[0].max_atmosphering_speed}.`;})   
    }

    else if (this.displayForm.controls['searchMenu'].value === 'planets') {
      this.planetsService.planetsFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {

        this._result = `${res.results[0].name} has an ${res.results[0].climate} climate and is said to have a ${res.results[0].terrian} terrian. It has a population of ${res.results[0].population}
          people. It has a rotation period of ${res.results[0].rotation_period} days and an orbital period of ${res.results[0].orbital_period} days.`;})
    }

    else if (this.displayForm.controls['searchMenu'].value === 'species') {
      this.speciesService.speciesFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {

        this._result = `The species of ${res.results[0].name} has a life span of ${res.results[0].average_lifespan} years.
           It is classified as a ${res.results[0].classification} and also known to be ${res.results[0].designation}.`;})
    }


    else {
      console.log('Error fetching request')
    }
  }

}