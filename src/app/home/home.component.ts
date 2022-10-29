import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sectionTwo$!: Observable<any>;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getSectionTwo();
  }

  getSectionTwo() {
    this.sectionTwo$ = this.homeService.getSectionTwo().pipe(
      tap({
        error: (err: unknown) => {
          console.log(`Error retrieving section 2: ${err}`);
        },
      })
    );
  }
}
