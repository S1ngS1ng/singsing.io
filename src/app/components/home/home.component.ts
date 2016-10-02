import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        let autoplay = function () {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 5000);
        };
        $(document).ready(function () {
            $('.carousel.carousel-slider')
                .carousel({full_width: true});
            $('.parallax')
                .parallax();
            // Call auto play after 5 seconds
            setTimeout(autoplay, 5000);
        });
    }

}
