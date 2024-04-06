import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProjectComponent} from './project/project.component';
import {Project} from './project/project';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrls: ['projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      'TemplateApp',
      'Starter Android Compose template that provides a project structure with good practices using MVVM pattern and popular libraries like: Retrofit, Room, HILT and DataStore.',
      ['https://cdn-icons-png.flaticon.com/512/12366/12366717.png'],
      'https://github.com/almarpa/AndroidBaseTemplate',
    ),
    new Project(
      'FreeWeather',
      'Android application for consulting weather forecasts from AEMET´s REST API and based on the MVP pattern. Developed for an end-of-degree project.',
      [
        'https://github.com/almarpa/FreeWeather/assets/38918727/520107f7-c45a-41a9-9272-1d1e16517a08',
        'https://user-images.githubusercontent.com/38918727/65866842-d114f080-e375-11e9-93fc-2bd3ff02bc2d.jpg',
        'https://user-images.githubusercontent.com/38918727/65866845-d1ad8700-e375-11e9-8e2d-b0d884bcac96.jpg',
        'https://user-images.githubusercontent.com/38918727/65866843-d114f080-e375-11e9-81d0-25d1636dc7e9.jpg',
        'https://user-images.githubusercontent.com/38918727/65866844-d114f080-e375-11e9-972e-6c53d9f16064.jpg',
        'https://github.com/almarpa/FreeWeather/assets/38918727/ddd5ee61-0dbb-4c91-be8a-31b8280729e7',
      ],
      'https://github.com/almarpa/FreeWeather',
    ),
    new Project(
      'MacularPRO',
      'Development of a medical Web application to analize and manage patient information with macular diseases. CRUD operations, analytics and graphics. Presented as end-of-Master`s project with the colaboration of the Information Systems and Computing Department (DSIC) at Polytechnic University of Valencia (UPV).',
      [
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/e0825cb9-5e06-4b58-a8c9-4c690d15c930',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/d0be5ebb-aaa1-4fb0-a024-3d7923e1f65a',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/9574900d-c800-4575-b3ef-629b985b2067',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/e7e3825b-1183-4d8d-aadd-356ea8abaf77',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/499dff14-8924-4907-917f-b643ba28980c',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/e4aac35f-d594-4411-82a8-bf7d809bb4c6',
        'https://github.com/almarpa/MacularPRO_FrontEnd/assets/38918727/37460f6c-7b60-4e4e-aca5-e40517c5e846',
      ],
      'https://github.com/almarpa/MacularPRO_FrontEnd',
    ),
    new Project(
      'VLCWebCamp',
      'Development of a web site for conferences with some seminars and workshops to learn about programming.',
      [
        'https://github.com/almarpa/VLCWebCamp/assets/38918727/78ab3e20-2629-421a-b825-a9c514ce4308',
        'https://github.com/almarpa/VLCWebCamp/assets/38918727/a987c5d6-2de2-4552-8be7-d33ebef44a5f',
        'https://github.com/almarpa/VLCWebCamp/assets/38918727/8b84d2f2-b1cf-4f9e-9384-c75951dcb32c',
        'https://github.com/almarpa/VLCWebCamp/assets/38918727/6d0d2d6e-84a4-4277-ac57-2ea8d3b7a8fe',
      ],
      'https://github.com/almarpa/VLCWebCamp',
    ),
  ];

  constructor() {}
}
