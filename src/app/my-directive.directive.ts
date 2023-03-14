import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.color = "blue"
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.color = "red"
  }

}
