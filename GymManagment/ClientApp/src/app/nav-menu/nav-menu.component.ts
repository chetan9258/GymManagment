import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isNull } from 'util';
import { GymService } from '../services/gym.service'; 

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isShown: boolean = true;
    GymName: string;

    constructor(private _router: Router, private gymServices: GymService) {

    }
    visible = false;

    ngOnInit() {
        this.isShown = JSON.parse(localStorage.getItem('isAdmin'));
        this.GetGymProfile();
    }

  collapse() {
      this.visible = false;
  }

  toggle() {
      this.visible = !this.visible;
    }

    hide() { this.visible = false; }

    show() { this.visible = true; }

    logout() {
         if (confirm("Are you sure to logout ?")) {
            localStorage.clear();
            return this._router.navigate([""]);
        }
    }

    GetGymProfile() {
        debugger;
        this.gymServices.GetGymProfileDetails().subscribe(result => {
            if (!isNull(result)) {
                 this.GymName = result.GymName;
            }

        }, error => alert(error.message))
    }
}
