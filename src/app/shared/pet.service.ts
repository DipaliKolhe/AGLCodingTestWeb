import { Injectable, ErrorHandler } from '@angular/core';
import { OwnerGenderPets } from './owner-gender-pets.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  list : OwnerGenderPets[];
  readonly rootURL: string = 'http://localhost:58496/api/Pets';
  constructor(private http : HttpClient) { 

  }

  displayPets(type : string):Observable<OwnerGenderPets[]>
  {
    const params = {
      type: type
    }
   
   return  this.http.get<OwnerGenderPets[]>(this.rootURL, { params } ).pipe(
    // eg. "map" without a dot before
    map(data => {
      return data;
    }),
    // "catchError" instead "catch"
    catchError(this.errorHandler));
  
  }
errorHandler(error :HttpErrorResponse)
{
  return throwError(error.message || 'Server Error');
}
}
