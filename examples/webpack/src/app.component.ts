import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hjs [holderId]="black-widow" [imgSrc]="imageSource"></hjs>
               </div>`
})

export class AppComponent {

    message = "";
    imageSource = "holder.js/293x210?text=Black Widow&theme=vine";

    onKeyUp(input) {
        this.message = input.value;
    }

}