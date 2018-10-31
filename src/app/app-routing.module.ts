import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { OurWorkComponent } from './modules/our-work/our-work.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'contact', component: ContactComponent},
	{path: 'about-us', component: AboutUsComponent},
	{path: 'our-work', component: OurWorkComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }