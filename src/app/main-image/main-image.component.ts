import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  // onButtonClick(): void {
  //   this.router.navigate(['/playerdetails']);
  // }
  ngOnInit(): void {
  }

}
