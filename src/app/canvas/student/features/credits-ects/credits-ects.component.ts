import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-credits-ects',
  templateUrl: './credits-ects.component.html',
  styleUrls: ['./credits-ects.component.css']
})
export class CreditsECTSComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  type = 'pie';
  data = {
    labels: ["crédits validés", "crédits non validés"],
    datasets: [
      {
        label: "CREDITS ECTS",
        data: [40, 20],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',


        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1


      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

}
