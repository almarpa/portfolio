import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backgroundImage!: string;
  @Input() greeting: string = '¡Hi!';
  @Input() heading: string = "I'm Alejandro Marco Palomares";
  @Input() subHeading: string[] = [
    'Android Developer',
    'FrontEnd Developer',
    'Software Engineer',
  ];

  safeBackgroudImage!: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(
      this.backgroundImage,
    );
  }
}
