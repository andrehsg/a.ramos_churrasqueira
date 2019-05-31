import { Component, OnInit } from '@angular/core';
import { CondominoService } from '../../condominos/condomino.service';
//import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //@ViewChild('condominoForm') NgForm condominoForm;

  constructor(private condo: CondominoService) { }

  ngOnInit() {
  }

  onSubmit (event: any) {

   console.log ("onSubmit " + event.target.condomino.value);
   this.condo.registerUser(event.target.condomino.value, event.target.apto.value, event.target.password.value);



  }

}
