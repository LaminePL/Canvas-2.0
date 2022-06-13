import { Component, OnInit } from '@angular/core';
import { PartnershipsService } from 'src/services/partnerships.service';
import { PartnershipModel } from '../../models/partnership.model';

@Component({
  selector: 'app-academy-partnerships',
  templateUrl: './academy-partnerships.component.html',
  styleUrls: ['./academy-partnerships.component.scss']
})
export class AcademyPartnershipsComponent implements OnInit {

  partnershipList: Array<PartnershipModel>
  loading: boolean;


  constructor(private partnershipService: PartnershipsService) { }

  ngOnInit(): void {

    this.loading = true;
    this.partnershipService.getPartnerships().subscribe(data => {
      this.partnershipList = data;
      this.loading = false;
    })
  }




}
