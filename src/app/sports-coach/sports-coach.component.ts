import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sports-coach',
  templateUrl: './sports-coach.component.html',
  styleUrls: ['./sports-coach.component.scss']
})
export class SportsCoachComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  onButtonClick(): void {
    this.router.navigate(['/playerdetails']);
  }
  ngOnInit(): void {
  }

}
