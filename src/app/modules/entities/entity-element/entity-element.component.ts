import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEntity } from '@eagle6/models/entity';

@Component({
  selector: 'app-entity-element',
  templateUrl: './entity-element.component.html',
  styleUrls: ['./entity-element.component.scss']
})
export class EntityElementComponent {

  @Input() entity: IEntity;
  @Input() visibleAction = 'remove';
  @Output() checkBoxEvent = new EventEmitter();
  @Output() disconnectEvent = new EventEmitter();

  checkBoxHanlder(): void {
    this.checkBoxEvent.emit(this.entity.id);
  }

  disconnectHandler(): void {
    this.disconnectEvent.emit(this.entity.id);
  }
}
