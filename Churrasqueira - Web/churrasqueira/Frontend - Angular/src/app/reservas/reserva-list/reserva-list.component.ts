import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import {NgbDateStruct, NgbDateParserFormatter, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from '../reserva.service';
@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  model: NgbDateStruct;
  disabled = false;
  selectedDate: NgbDate;
  disabledDates:NgbDateStruct[]=[
    {year:2019,month:5,day:26},
    {year:2019,month:5,day:27}
  ]
 
  

  constructor(calendar: NgbCalendar, private res: ReservaService,
              private ngbDateParserFormatter: NgbDateParserFormatter) {
    this.model = calendar.getToday();
 
  }

  ngOnInit() {

    this.getReservas ()
  
  }

  getReservas () {
    this.res.getReservas()
    .subscribe(
          (data: any) => {
             let users = [];
             for (let key in data) {
                 console.log("KEY " + data[key].date)
                 console.log(JSON.stringify(data[key].date));
                 var stringDate = new Date(JSON.stringify(data[key].date));
                 var jsonDate = {year: stringDate.getFullYear(), month: stringDate.getMonth(), day: stringDate.getDate() + 1 }
                 console.log("Dated2 " + JSON.stringify(jsonDate));
                 this.disabledDates.push(jsonDate);
            }
          
            
            
          },
            err => console.error('Observer got an error: ' + err),
          () => console.log('Observer got a complete notification')
   );
  }

     isDisabled=(date:NgbDateStruct,current: {month: number,year:number})=>
       this.disabledDates.find(x=>new NgbDate(x.year,x.month,x.day).equals(date))?true:false;

       onDateSelection(event: any) {
          this.selectedDate = event;
          console.error("Selected" + this.selectedDate);
       }

       onReservaPerformed () {
          var stringDate = this.selectedDate.year + "/" + this.selectedDate.month + "/" + this.selectedDate.day;
          console.info("onReservaPerformed " + this.ngbDateParserFormatter.format(this.selectedDate));
          this.res.postReservas(this.ngbDateParserFormatter.format(this.selectedDate));
       }

}
