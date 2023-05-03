import { FormControl } from '@angular/forms';


export interface Dispensary {
  name: FormControl<string>,
  laboratory: FormControl<string>,
  expiration: FormControl<string>,
  manufacture: FormControl<string>,
  stock: FormControl<number>,
  value: FormControl<number>,
}
