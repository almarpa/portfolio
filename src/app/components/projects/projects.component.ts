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
        'https://private-user-images.githubusercontent.com/38918727/320102355-520107f7-c45a-41a9-9272-1d1e16517a08.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIzNDMyMTUsIm5iZiI6MTcxMjM0MjkxNSwicGF0aCI6Ii8zODkxODcyNy8zMjAxMDIzNTUtNTIwMTA3ZjctYzQ1YS00MWE5LTkyNzItMWQxZTE2NTE3YTA4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA1VDE4NDgzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4ZjVmYTU4ODdkYWJkMjAyOTY3ZTE1NjM5MzAwOWQ2NjEyNzY1MmNlNTg1ZjcxM2EyOTdjNTAzMDI0MzE0YjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1tiYqJ3e_ufZuh741znxytcTF65UmjVn3A11GYJ_KtE',
        'https://user-images.githubusercontent.com/38918727/65866842-d114f080-e375-11e9-93fc-2bd3ff02bc2d.jpg',
        'https://user-images.githubusercontent.com/38918727/65866845-d1ad8700-e375-11e9-8e2d-b0d884bcac96.jpg',
        'https://user-images.githubusercontent.com/38918727/65866843-d114f080-e375-11e9-81d0-25d1636dc7e9.jpg',
        'https://user-images.githubusercontent.com/38918727/65866844-d114f080-e375-11e9-972e-6c53d9f16064.jpg',
        'https://private-user-images.githubusercontent.com/38918727/320107954-ddd5ee61-0dbb-4c91-be8a-31b8280729e7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIzNDM0MzYsIm5iZiI6MTcxMjM0MzEzNiwicGF0aCI6Ii8zODkxODcyNy8zMjAxMDc5NTQtZGRkNWVlNjEtMGRiYi00YzkxLWJlOGEtMzFiODI4MDcyOWU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA1VDE4NTIxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThjYmI4MjQ0M2FkZTQ4ODBhZDM0NzQ0NmU2ZGE0YzQ5ODE0Zjc0YWU3NmFlZGU5YTgwOTIxZDQyNTNkNzI5OTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mxK2LT6G6UmAi2BkpabGsZ9b2wdUi4dZArHDhiCZ2ug',
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
