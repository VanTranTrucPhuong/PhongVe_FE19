import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TrangTinTucComponent } from './trang-tin-tuc/trang-tin-tuc.component';
import { HomeComponent } from './home.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';

const routes: Routes = [
    // Home
    {
        path: "",
        component: HomeComponent,
        children: [
            // Trang chủ
            {
                path: "", component: TrangChuComponent
            },
            // Trang chủ
            // {
            //     path: "home",
            //     component: TrangChuComponent
            // },
            // Danh sách phim
            {
                path: "danh-sach-phim", component: DanhSachPhimComponent
            },
            // Tin tức
            {
                path: "tin-tuc", component: TrangTinTucComponent
            },
            // Chi tiết phim    
            // Truyền một tham số
            {
                path: "chi-tiet-phim/:id",/**id do mình tự đặt */
                component: ChiTietPhimComponent
            },

            // Truyền nhiều tham số
            // {
            //     path: "chi-tiet-phim",/**id do mình tự đặt */
            //     component: ChiTietPhimComponent
            // }

            // Trang phòng vé
            {
                path: "phong-ve/:maLichChieu",
                loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"
            }

        ]
    }

];

@NgModule({
    /**Chú ý forRoot và forChild */
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
