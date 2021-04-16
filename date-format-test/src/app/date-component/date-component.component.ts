import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.scss']
})
export class DateComponentComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CreateMyForm();

    console.log(this.myForm.value);
  }

  CreateMyForm() {

    const pipe = new DatePipe('en');// Why not 'de' ? 

    this.myForm = this.formBuilder.group({
      startDate: new FormControl(new Date('01/12/2021')),
      endDate: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en')),
      pipeDate: new FormControl(pipe.transform(new Date(1,12,2021), 'dd-MM-yyyy')),
    });

  }


  // startDate: new FormControl(new Date('10/02/2021')),
  // endDate: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en')),    

}
