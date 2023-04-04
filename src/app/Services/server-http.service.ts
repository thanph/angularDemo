import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFSVF5YWpUZDctdE5pMnlyclRaQW5EbElOSE5UMmpOWnlNYVFfenZET1g4In0.eyJleHAiOjE2Nzk3Mjk4MTEsImlhdCI6MTY3OTY0MzQxMSwianRpIjoiOWFhNzZiYzAtNDEyNy00NTYyLWEzOTQtYjk2NGU0Mzc0NTdhIiwiaXNzIjoiaHR0cHM6Ly9kZXYtcHRzc28udm5jYXJlLnZuL2F1dGgvcmVhbG1zL2hzc2t2MyIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI2MTFkY2U1Mi03OWRlLTQxNDUtOTk0Mi0xM2Y3M2Q4N2I1OGEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJiaS1oc3NrIiwic2Vzc2lvbl9zdGF0ZSI6ImViNGVhN2Y1LTEzODQtNDg2MC1hOWNkLThlNmNhMWM5MzA0MSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJST0xFX1NZVCIsIlJPTEVfVFlUIiwiUk9MRV9UVFlUIiwiUk9MRV9VU0VSIiwib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWpoaXBzdGVyIiwiUk9MRV9BRE1JTiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LXJlYWxtIiwidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIGhzc2t2MyBwcm9maWxlIiwic2lkIjoiZWI0ZWE3ZjUtMTM4NC00ODYwLWE5Y2QtOGU2Y2ExYzkzMDQxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJyb2xlcyI6WyJST0xFX1NZVCIsIlJPTEVfVFlUIiwiUk9MRV9UVFlUIiwiUk9MRV9VU0VSIiwib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWpoaXBzdGVyIiwiUk9MRV9BRE1JTiIsInVtYV9hdXRob3JpemF0aW9uIl0sIm5hbWUiOiJRdeG6o24gdHLhu4sgdmnDqm4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImZhbWlseV9uYW1lIjoiUXXhuqNuIHRy4buLIHZpw6puIn0.BPv63yNoloWtZLYnykTylK8ybFbXokAzf1hjEAPitoQOpW3EWo1BLXVkQdsnoTUfu9mrHG773IhT8LbaxAj37MmgZpUHtMT6DyF-jAWz-5ayplVoTe8LvzLxCf-XISb5QB6JDu9k2VRQsxUmKcMig6vSKm0YN5dTybH_SRIvCBZniMNcsTXSv7CWVJsveE5Jl5aN1S2JEjkVdKoUf7oszdVZfG1ut_pUsdVNfvuce5HYkWnst--YcCwLROB0k8qrheezkuPubEZT9gW-GYQdy3ChpFH2BrQzkp0HdlqMoLROnNXVy97Y_6qCdyf8844ER-mkUqrxZCAJGaOyQCf4Lg'
    })
  };
  // private REST_API_SERVER = 'http://localhost:8088';
  constructor(private httpClient: HttpClient) {

   }
  
    getAllPost():Observable<any>{
    const url = `https://jsonplaceholder.typicode.com/posts`;
    // const url = `http://localhost:8080/api/user/get-all-user`;
    return this.httpClient.get<any>(url,this.httpOptions)
    }
    addPost(post : Post):Observable<any>{
      const url = `https://jsonplaceholder.typicode.com/posts`;
      return this.httpClient.post<any>(url,post,this.httpOptions)
    }
    addOrUpdateUser(user : User):Observable<any>{
      const url = `http://localhost:8080/api/user/register`;
      return this.httpClient.post<any>(url,user,this.httpOptions)
    }
    getAllUser():Observable<any>{
      const url = `http://localhost:8080/api/user/get-all-user`;
      return this.httpClient.get<any>(url,this.httpOptions)
      }
    deleteUserById(id:number):Observable<any>{
      const url=`http://localhost:8080/api/user/delete`;
      return this.httpClient.post<any>(url,id,this.httpOptions)
    }
 



  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
