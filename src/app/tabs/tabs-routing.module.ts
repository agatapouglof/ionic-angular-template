import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/secure/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../pages/secure/favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/secure/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('../pages/secure/explore/explore.module').then( m => m.ExplorePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
