import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  username:string = 'User';

  count: number = 0;

  @Output()
  notifications = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementNotification() {
    console.log('incement called')
    this.count++;
    this.notifications.emit(this.count);
  }

}
