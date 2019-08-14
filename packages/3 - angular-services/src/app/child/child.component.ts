import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  private valuesSubscription: Subscription;

  constructor(private counter: CounterService) { }

  ngOnInit() {
    this.valuesSubscription = this.counter.getMultiValueObservable().subscribe(value => console.log(value));
  }

  ngOnDestroy() {
    this.valuesSubscription.unsubscribe();
  }
}
