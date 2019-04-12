import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsByRestaurant(this.route.parent.snapshot.params['id'])
  }

  reviews: Observable<any>

}
