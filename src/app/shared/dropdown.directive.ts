import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    
    @HostBinding('class.open') isOpen = false;

    constructor() {}

    ngOnInit(){}
    
    @HostListener('click') toggleOpen(){
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.isOpen = !this.isOpen
      }
}