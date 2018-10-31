import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// My modules
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { OurWorkComponent } from './modules/our-work/our-work.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		AboutUsComponent,
		OurWorkComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// My modules
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
