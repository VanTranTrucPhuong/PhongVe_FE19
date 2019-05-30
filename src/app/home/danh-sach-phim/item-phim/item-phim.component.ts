import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/_core/models/phim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  muaVe(){
    this.router.navigate(["/home/chi-tiet-phim/", this.phim.MaPhim],{
      queryParams: {tenPhim: this.phim.TenPhim}
    });
  }       
}
