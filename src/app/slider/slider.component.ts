import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ChangeContext, Options, PointerType} from "ng5-slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
@Input() data;
@ViewChild("sliderRef",{static: false}) ele:ElementRef;
 private scale = [];
 private value: number = 0;
 private colors;
 private options;
constructor(protected ele1:ElementRef){

}
  ngAfterViewInit() {
    console.log(this.ele);
    let el = this.ele.nativeElement;

    el.querySelectorAll('.ng5-slider-bar')[2].style.backgroundColor = 'green';
  }
  ngOnInit() {

    this.colors = this.data && this.data.data||{};
   let val = this.data.values;
   let predefNum =[0,20,40,60,80,100];
   let predefCol =["red","green","yellow"];
   let predefGrade = ["A","B","C","D","E","F"];

    let divident = val.length / 6
    val.forEach((val)=>{
      this.scale.push({value:val,legend:val});
    })
    console.log(this.data);

    this.options = {
      floor: 0,
      ceil: 100,
      step:1,
      showSelectionBar: true,
      //showTicksValues: true,
      tickStep: 5,
      tickValueStep: 5,
      showTicks: true
      /*restrictedRange: {
        from: 30,
        to: 70,
      },
      selectionBarGradient: {
        from: 'white',
        to: 'Green'
      }*/
      ,
      ticksTooltip: (v: number): string => {
        return 'Tooltip for ' + v;
      },
      getPointerColor: (value: number): string => {
        return this.colors[value];
      },
      showOuterSelectionBars: true,
      stepsArray: this.scale
  }
  }








  //to set the labels on the top so here replacinhg 1,2,3.. values with ""
  /* translate: (valueOne: number, label: any): string => {
     console.log();
     switch (valueOne) {
       default: return ' ';
     }},*/
  //getSelectionBarColor


logText = '';

onUserChangeStart(changeContext: ChangeContext): void {
  // this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
}

onUserChange(changeContext: ChangeContext): void {
  this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
}

onUserChangeEnd(changeContext: ChangeContext): void {
  //this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  console.log(changeContext);
}

getChangeContextString(changeContext: ChangeContext): string {
  return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
    `value: ${changeContext.value}, ` +
    `highValue: ${changeContext.highValue}}`;
}


//DOM Manipulation
  domManipulation(){

  }

}
