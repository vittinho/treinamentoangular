import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ArrayToStringPipe } from 'src/app/pipes/arraytostring.pipe';

@Component({

      selector: 'component-1',
      templateUrl: './component-1.component.html',
      styleUrls: []
})
export class Component1 {

  constructor(
      private notificationService: NotificationService,
      private arrayToString: ArrayToStringPipe
  ) {}

  @Input()
  public label: string;

  @Output()
  public clickSalvar = new EventEmitter();


  salvar(botao: number) {
    this.label = 'Nome - Filho';
    this.notificationService.sendNotification(`
    Botão ${botao} foi clicado
    `);
    this.clickSalvar.next(botao);
  }


}
