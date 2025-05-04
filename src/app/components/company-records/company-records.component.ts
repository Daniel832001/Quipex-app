import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyRecord } from '../../models/company-record.model';
import { CompanyRecordAppService } from '../../services/company-record-app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GetFormComponent } from './get-form/get-form.component';

@Component({
  standalone: true, 
  imports: [CommonModule, FormsModule, FormComponent, GetFormComponent],
  selector: 'app-company-records',
  templateUrl: './company-records.component.html',
  styles: ``
})
export class CompanyRecordsComponent implements OnInit {

  constructor(public service: CompanyRecordAppService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: CompanyRecord) {
    this.service.companyRecordData = Object.assign({}, selectedRecord);
  }
}
