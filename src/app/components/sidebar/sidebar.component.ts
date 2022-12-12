import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() type!: string;
  @Input() length!: number | null;
  @Input() duplicates!: string;
  @Output() typeChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() lengthChange: EventEmitter<number | null> = new EventEmitter<number | null>();
  @Output() duplicatesChange: EventEmitter<string> = new EventEmitter<string>();
}
