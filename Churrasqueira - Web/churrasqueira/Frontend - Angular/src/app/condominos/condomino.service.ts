import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CondominoService {

novoCondominoUrl = 'http://localhost:8080/api/novoCondomino';
ListaCondominoUrl = 'http://localhost:8080/api/condominos';
condominos: any;

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(private http: HttpClient) { 

  }

  registerUser(nome: string, apto: string, password: string) {
       console.log ("registerUser " + nome);
       return this.http.post<any>(this.novoCondominoUrl,
       {"apto": apto, "condomino": nome, "password": password },
       this.httpOptions)
      .subscribe(
	        (data: any) => {
		        console.log(data);
		      	
	      	},
	      	  err => console.error('Observer got an error: ' + err),
  			  () => console.log('Observer got a complete notification')
      	);
  }

    getUsers( ) {
       console.log ("getUsers");
       return this.http.get<any>(this.ListaCondominoUrl,
       this.httpOptions)
  }



  
}
