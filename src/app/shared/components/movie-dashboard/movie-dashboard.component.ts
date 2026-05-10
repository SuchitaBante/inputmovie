import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../models/movies';
import { moviedata } from '../../contsts/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit{

    getmoviedata: Array<Imovies>=[]
    constructor (){{}

}
  ngOnInit(): void {
    //AIP call to fetch movie data
    this.getmoviedata= moviedata;
   
  }
}



