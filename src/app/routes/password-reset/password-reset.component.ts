import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ResetModalComponent} from '../../components/reset-modal/reset-modal.component'
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
 
  constructor( private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  open(){
    const modalRef = this.modalService.open(ResetModalComponent,{ size: 'xl' })
  }
 
 }
