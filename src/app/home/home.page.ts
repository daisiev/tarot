import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Reading } from '../models/reading.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public readings = this.localStorage.getItem('readings') || [];
  constructor(private localStorage: LocalStorage) {}
}
