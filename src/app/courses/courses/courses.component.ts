import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Array<Course> = this.coursesService.list();
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
  }

}
