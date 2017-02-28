import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<div>
                   <hjs [holderId]="holderId" [imgSrc]="imageSource"></hjs>
               </div>`
})

export class AppComponent {

    holderId = "black-widow";
    imageSource = "holder.js/293x210?text=Black Widow&theme=vine";

}