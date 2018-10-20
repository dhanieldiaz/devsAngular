import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { OurWorkComponent } from './modules/our-work/our-work.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		HeaderComponent,
		FooterComponent,
		AboutUsComponent,
		OurWorkComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
