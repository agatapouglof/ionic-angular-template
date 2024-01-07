import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'restaurants/detail',
    loadChildren: () => import('./restaurants/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'restaurants/detail/dish',
    loadChildren: () => import('./restaurants/dish/dish.module').then( m => m.DishPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
