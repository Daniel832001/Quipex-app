import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompanyRecordsComponent } from '../company-records/company-records.component';

@Component({
  standalone: true, 
  imports: [CommonModule, RouterModule, CompanyRecordsComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
}
