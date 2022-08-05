import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor( private http: HttpClient ) { }

  getPlaceDetails( place_id: string ){
    return this.http.get(`${ environment.place_detail_url }?place_id=${ place_id }&key=${ environment.google_key }`)
      .subscribe(
        data => {
          console.log( data );
        } 
      )
  }
}
