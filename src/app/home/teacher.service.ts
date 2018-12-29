import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Teacher } from './techer-model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teacheresUrl = 'api/teacheres';
  constructor(
    private http: HttpClient
  ) { }

  getTeacheres(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacheresUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${this.teacheresUrl}/${id}`;
    return this.http.get<Teacher>(url).pipe(
      catchError(this.handleError<Teacher>(`getHero id=${id}`))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
