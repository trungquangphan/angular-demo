import { Component } from '@angular/core';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names:Array<string> = [];
  removedStudentName: string = '';
  addName(name:string){
    this.names.push(name);
  }

  clearAllStudents():void {
    // alert("We got event clearAllStudents from child-component");
    this.names = [];
  }

  removeLastStudent(lastStudentName):void {
    //alert("We got event removeLastStudent,name: " + lastStudentName);
    this.removedStudentName = lastStudentName;
  }
};  

