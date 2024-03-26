import {Component, Input} from '@angular/core';
import {Skill} from './skill';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skill!: Skill;
  constructor() {}
}
