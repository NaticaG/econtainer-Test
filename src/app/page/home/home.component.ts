import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroDTO } from 'src/app/DTO/HeroDTO';
import { SuperHeroService } from 'src/app/service/super-hero.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  MAX_HERO: number = 20;
  listHero: HeroDTO[] = [];
  heroes: HeroDTO[] = [];
  nameHero: string = "";

  ngOnInit(): void {
    this.getHero();
  }

  constructor(
    private superHeroService: SuperHeroService,
    public dialogo: MatDialog,
  ) { }

  getHero() {
    this.superHeroService.getHeroes().subscribe(
      resp => {
        this.listHero = resp;
        this.loadRamdomHeroes();
      },
      error => {

      }
    );
  }

  loadRamdomHeroes() {
    this.heroes = [];
    for (var i = 0; i < this.MAX_HERO; i++) {
      let randomNumber = this.generateRandomNumber(0, this.listHero.length);
      var selectedHero = this.listHero[randomNumber];
      this.heroes.push(selectedHero);
    }
  }

  findHero() {
    this.heroes = [];
    for (var i = 0; i < this.listHero.length; i++) {
      if (this.listHero[i].name.includes(this.nameHero)) {
        this.heroes.push(this.listHero[i]);
      }
    }
  }

  showDetails(hero: HeroDTO) {
    this.dialogo.open(DetailsComponent, {
      data: hero
    }).afterClosed().subscribe();
  }

  clean() {
    this.nameHero = "";
    this.loadRamdomHeroes();
  }

  generateRandomNumber(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
  }
}
