import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appContarClicks]',
})
export class ContarClicksDirective {
  numeroClicks: number = 0;

  @HostBinding('style.font-size')
  size: string = '';

  @HostBinding('style.opacity')
  opacity: number = 0.1;

  constructor() {}
  @HostListener('click', ['$event.target'])
  onClick() {
    this.numeroClicks++;
    this.size = 20 + this.numeroClicks + 'px';
    this.opacity += 0.1;
  }
}
