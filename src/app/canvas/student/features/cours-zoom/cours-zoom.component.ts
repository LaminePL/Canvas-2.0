import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cours-zoom',
  templateUrl: './cours-zoom.component.html',
  styleUrls: ['./cours-zoom.component.css']
})
export class CoursZoomComponent implements OnInit {
 cards: {id: number; title: string; desc:string; img: string; }[] | undefined;
  constructor(private router: Router,
              private route: ActivatedRoute ) {

  }
  ngOnInit(): void {
    this.cards = [
      {id: 1 ,title: '4AZUR', desc: 'Microsf Azure Fundamentals', img: '../../../../assets//img//courses.png'},
      {id: 2 ,title: '4BOSS', desc: 'Business Owner', img: '../../../../assets//img//courses.png'},
      {id: 3 ,title: '4DOKR', desc: 'Developing and Delivering Software with Docker', img: '../../../../assets//img//courses.png'},
      {id: 4 ,title: '4KUBE', desc: 'Master Cloud-Native Infrastructure with Kubernetes', img: '../../../../assets//img//courses.png'},
      {id: 5 ,title: '4AZUR', desc: 'Microsf Azure Fundamentals', img: '../../../../assets//img//courses.png'},
      {id: 6 ,title: '4AZUR', desc: 'Microsf Azure Fundamentals', img: '../../../../assets//img//courses.png'},

    ]
  }

  public onCardClick(val: any) {
    this.router.navigate([val], { relativeTo: this.route });
  }


}
