import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyRecordsComponent } from './components/company-records/company-records.component';
import { FormComponent } from './components/company-records/form/form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'dashboard',
        component: CompanyRecordsComponent,
        children: [
            {
                path: 'form',
                component: FormComponent
            }
        ]
    }
];