import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  showChild = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }

}
