import { FormControl } from '@angular/forms';

export interface Sales {
  name: FormControl<string>,
  dateTime: FormControl<string>,
  quantity: FormControl<number>,
  total: FormControl<number>,
  valueUnit: FormControl<number>,
}

