import { Component, OnInit } from '@angular/core';
import { PhimService } from "./../../../_core/services/phim.service";
import { QuanLyPhimService } from "./../../../_core/services/quan-ly-phim.service";

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  // Tạo mảng hứng dữ liệu
  danhSachPhim = [];
  constructor(
    private phimService: PhimService,
    private quanLyPhimService: QuanLyPhimService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    // Lấy dữ liệu từ PhimService
    // this.danhSachPhim = this.phimService.layDanhSachPhim();
    // console.log(this.danhSachPhim);

    // Lấy dữ liệu từ BackEnd
    this.quanLyPhimService.layDanhSachPhim().subscribe((result: any) => {
      console.log(result);
      this.danhSachPhim = result;
    })
  }

}
