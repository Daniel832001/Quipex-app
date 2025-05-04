import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyRecord } from '../../../models/company-record.model';
import { CompanyRecordAppService } from '../../../services/company-record-app.service';

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
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCompanyRecord().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated successfully", "ToDo Item Register");
      },
      err => { console.log(err); }
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
