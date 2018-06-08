import { Directive, ElementRef, HostListener, HostBinding, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[mydirective]',
    host:{
        '(click)':'changeColor'
    }
})
export class MyDirective implements OnInit{

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ){
        console.log(el)
    }

    @HostListener('mouseenter') changeColor(){
        this.el.nativeElement.style.backgroundColor = "red";
        this.el.nativeElement.style.color = "white";
        this.el.nativeElement.innerText = "Google";
        // this.href = 'https://www.google.com'        
    }

    @HostListener('mouseleave') changeBack(){
        this.el.nativeElement.style.backgroundColor = "transparent";
        this.el.nativeElement.style.color = "black";
        this.el.nativeElement.innerText = "Goes no where"
        // this.href = '#'
    }

    // @HostBinding('href') href;

    ngOnInit(){
        this.renderer.destroy();
    }

}