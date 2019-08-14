import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserEnum } from './shared/user.model';
import { flatMap, tap, map, switchMap, take, filter } from 'rxjs/operators';
import { from, forkJoin, zip } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
/*
    this.userService.getAll().subscribe((users) => console.log(users));

    this.userService.getById(0).subscribe((user) => console.log(user));

    this.userService.getByUsername('adrian').subscribe((users) => console.log(users));

    this.userService.saveUser({
      age: 60,
      username: 'Peppe',
      company: 'ilegra',
      nationality: 'Russian',
      role: UserEnum.USER
    }).subscribe();

    this.userService.getByUsername('Peppe').subscribe((users) => console.log(users));


    this.userService.saveUser({
      age: 40,
      username: 'V',
      company: 'ilegra',
      nationality: 'Brazilian',
      role: UserEnum.USER
    }).pipe(
      switchMap(_ => this.userService.getByUsername('V')),
      map(users => users[0]),
      tap(user => console.log('AFTER POST: ', user)),
      switchMap(user =>
        this.userService.putUser({
          id: user.id,
          age: 41,
          username: 'V',
          company: 'ilegra',
          nationality: 'Swedish',
          role: UserEnum.USER
        })
      ),
      switchMap(_ => this.userService.getByUsername('V')),
      map(users => users[0]),
      tap(user => console.log('AFTER PUT: ', user)),
      switchMap(user => this.userService.deleteUser(user.id)),
      take(1)
    ).subscribe();

    const myArr = ['🐦', '😺', '🐕', '🐊'];
    from(myArr)
      .pipe(
        filter(x => x !== '🐦'),
        map(x => `Hello ${x}!`)
      )
      .subscribe(console.log);
      // Hello 😺!
      // Hello 🐕!
      // Hello 🐊!

    from(myArr, async)
      .pipe(
        filter(x => x !== '🐦'),
        map(x => `Hello ${x}!`)
      )
      .subscribe(console.log);
*/
    const promise1 = new Promise(resolve => setTimeout(() => resolve('🐦'), 3000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('😺'), 2000));
    const promise3 = new Promise(resolve => setTimeout(() => resolve('🐕'), 5000));

    /*
    forkJoin({
      '0': this.userService.getById(0),
      '2': this.userService.getById(1)
    })
    .subscribe((value) => console.log('forkJoin object: ', value));
    */

    forkJoin(
      from([promise1, promise2]),
      from([promise1, promise2, promise3]),
    )
    .subscribe((value) => console.log('forkJoin: ', value));

    zip(
      from([promise1, promise2]),
      from([promise1, promise2, promise3]),
    )
    .subscribe((value) => console.log('zip: ', value));
  }
}
