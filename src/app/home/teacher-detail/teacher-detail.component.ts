import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../techer-model';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }
}
