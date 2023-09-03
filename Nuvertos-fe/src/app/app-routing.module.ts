import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages 
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:id', component: CardDetailsComponent },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
