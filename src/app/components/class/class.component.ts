import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Define a class for the class structur
export class Class{
  _id: string| undefined;
  name:string| undefined;
  room:string| undefined;
  time:string| undefined;
  day:string| undefined;
  teacher:string | undefined;

}

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {
  title = "Classes";
  Classes: Class[]=[
    {_id: '1', name:'My Class',room:'myRoom',time:'9:00 AM',day:'My Day',teacher:"Teacher1"},
     {_id: '2', name:'My Class2',room:'myRoom2',time:'9:02 AM',day:'My Day2',teacher:"Teacher2"},
     {_id: '3', name:'My Class3',room:'myRoom3',time:'9:03 AM',day:'My Day3',teacher:"Teacher3"}
  ]
  selectedClass: Class | undefined;

  onSelect(selectedClass:Class): void{
    this.selectedClass = selectedClass;

    
    return
  }
  onReset():void{
    this.selectedClass=null;//Empties form and makes it dissapear
  }
}
