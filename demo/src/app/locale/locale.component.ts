import { Component, OnInit, ViewChild } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import * as fr from 'dayjs/locale/fr';
import { DaterangepickerDirective } from '../../../../src/daterangepicker';
dayjs.extend(utc);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'locale',
  templateUrl: './locale.component.html'
})
export class LocaleComponent implements OnInit {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  locale = fr;
  datesRanges: any = {
    ['Today']: [dayjs(), dayjs()],
    ['Yesterday']: [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')],
    ['Last 7 days']: [dayjs().subtract(6, 'days'), dayjs()],
    ['Last 30 days']: [dayjs().subtract(29, 'days'), dayjs()],
    ['This month']: [dayjs().startOf('month'), dayjs().endOf('month')],
    ['Last month']: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
  };

  constructor() {}

  ngOnInit(): void {}
}
