import { FormControl } from '@angular/forms';

export interface Dispensary {
  name: FormControl<string>,
  laboratory: FormControl<string>,
  expiration: FormControl<string>,
  manufacture: FormControl<string>,
  stock: FormControl<number>,
  value: FormControl<number>,
}

export interface Sales {
  name: FormControl<string>,
  dateTime: FormControl<string>,
  quantity: FormControl<number>,
  total: FormControl<number>,
  valueUnit: FormControl<number>,
}
