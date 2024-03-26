import {Technology} from './technology';

export class Skill {
  description: string;
  technologies: Technology[];

  constructor(description: string, technologies: Technology[]) {
    this.description = description;
    this.technologies = technologies;
  }
}
