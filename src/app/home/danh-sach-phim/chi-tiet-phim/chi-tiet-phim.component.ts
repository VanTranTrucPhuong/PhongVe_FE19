import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../../../../_core/services/quan-ly-phim.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  public maPhim: any;
  public tenPhim: any;
  public phim: any;

  constructor(
    private quanLyPhimService: QuanLyPhimService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhim();
  }

  getChiTietPhim() {
    this.quanLyPhimService.layChiTietPhim(this.maPhim).subscribe((result: any) => {
      console.log(result);
      this.phim = result;
    });
  }

  getParams() {
    // Nhận một tham số
     this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");

    // Nhận nhiều tham số
    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.tenPhim = params.tenPhim;
    });
  }

  muaVe(maLichChieu){
    this.router.navigate(["/home/phong-ve/", maLichChieu]);
  }

}
