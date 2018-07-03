import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class AutoUnsubscribeBase implements OnDestroy {

  private _subs: Subscription[] = [];

  set subs(sub: Subscription | Subscription[]) {
    if (sub && (sub instanceof Subscription)) {
      this._subs.push(sub);
    }
    if (sub instanceof Array) {
      this._subs = this._subs.concat(sub);
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  protected unsubscribeAll() {
    for (const sub of this._subs) {
      if (sub) {
        sub.unsubscribe();
      }
    }
    this._subs = [];
  }
}
