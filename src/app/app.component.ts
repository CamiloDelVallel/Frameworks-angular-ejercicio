import { ArrayType } from "@angular/compiler";
import { Component } from "@angular/core";

type Movie = {
  name: String;
  available: Number;
  quantity: Number;
};

type Movies = Array<Movie>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: String = "Películas";
  movies: Movies = [
    {
      name: "Avengers",
      available: 5,
      quantity: 0
    },
    {
      name: "Terminator",
      available: 3,
      quantity: 0
    },
    {
      name: "Loki",
      available: 10,
      quantity: 0
    },
    {
      name: "Cruela",
      available: 2,
      quantity: 0
    }
  ];

  addQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity += 1;
  }

  removeQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity -= 1;
  }
}
