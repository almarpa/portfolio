import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {SkillComponent} from './skill/skill.component';
import {Skill} from './skill/skill';
import {Technology} from './skill/technology';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  techSkills: Skill[] = this.getTechSkills();

  constructor() {}

  getTechSkills(): Skill[] {
    return [
      new Skill('Android', [
        new Technology(
          'Kotlin',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
        ),
        new Technology(
          'Compose',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg',
        ),
        new Technology(
          'Java',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        ),
        new Technology(
          'Room',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
        ),
        new Technology(
          'Retrofit',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
        ),
        new Technology(
          'Dagger/Hilt',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
        ),
      ]),
      new Skill('Frontend', [
        new Technology(
          'Angular',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        ),
        new Technology(
          'TypeScript',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        ),
        new Technology(
          'JavaScript',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        ),
        new Technology(
          'HTML',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        ),
        new Technology(
          'CSS / SCSS',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        ),
        new Technology(
          'Bootstrap',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        ),
      ]),
      new Skill('Cross-Platform', [
        new Technology(
          'Ionic',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
        ),
      ]),
      new Skill('Backend', [
        new Technology(
          'NodeJS',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        ),
        new Technology(
          'JavaScript',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        ),
        new Technology(
          'Express',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        ),
      ]),
      new Skill('DataBase', [
        new Technology(
          'MySQL',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        ),
        new Technology(
          'Oracle',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
        ),
        new Technology(
          'Sequelize',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg',
        ),
      ]),
      new Skill('Testing', [
        new Technology(
          'JUnit',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg',
        ),
        new Technology(
          'Mockito',
          'https://raw.githubusercontent.com/mockito/mockito/main/src/main/javadoc/org/mockito/logo.png',
        ),
        new Technology(
          'Karma',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg',
        ),
        new Technology(
          'Jasmine',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg',
        ),
      ]),
      new Skill('VersionControl', [
        new Technology(
          'GIT',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        ),
      ]),
      new Skill('Hosting', [
        new Technology(
          'Github Pages',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        ),
        new Technology(
          'Netlify',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
        ),
      ]),
    ];
  }
}
