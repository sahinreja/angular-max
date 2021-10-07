import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './serve/servers-edit/candeactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { ServerssComponent } from './serve/serverss/serverss.component';
import { ServersEditComponent } from './serve/servers-edit/servers-edit.component';
import { ServeComponent } from './serve/serve.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ServersResolver } from './serve/serverss/servers-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    // canActivate:[AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServeComponent,
    children: [
      { path: ':id', component: ServerssComponent, resolve: { server: ServersResolver } },
      { path: ':id/edit', component: ServersEditComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  // {
  //   path: 'not-found', component: PageNotFoundComponent
  // },
  {
    path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' }
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

const recipeRoutes: Routes = [
  {
    path: '', redirectTo: '/recipe', pathMatch: 'full'
  },
  {
    path:'recipe' , loadChildren: ()=> import('./recipes/recipes.module').then(m=>m.RecipesModule)
  },
  {
    path:'shopping-list' , loadChildren:()=> import('./shopping-list/shopping-list.moule').then(m=>m.ShoppingListModule)
  },
  {
    path:'auth' , component:AuthComponent
  }
]

@NgModule({
  // imports: [RouterModule.forRoot(routes  , {useHash:true})],
  imports: [RouterModule.forRoot(recipeRoutes , { preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
