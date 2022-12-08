import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordListComponent {

}
