import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {IconsModule} from '../../icons/icons.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, NgbCollapse, IconsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;

  @Output()
  public menuSelected = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  public handleClick(menuSelected: MouseEvent) {
    this.menuSelected.emit((menuSelected.target as HTMLElement).id);
  }
}
