
import { AuthInterceptorsService } from './auth/auth-interceptors.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Task1Component } from './task1/task1.component';
import { HeaderComponent } from './header/header.component';
import { MyserverComponent } from './myserver/myserver.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServeComponent } from './serve/serve.component';
import { ServersEditComponent } from './serve/servers-edit/servers-edit.component';
import { UserComponent } from './users/user/user.component';
import { ServerssComponent } from './serve/serverss/serverss.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './serve/servers-edit/candeactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServersResolver } from './serve/serverss/servers-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { ErrorAlertComponent } from './shared/error-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Task1Component,
    HeaderComponent,
    MyserverComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    ServeComponent,
    ServersEditComponent,
    UserComponent,
    ServerssComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ErrorAlertComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AccountsService, UserService, ShoppingListService, AuthService, AuthGuard, CanDeactivateGuard , ServersResolver,
  {provide:HTTP_INTERCEPTORS , useClass:AuthInterceptorsService , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
