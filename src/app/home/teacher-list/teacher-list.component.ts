import { Component, OnInit } from '@angular/core';
import { Teacher } from '../techer-model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teacheres: Teacher[];

  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.getTeacheres();
  }

  getTeacheres(): void {
    this.teacherService.getTeacheres()
      .subscribe(teacheres => {
        this.teacheres = teacheres;
        console.log(teacheres);
      });
  }
}
