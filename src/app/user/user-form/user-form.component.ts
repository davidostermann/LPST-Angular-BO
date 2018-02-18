import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { User } from '../../core/user';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  userData: FormGroup;
  editing = false;

  ngOnInit() {
    // https://toddmotto.com/angular-parent-routing-params
    const id = +this.route.snapshot.paramMap.get('id') || +this.route.parent.snapshot.paramMap.get('id');
    this.createForm(id);
  }

  createForm(id) {
    if (id) {
      this.editing = true;
      this.apiService.getUser(id).subscribe((user: User) => {
        this.userData = this.fb.group({
          id,
          name: [user.name, Validators.required],
          jobTitle: [user.jobTitle, Validators.required]
        });
      });
    } else {
      this.userData = this.fb.group({
        name: ['', Validators.required],
        jobTitle: ['', Validators.required]
      });
    }
  }

  sendUser() {
    if (this.userData.invalid) { return; }
    this.apiService[this.editing ? 'updateUser' : 'createUser'](
      this.userData.value
    ).subscribe();
  }

}
