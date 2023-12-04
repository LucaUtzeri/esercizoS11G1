import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  myFavs: Products[] = [];

  constructor(private srv: ServiceService) { }

  ngOnInit(): void {
    this.myFavs = this.srv.favoritesArr;
  }

}
