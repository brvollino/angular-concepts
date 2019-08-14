import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
  private cast: string[] = [];

  constructor(private movieName: string) {}

  addCastMember(actorName: string) {
    if (this.cast.includes(actorName)) {
      return;
    }
    this.cast.push(actorName);
  }

  getCastMembers() {
    return this.cast;
  }
}
