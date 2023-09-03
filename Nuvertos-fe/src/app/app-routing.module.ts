import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEFAULT_ROUTE,HOME_ROUTE, COMPOUND_DETAILS_ROUTE, NOT_FOUND_ROUTE } from './constant/routes';

// pages 
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
    { path: DEFAULT_ROUTE, component:LandingPageComponent },
    { path: HOME_ROUTE, component: HomeComponent },
    { path: COMPOUND_DETAILS_ROUTE, component: CardDetailsComponent },
    { path: NOT_FOUND_ROUTE, component: NotFoundPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
