import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyRecord } from '../../../models/company-record.model';
import { CompanyRecordAppService } from '../../../services/company-record-app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  standalone: true, 
  imports: [CommonModule, FormsModule],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit {

  constructor(public service: CompanyRecordAppService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(this.service.companyRecordData);
    if (this.service.companyRecordData.id == 0) {
      console.log("Hello");
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

  }

  insertRecord(form: NgForm) {
    this.service.postCompanyRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully", "ToDo Item Register");
      },
      (err: HttpErrorResponse) => { 
        console.error(err);
        if (err.status === 400) {
          alert('Creation failed: Invalid data. ISIN must not start with 2 numbers and must be 12 characters long.');
        } else if (err.status === 409) {
          alert('Creation failed: A record with this ISIN or name already exists.');
        } else {
          alert('Unexpected error occurred. Please try again.');
        }
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCompanyRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated successfully", "ToDo Item Register");
      },
      (err: HttpErrorResponse) => { 
        console.error(err);
        if (err.status === 400) {
          alert('Creation failed: Invalid data. ISIN must not start with 2 numbers and must be 12 characters long.');
        } else if (err.status === 409) {
          alert('Creation failed: A record with this ISIN or name already exists.');
        } else {
          alert('Unexpected error occurred. Please try again.');
        }
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.companyRecordData = new CompanyRecord();
  }

  setIdDefault(value: any) {
    if (value === null || value === undefined || value === '') {
      this.service.companyRecordData.id = 0;
    }
  }

}
