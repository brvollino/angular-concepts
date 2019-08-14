import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserEnum } from './shared/user.model';
import { flatMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
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
      flatMap(_ => this.userService.getByUsername('Vini')),
      map(users => users[0]),
      tap(user => console.log('AFTER POST: ', user)),
      flatMap(user =>
        this.userService.putUser({
          id: user.id,
          age: 41,
          username: 'V',
          company: 'ilegra',
          nationality: 'Swedish',
          role: UserEnum.USER
        })
      ),
      flatMap(_ => this.userService.getByUsername('Vini')),
      map(users => users[0]),
      tap(user => console.log('AFTER PUT: ', user)),
      flatMap(user => this.userService.deleteUser(user.id)),
    ).subscribe();
  }
}
