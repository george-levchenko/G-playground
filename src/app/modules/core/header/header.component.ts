import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy({ checkProperties: true})
export class GHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
