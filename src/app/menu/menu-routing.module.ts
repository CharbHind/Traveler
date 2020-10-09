import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
        {
            path: 'home',
            children: [
                {
                  path:'',
                  loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
                }

            ]
        },
        {
          path: 'profile',
          children: [
              {
                path:'',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
              }

          ]
      },
      {
        path: 'weather',
        children: [
            {
              path:'',
              loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)
            }

        ]
    },
    {
      path: 'favoris',
      children: [
          {
            path:'',
            loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
          }

      ]
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
