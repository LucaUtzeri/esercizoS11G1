import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sub!: Subscription;
  prodArr: Products[] | undefined;

  constructor(private srv: ServiceService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.sub = this.srv.getProducts().subscribe((result) => {
      this.prodArr = result;
    })
  }

  addToFavorites(prodArr: Products, event: Event) {
    this.srv.addToFav(prodArr);
    const button = event.currentTarget as HTMLButtonElement;
    button.classList.add('disabled');
  }

}
