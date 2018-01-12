import {Component} from '@angular/core';
import {CustomModalContext} from "../custom-modal-context/custom-modal-context.component";
import {CloseGuard, DialogRef, ModalComponent} from "angular2-modal";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;

constructor(public dialog: DialogRef<CustomModalContext>) {
  this.context = dialog.context;
  dialog.setCloseGuard(this);
}

beforeDismiss(): boolean {
  return true; // prevent closing modal by using Esc
}
}
