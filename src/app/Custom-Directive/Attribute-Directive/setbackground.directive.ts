import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:"[setBackground]"
})
export class SetBackgroundDirective implements OnInit{

    constructor(private element:ElementRef , private render : Renderer2){}

    // ngOnInit(): void {
    //     this.element.nativeElement.style.backgroundColor="#ADD8E6";
    // }

    //better way to do above code. We should not access ElementRef directly

    ngOnInit(): void {
        // this.render.setStyle(this.element.nativeElement, 'backgroundColor', '#ADD8E6');
    }

    @HostListener('mouseenter') mousehover(eventData : Event){
        this.render.setStyle(this.element.nativeElement, 'backgroundColor', '#ADD8E6');
    }
    @HostListener('mouseleave') mouseleave(eventData : Event){
        this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    }
    @HostListener('mousemove') mouseclick(eventData : Event){
        this.render.setStyle(this.element.nativeElement, 'cursor', 'pointer');
        // this.render.setValue(this.element.nativeElement.cursor , "pointer")
    }    
}