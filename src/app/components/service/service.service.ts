import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/models/products';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  url = environment.apiUrl
  favoritesArr: Products[] = [];

  constructor(private http: HttpClient) { }

  getProducts() { return this.http.get<{ products: Products[] }>(this.url).pipe(map(prods => prods.products)) }

  addToFav(product: Products) {
    this.favoritesArr.push(product);
    return console.log(this.favoritesArr);

  }

}
