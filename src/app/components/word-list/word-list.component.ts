import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { WORDS } from '../../words.data';
import { IWord } from '../../word.interface';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordListComponent {
  @Input() type!: string;
  @Input() length!: number | null;
  @Input() duplicates!: string;
  @Input() firstChar!: string;

  vowels: string = 'аоуэыяеюёи';

  renderWords(): IWord[] {
    let words: IWord[] = WORDS;

    if (this.type !== 'any') {
      words = words.filter((word: IWord) => word.type === this.type);
    }
    if (this.length !== null) {
      words = words.filter((word: IWord) => word.word.length === this.length);
    }
    if (this.duplicates !== 'any') {
      words = words.filter((word: IWord) => String(word.duplicates) === this.duplicates);
    }
    if (this.firstChar !== 'any') {
      words = words.filter((word: IWord) => {
        if (this.firstChar === 'vowel') {
          return this.vowels.indexOf(word.word[0]) > -1;
        } else {
          return this.vowels.indexOf(word.word[0]) === -1;
        }
      });
    }

    return words.sort((word1: IWord, word2: IWord) => {
      return +word2.ipm - +word1.ipm;
    });
  }
}
