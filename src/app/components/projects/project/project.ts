export class Project {
  name: string;
  description: string;
  screenshoots: string[];
  source: string;

  constructor(
    name: string,
    description: string,
    screenshoots: string[],
    source: string,
  ) {
    this.name = name;
    this.description = description;
    this.screenshoots = screenshoots;
    this.source = source;
  }
}
