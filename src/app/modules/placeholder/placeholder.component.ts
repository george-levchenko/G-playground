import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@Component({
  selector: 'g-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy({ checkProperties: true})
export class GPlaceholderComponent implements OnInit {

  title = 'g-playground';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
