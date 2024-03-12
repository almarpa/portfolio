import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backgroundImage!: string;
  @Input() heading!: string;
  @Input() subHeading!: string;

  safeBackgroudImage!: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(
      this.backgroundImage,
    );
  }
}
