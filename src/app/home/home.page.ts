import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas=[];/*
    {
      titulo: "John Wick",
      anio: 2014,
      director: "Chad Stahelski",
      imagen: "https://www.thevocket.com/app/uploads/2018/11/John-Wick-3-e1543206506101.jpg"
    },
    {
      titulo: "Matrix",
      anio: 1999,
      director: "Hermanas Wachosky",
      imagen: "https://pics.filmaffinity.com/Matrix-155050517-mmed.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
