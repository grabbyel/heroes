import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPintar]',
})
export class PintarDirective implements OnInit {
  @Input('appPintar')
  alum: any;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.alum.valoracion == 'alta') {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'innerHTML',
        `${this.alum.nombre} ${this.alum.apellido}`
      );
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'style',
        'color: blue; backgroundColor: silver;'
      );
    } else {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'innerHTML',
        `${this.alum.nombre} ${this.alum.apellido}`
      );
    }
  }
}
