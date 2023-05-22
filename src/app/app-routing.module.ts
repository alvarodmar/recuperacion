import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './vistas/galeria/galeria.component';
import { DivisasComponent } from './vistas/divisas/divisas.component';
import { HomeComponent } from './vistas/home/home.component';

const routes: Routes = [{
  path: "galeria", component: GaleriaComponent
},
{
  path: "divisas", component: DivisasComponent
},
{
  path: "home", component: HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
