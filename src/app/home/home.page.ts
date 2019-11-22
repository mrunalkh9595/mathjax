import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
test=[];
  constructor() {
    this.loadpage();
  }
  ionViewDidEnter() {
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
  loadpage(){
    this.test= [
      
    
      {"question_number": 1, "answer": "Answer (2)<br />For NaOH, Valence Factor = 1. So, N = M<br />Final Normality = <math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><mrow><msub><mi>N</mi><mn>1</mn></msub><msub><mi>V</mi><mn>1</mn></msub><mo>+</mo><msub><mi>N</mi><mn>2</mn></msub><msub><mi>V</mi><mn>2</mn></msub></mrow><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>+</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0</mn><mo>.</mo><mn>5</mn><mo>&#160;</mo><mo>&#215;</mo><mo>&#160;</mo><mn>2</mn><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><mn>1</mn><mo>&#215;</mo><mo>&#160;</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo>&#160;</mo><mo>=</mo><mo>&#160;</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>"},
       {"question_number": 2, "answer": "Answer (1)<br />X<sub>ethOH</sub> =<math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><msub><mi>n</mi><mrow><mi>e</mi><mi>t</mi><mi>O</mi><mi>H</mi></mrow></msub><mrow><msub><mi>n</mi><mrow><mi>e</mi><mi>t</mi><mi>O</mi><mi>H</mi></mrow></msub><mo>+</mo><msub><mi>n</mi><mrow><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>46</mn><mo>/</mo><mn>46</mn></mrow><mrow><mn>46</mn><mo>/</mo><mn>46</mn><mo>+</mo><mo>&#160;</mo><mn>1000</mn><mo>/</mo><mn>18</mn></mrow></mfrac></math>= <math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><mn>1</mn><mrow><mn>56</mn><mo>.</mo><mn>56</mn></mrow></mfrac></math>"},
       {"question_number": 2, "answer": "Answer (1)<br />% of Carbon =<math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><mstyle displaystyle='true'><mfrac><mn>12</mn><mn>44</mn></mfrac><mo>&#160;</mo><mo>&#215;</mo><mo>&#160;</mo><mn>0</mn><mo>.</mo><mn>44</mn></mstyle><mrow><mn>0</mn><mo>.</mo><mn>16</mn></mrow></mfrac><mo>&#160;</mo><mo>&#215;</mo><mo>&#160;</mo><mn>100</mn><mo>&#160;</mo><mo>&#8658;</mo><mn>75</mn><mo>%</mo></math><br />% of hydrogen =<math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><mstyle displaystyle='true'><mfrac><mn>2</mn><mn>18</mn></mfrac><mo>&#160;</mo><mo>&#215;</mo><mo>&#160;</mo><mn>0</mn><mo>.</mo><mn>18</mn></mstyle><mrow><mn>0</mn><mo>.</mo><mn>16</mn></mrow></mfrac><mo>&#160;</mo><mo>&#215;</mo><mo>&#160;</mo><mn>100</mn><mo>&#160;</mo><mo>&#8658;</mo><mn>12</mn><mo>.</mo><mn>5</mn><mo>%</mo></math>"},
       {"question_number": 2, "answer": "Answer (2)<br />Moles of mixture = <math xmlns='http://www.w3.org/1998/Math/MathML'><mfrac><mn>28</mn><mrow><mn>22</mn><mo>.</mo><mn>4</mn></mrow></mfrac><mo>&#8658;</mo><mfrac><mn>5</mn><mn>4</mn></mfrac></math><br /><math xmlns='http://www.w3.org/1998/Math/MathML'><msub><mi>C</mi><mn>2</mn></msub><msub><mi>H</mi><mn>6</mn></msub><mo>&#160;</mo><mo>+</mo><mfrac><mn>7</mn><mn>2</mn></mfrac><msub><mi>O</mi><mn>2</mn></msub><mo>&#8594;</mo><mn>2</mn><mi>C</mi><msub><mi>O</mi><mn>2</mn></msub><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><mn>3</mn><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>&#160;</mo><mfenced open='{' close='}'><mrow><mo>&#160;</mo><mi>x</mi><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><mi>y</mi><mo>&#160;</mo><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac></mrow></mfenced><mspace linebreak='newline'/><msub><mi>C</mi><mn>2</mn></msub><msub><mi>H</mi><mn>4</mn></msub><mo>&#160;</mo><mo>+</mo><mn>3</mn><msub><mi>O</mi><mn>2</mn></msub><mo>&#8594;</mo><mn>2</mn><mi>C</mi><msub><mi>O</mi><mn>2</mn></msub><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><mn>2</mn><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>&#160;</mo><mfenced open='{' close='}'><mrow><mfrac><mn>7</mn><mn>2</mn></mfrac><mi>x</mi><mo>&#160;</mo><mo>+</mo><mo>&#160;</mo><mn>3</mn><mi>y</mi><mo>&#160;</mo><mo>=</mo><mn>4</mn></mrow></mfenced></math>"},
       {"question_number": 2, "answer": "Answer (3)<br /> <math xmlns='http://www.w3.org/1998/Math/MathML'><mi>g</mi><mi>m</mi><mo>&#160;</mo><mi>e</mi><mi>q</mi><mo>.</mo><mo>&#160;</mo><mi>o</mi><mi>f</mi><mo>&#160;</mo><mi>N</mi><mi>a</mi><mi>O</mi><mi>H</mi><mo>&#160;</mo><mo>=</mo><mo>&#160;</mo><mfrac><mn>20</mn><mn>20</mn></mfrac><mo>,</mo></math><br /><br /><math xmlns='http://www.w3.org/1998/Math/MathML'><mi>g</mi><mi>m</mi><mo>.</mo><mo>&#160;</mo><mi>e</mi><mi>q</mi><mo>.</mo><mo>&#160;</mo><mi>o</mi><mi>f</mi><mo>&#160;</mo><msub><mi>H</mi><mn>2</mn></msub><mi>S</mi><msub><mi>O</mi><mn>4</mn></msub><mo>&#160;</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mo>.</mo><mn>45</mn></mrow><mn>49</mn></mfrac></math>,<br /><br /><math xmlns='http://www.w3.org/1998/Math/MathML'><mi>r</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mo>&#160;</mo><mo>=</mo><mo>&#160;</mo><mfrac><mn>20</mn><mn>20</mn></mfrac><mo>:</mo><mfrac><mrow><mn>2</mn><mo>.</mo><mn>45</mn></mrow><mn>49</mn></mfrac><mo>&#160;</mo><mo>=</mo><mo>&#160;</mo><mn>20</mn><mo>&#160;</mo><mo>:</mo><mo>&#160;</mo><mn>1</mn></math>"}
      ]
  }
  

}
