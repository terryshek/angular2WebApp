import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'modal-demo',
  directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
  templateUrl: "./app/modal/modal-demo.html"
})
export class ModalDemoComponent {

}