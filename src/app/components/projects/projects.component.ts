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
      [
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565717_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565725_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565710_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565709_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565712_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565713_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565711_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565716_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565715_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565714_y.jpg?raw=true',
        'https://github.com/almarpa/AndroidBaseTemplate/blob/develop/app/src/main/res/drawable/snapshots/photo_5967339188271565708_y.jpg?raw=true',
      ],
      'https://github.com/almarpa/AndroidBaseTemplate',
    ),
    new Project(
      'Rick&MortyApp',
      'Rick&Morty iOS / Android app built entirely on Compose UI Multiplatform.',
      [
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/1.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/2.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/3.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/4.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/5.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/6.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/7.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/8.png?raw=true',
        'https://github.com/almarpa/RickAndMortyApp/blob/develop/composeApp/src/commonMain/snapshots/9.png?raw=true',
      ],
      'https://github.com/almarpa/RickAndMortyApp',
    ),
    new Project(
      'DragonBallApp',
      'DragonBall iOS / Android app built in Kotlin Multiplatform with native views using SwiftUI and Jetpack Compose.',
      [
        'https://github.com/almarpa/DragonBallApp/blob/develop/shared/src/commonMain/kotlin/com/almarpa/dragonballapp/resources/3.png?raw=true',
        'https://github.com/almarpa/DragonBallApp/blob/develop/shared/src/commonMain/kotlin/com/almarpa/dragonballapp/resources/4.png?raw=true',
        'https://github.com/almarpa/DragonBallApp/blob/develop/shared/src/commonMain/kotlin/com/almarpa/dragonballapp/resources/1.png?raw=true',
        'https://github.com/almarpa/DragonBallApp/blob/develop/shared/src/commonMain/kotlin/com/almarpa/dragonballapp/resources/2.png?raw=true',
      ],
      'https://github.com/almarpa/DragonBallApp',
    ),
    new Project(
      'FreeWeather',
      'Android application for consulting weather forecasts from AEMET´s REST API and based on the MVP pattern. Developed for an end-of-degree project.',
      [
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.28.27.png?raw=true',
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.28.27.png?raw=true',
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.28.27.png?raw=true',
        'https://user-images.githubusercontent.com/38918727/65866842-d114f080-e375-11e9-93fc-2bd3ff02bc2d.jpg',
        'https://user-images.githubusercontent.com/38918727/65866845-d1ad8700-e375-11e9-8e2d-b0d884bcac96.jpg',
        'https://user-images.githubusercontent.com/38918727/65866843-d114f080-e375-11e9-81d0-25d1636dc7e9.jpg',
        'https://user-images.githubusercontent.com/38918727/65866844-d114f080-e375-11e9-972e-6c53d9f16064.jpg',
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.30.06.png?raw=true',
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.30.26.png?raw=true',
        'https://github.com/almarpa/FreeWeather/blob/master/Captura%20de%20pantalla%202024-09-05%20a%20las%2013.30.44.png?raw=true',
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
