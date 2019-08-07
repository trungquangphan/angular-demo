import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent implements OnInit {

  @Input("list-name")
  namesOfListNameComp:Array<string> = [];

  @Output()
  clearAllStudent = new EventEmitter<boolean>();

  @Output("removeLastStudent")
  removeLastStudentEventEmitter = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  removeAllStudents():void {
    // this.namesOfListNameComp = [];
    this.namesOfListNameComp.splice(0, this.namesOfListNameComp.length);
    // this.clearAllStudent.emit(true);
  }

  removeLastStudent(): void {
    let removedStudentName = this.namesOfListNameComp.pop();
    this.removeLastStudentEventEmitter.emit(removedStudentName);
  }

}
