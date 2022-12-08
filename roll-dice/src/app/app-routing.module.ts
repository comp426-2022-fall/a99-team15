import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'create_account', component: CreateAccountComponent },
    { path: 'homepage', component: HomePageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'game', component: GameComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }