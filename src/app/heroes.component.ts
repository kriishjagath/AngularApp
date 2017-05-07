import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OnInit} from '@angular/core'
import { HeroDetailComponent } from './hero-detail.component';
import {Hero} from './models/hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'my-hereos',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes :Hero[];
  selectedHero :Hero;
  ngOnInit(): void {
   this.getHeroes(); 
  }
  constructor(private heroService: HeroService,private router: Router) { }
  
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
