import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getSectionTwo(): Observable<object> {
    const _data = {
      highlight: {
        image: 'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?cs=srgb&dl=pexels-burst-544965.jpg&fm=jpg',
        heading: 'Heating and cooling services in Utah',
        body: 'Keeping cool in the summer and warm in the winter has never been easier. HVAC repair, replacement and maintenance services near you.'
      },
      blocks: [
        {
          icon: 'fa-hammer',
          title: 'HVAC Repair',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.'
        },
        {
          icon: 'fa-toolbox',
          title: 'HVAC Replacement',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.'
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'Maintenance Services',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.'
        },
        {
          icon: 'fa-fire',
          title: 'Heating and Cooling',
          body: 'Notus Angular comes with a huge number of Fully Coded CSS components.'
        },
      ]
    }
    return of(_data).pipe(delay(1000));
  }
}
