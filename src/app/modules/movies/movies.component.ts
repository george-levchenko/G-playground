import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@Component({
  selector: 'g-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy({ checkProperties: true})
export class GMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
