import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  
  // used to hold values from parent

  @Input() item:String | undefined

// to give values from child to output

 @Output() onCancel= new EventEmitter()

@Output() onDelete =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
cancel(){
  this.onCancel.emit()
}

delete(){
  this.onDelete.emit(this.item)
}
}
