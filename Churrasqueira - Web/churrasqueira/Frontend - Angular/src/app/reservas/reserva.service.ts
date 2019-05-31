import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

getReservasUrl = 'http://localhost:8080/api/getReservas';
postReservasUrl = 'http://localhost:8080/api/novaReserva';
condominos: any;

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(private http: HttpClient) { 

  }

  getReservas() {
       console.log ("getReservas ");
       return this.http.get<any>(this.getReservasUrl,
       this.httpOptions);
  }

   

  postReservas(dateSelected: string) {
       console.log ("postReservas, dateSelected " + dateSelected);
       return this.http.post<any>(this.postReservasUrl,
       {"date": dateSelected, "apartamento": 99 },
       this.httpOptions)
       .subscribe(
          (data: any) => {
            console.log(data);
            
          },
            err => console.error('Observer got an error: ' + err),
          () => console.log('Observer got a complete notification')
        );
  }

}
