import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  values :any = [];
  colors :any = {};
  data:any;
  constructor(){
    this.colors[0]  = "red";
    this.colors[20] = "red";
    this.colors[40] = "orange";
    this.colors[60] = "yellow";
    this.colors[80] = "green";
    this.colors[100] = "green";
    for(let i = 0;i<=100;i++){
      this.values.push(i);
    }
this.data = {values:this.values,data:this.colors};
  }


}

