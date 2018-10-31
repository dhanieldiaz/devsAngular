import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: '../templates/footer.component.html',
	styleUrls: ['../styles/footer.component.css']
})
export class FooterComponent implements OnInit {
	public year = new Date().getFullYear()
	constructor() { }

	ngOnInit() {
	}

}
