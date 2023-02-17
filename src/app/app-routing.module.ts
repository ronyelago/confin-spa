import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaCompraComponent } from './nova-compra/nova-compra.component';

const routes: Routes = [
  { path: 'nova-compra', component: NovaCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
