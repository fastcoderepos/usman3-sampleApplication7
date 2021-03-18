import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';

import { TaskExtendedService } from '../task.service';
import { TaskNewExtendedComponent } from '../new/task-new.component';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { ProjectExtendedService } from 'src/app/extended/entities/project/project.service';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';
import { TaskListComponent } from 'src/app/entities/task/index';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListExtendedComponent extends TaskListComponent implements OnInit {
  title: string = 'Task';
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public global: Globals,
    public dialog: MatDialog,
    public changeDetectorRefs: ChangeDetectorRef,
    public pickerDialogService: PickerDialogService,
    public taskService: TaskExtendedService,
    public errorService: ErrorService,
    public projectService: ProjectExtendedService,
    public globalPermissionService: GlobalPermissionService
  ) {
    super(
      router,
      route,
      global,
      dialog,
      changeDetectorRefs,
      pickerDialogService,
      taskService,
      errorService,
      projectService,
      globalPermissionService
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  addNew() {
    super.addNew(TaskNewExtendedComponent);
  }
}