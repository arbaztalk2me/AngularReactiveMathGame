import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay } from 'rxjs';
import { MathValidator } from '../math-validator';

@Component({
  selector: 'app-game-windows',
  templateUrl: './game-windows.component.html',
  styleUrls: ['./game-windows.component.css']
})
export class GameWindowsComponent implements OnInit {


  formData=new FormGroup({
    a:new FormControl(this.getRandomNumber()),
    b:new FormControl(this.getRandomNumber()),
    answer:new FormControl("")
  },[MathValidator.mathAddition])

  time=0;
  solveNumber:number=0;
  startTime=new Date;

  constructor() { }

  ngOnInit(): void {
    

    this.formData.statusChanges.pipe(delay(700)).subscribe((value)=>{

      if(value==="INVALID"){
        return;
      }
      this.solveNumber=this.solveNumber+1;
      let endTime=new Date;
      this.time=(endTime.getTime()-this.startTime.getTime())/this.solveNumber/1000
      this.formData.patchValue({
        a:this.getRandomNumber(),
        b:this.getRandomNumber(),
        answer:""
      })
    })
  }


  getRandomNumber(){
    return Math.floor(Math.random()*10);
  }


}
