import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy({ checkProperties: true})
export class GHeaderComponent implements OnInit {

  whiteTheme = false;
  languages = [
    {label: 'russian', value: 'ru'},
    {label: 'english', value: 'eng'},
    {label: 'spanish', value: 'sp'}
  ];
  language: any;

  constructor(private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.language = this.languages[1];
  }
}
