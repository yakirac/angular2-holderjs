import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

var Holder = require('holderjs');

@Component({
	selector: 'hjs',
	template: '<div id="{{holderId}}"></div>'
})

export class HolderJsComponent implements OnInit {
	@Input() holderId: string;
	@Input() imgSrc: string;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		var holderDiv = document.getElementById(this.holderId);
		Holder.addImage(this.imgSrc, holderDiv).run();
	}
}