import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public readings = [
    {date: Date.now(), spread: '3card', cards: ['3 of Swords', 'Page of Wands', 'Death']},
    {date: Date.now(), spread: '1Card', cards: ['The Emperor']},
    {date: Date.now(), spread: '1Card', cards: ['The Tower']}
  ];
  constructor() {}

}
