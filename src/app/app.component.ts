import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n';
}

// TODO leka: Собственно тут ничего интересного i18n собирает и генерит файлы
//  Тут очень долго с конфигом разбирался так как на самом сайте https://angular.io/guide/i18n тут не очень понять
//  Или инфа устаревшая или что, так как некоторые настройке из их доки просто не работают
//  Еще скину то что я просмотрел и показалось инетерсным https://blog.ninja-squad.com/2019/12/10/angular-localize/
//  Тут непного про аот и жит https://stackoverflow.com/questions/42024207/angular-2-i18n-dynamic-instant-translation
