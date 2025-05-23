import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRecordsComponent } from './company-records.component';

describe('CompanyRecordsComponent', () => {
  let component: CompanyRecordsComponent;
  let fixture: ComponentFixture<CompanyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
