import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispensaryService {

  httpOptions = { headers: new HttpHeaders({}) };
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url+'random', this.httpOptions);
  }

  post(data: any) {
    return this.http.post(this.url+'/random'+ `${data}`, this.httpOptions);
  }

  update(data: any) {
    return this.http.put(this.url+`/random${data.id}=${data}`, this.httpOptions);
  }

  delete(id: string) {
    return this.http.delete(this.url+ `/random${id}`, this.httpOptions);
  }


}
