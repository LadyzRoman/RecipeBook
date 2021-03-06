import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') as string));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string): Observable<User> {
    const header = new HttpHeaders().set('Authorization', `Basic ${window.btoa(username + ':' + password)}`);
    return this.http.get<User>(`${environment.apiUrl}/${environment.loginEndpoint}`, {headers: header})
      .pipe(
        map(user => {
          user.authdata = window.btoa(username + ':' + password);
          return user;
        }),
        tap(user => localStorage.setItem('user', JSON.stringify(user))),
        tap(user => this.userSubject.next(user))
      );
  }

  logout(): void {
    localStorage.removeItem('user');
    // @ts-ignore
    this.userSubject.next(null);
    // this.router.navigate(['/login']);
  }

  register(user: User): Observable<User> {
    user.phoneNumber = '89008007050'; // TODO get from form
    return this.http.post<User>(`${environment.apiUrl}/${environment.loginEndpoint}/register`, user);
  }
}
