import { Component } from "@angular/core";

@Component({
    // meta-data
    selector: 'data-binding',
    // template: `
    //     <!-- inline template -->
    //     <p> This is data-binding component </p>
    // `
    templateUrl: './data-binding.html'
})
export class DataBinding{
    componentName: string = 'Data Binding Component';

    isTrue : boolean = false;

    imageUrl = 'https://openclipart.org/download/216413/coniglio_rabbit_small.svg';

    className = 'active123';

    constructor(){
    }

    changeImageUrl(){
        this.imageUrl = 'http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png';
    }

    changeBack(){
        this.imageUrl = 'https://openclipart.org/download/216413/coniglio_rabbit_small.svg';
    }

}