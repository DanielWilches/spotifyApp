import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Home = '/home';
  img = 'assets/img/banner-ico.png';
  status: number;
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goPageHome() {
    this.status = null;
  }

  goPageSearch(argumen: any) {
    this.status = null;
    this.status = argumen + 1;
    this.router.navigate(['/search']);
  }
  goPageArtista(argumen: any) {
    this.status = null;
    this.status = argumen + 2;
    this.router.navigate(['/artista']);
  }
}

