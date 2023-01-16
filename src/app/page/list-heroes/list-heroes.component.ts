import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HeroDTO } from 'src/app/DTO/HeroDTO';
import { SuperHeroService } from 'src/app/service/super-hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'race', 'picture', 'detail'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  matDataSource: any;
  listHero: HeroDTO[] = [];
  showSpinner = true;

  ngOnInit(): void {
    this.getHero();
  }

  constructor(
    private superHeroService: SuperHeroService,
    public dialogo: MatDialog,
  ) { }

  getHero() {
    this.showSpinner = true;
    this.superHeroService.getHeroes().subscribe(
      resp => {
        this.showSpinner = false;
        this.listHero = resp;
        this.matDataSource = new MatTableDataSource(this.listHero);
        this.matDataSource.paginator = this.paginator
      },
      error => {

      }
    );
  }

  showDetails(hero: HeroDTO) {
    this.dialogo.open(DetailsComponent, {
      data: hero
    }).afterClosed().subscribe();
  }

}
