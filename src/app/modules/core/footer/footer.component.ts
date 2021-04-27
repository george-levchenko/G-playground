import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'g-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
