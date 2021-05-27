import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBordure]',
})
export class BordureDirective implements OnInit {
  @Input() public appreciation!: 'SUCCESS' | 'WARNING' | 'DANGER';
  private oldBorder: string;
  private color!: string;

  constructor(private el: ElementRef) {
    this.oldBorder = this.el.nativeElement.style.border;
    
  }
  
  ngOnInit() {
    switch (this.appreciation) {
      case 'SUCCESS':
        this.color = 'green';
        break;
      case 'WARNING':
        this.color = 'orange';
        break;
      case 'DANGER':
        this.color = 'red';
        break;
      default:
        break;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.border = `.2rem solid ${this.color}`;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.border = this.oldBorder;
  }
}
