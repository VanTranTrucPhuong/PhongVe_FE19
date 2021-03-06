import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhongVeComponent } from './phong-ve.component';

const routes: Routes = [
    {
        path:"",
        component: PhongVeComponent
    }
];

@NgModule({
    /**Chú ý forRoot và forChild */
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhongVeRoutingModule { }
