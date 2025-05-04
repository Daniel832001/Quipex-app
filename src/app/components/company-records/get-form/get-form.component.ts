import { Component } from '@angular/core';
import { CompanyRecordAppService } from '../../../services/company-record-app.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, 
  selector: 'app-get-form',
  imports: [FormsModule],
  templateUrl: './get-form.component.html',
  styles: ``
})
export class GetFormComponent {
  getId: number | null = null;

  constructor(public service: CompanyRecordAppService) {}

  onFetchSubmit() {
    if (this.getId) {
      this.service.GetCompanyRecord(this.getId).subscribe(
        (record) => {
          // console.log('Received record:', record);
          this.service.list = [record];
        },
        (err) => {
          console.error('Error fetching record:', err);
          this.service.list = [];
          alert('Record not found. Please check the ID and try again.');
        }
      );
    } else {
      this.service.GetCompanyRecords().subscribe(
        (records) => {
          // console.log('Received records:', records);
          this.service.list = records;
        },
        (err) => {
          console.error('Error fetching all records:', err);
          alert('Error fetching all records');
        }
      );
    }
  }
}
