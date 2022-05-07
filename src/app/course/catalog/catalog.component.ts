import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  courses: Course[];
  filteredCourses: Course[];
  filterBy: string;

  constructor(private _service: CourseService) {
    this.courses = [];
    this.filteredCourses = [];
    this.filterBy = '';
   }

  ngOnInit(): void {
    this._service.GetAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = this.filteredCourses;
      },
      error: (err) => console.log(err)
    });
  }

}
