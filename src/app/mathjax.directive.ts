import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMathjax]'
})
export class MathjaxDirective {
// @Input() MathJax : string;
  //@Input('MathJax') fractionString: string;
  @Input('MathJax') MathJaxInput: string;
  constructor(private el: ElementRef) { }
  ngOnChanges() {
    // console.log('>> ngOnChanges');
    //  this.el.nativeElement.style.backgroundColor = 'yellow';
    //  this.el.nativeElement.innerHTML = this.fractionString;
    //  MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement]);
    this.el.nativeElement.innerHTML = this.MathJaxInput;
    console.log(this.MathJaxInput);
   eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
   eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
  }
}
