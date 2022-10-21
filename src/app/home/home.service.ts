import { Injectable } from '@angular/core';
import { delay, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getSectionTwo(): Observable<object> {
    const _data = {
      highlight: {
        image:
          'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?cs=srgb&dl=pexels-burst-544965.jpg&fm=jpg',
        heading: 'Heating and cooling services in Utah',
        body: 'Keeping cool in the summer and warm in the winter has never been easier. HVAC repair, replacement and maintenance services near you.',
      },
      blocks: [
        {
          icon: 'fa-hammer',
          title: 'HVAC Repair',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
          points: ['thermostat', 'water softener', 'A/C', 'Furnace'],
          image:
            'https://edscomfortsolutions.com/wp-content/uploads/2017/04/ac-repair.jpg',
        },
        {
          icon: 'fa-toolbox',
          title: 'HVAC Replacement',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
          points: ['thermostat', 'water softener', 'A/C', 'Furnace'],
          image:
            'https://d3286fwb37l4bg.cloudfront.net/blog/hvac-maintenance-questions-answered/ServiceQuestionsFeature.jpg',
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'Maintenance Services',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
          points: ['thermostat', 'water softener', 'A/C', 'Furnace'],
          image:
            'https://edscomfortsolutions.com/wp-content/uploads/2017/04/ac-repair.jpg',
        },
        {
          icon: 'fa-fire',
          title: 'Heating and Cooling',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
          points: ['thermostat', 'water softener', 'A/C', 'Furnace'],
          image:
            'https://edscomfortsolutions.com/wp-content/uploads/2017/04/ac-repair.jpg',
        },
      ],
    };
    return of(_data).pipe(
      delay(1000),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
