import { Component, OnInit } from '@angular/core';
import { CondominoService } from './condomino.service';

@Component({
  selector: 'app-lista-condominos',
  templateUrl: './lista-condominos.component.html',
  styleUrls: ['./lista-condominos.component.css']
})
export class ListaCondominosComponent implements OnInit {

  private users: any;

  constructor(private condo: CondominoService) { }

  ngOnInit (){ }

  ngAfterViewInit() {

   console.log ("getUsers");
   this.condo.getUsers()
   .subscribe(
          (data: any) => {
             let users = [];
             for (let key in data) {
                 console.log("KEY " + key)
                 console.log(JSON.stringify(data[key]));
                 users.push(data[key]);
            }
            this.users = users;
            console.log(this.users);
            
          },
            err => console.error('Observer got an error: ' + err),
          () => console.log('Observer got a complete notification')
   );
   
  


  }





}
