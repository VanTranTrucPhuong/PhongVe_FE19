import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})  
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }

  layDanhSachPhim(): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    let observable = this.http.get(url).pipe(
      tap(
        () => { }, /**Thành công */
        catchError(err => {
          return this.handleError(err);
        })
      ));
    return observable;
  }

  layChiTietPhim(maPhim): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let observable = this.http.get(url).pipe(
      tap(
        () => { }, /**Thành công */
        catchError(err => {
          return this.handleError(err);
        })
      ));
    return observable;
  }

  chiTietPhongVe(maLichChieu):Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let observable = this.http.get(url).pipe(
      tap(
        () => { }, /**Thành công */
        catchError(err => {
          return this.handleError(err);
        })
      ));
    return observable;
  }


  handleError(err){
    //Handle Error
    return err;
  }
}
