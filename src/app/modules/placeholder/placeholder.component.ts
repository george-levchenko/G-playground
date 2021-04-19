import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'g-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.less']
})
export class GPlaceholderComponent implements OnInit {

  title = 'g-playground';

  constructor() { }

  ngOnInit(): void {
  }

}
