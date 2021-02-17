import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todoapp';
  constructor(public router:Router)
  {
  }
  alertify()
  {
    Swal.fire({
      title:'aletify',
      text:"yah i'st working",
      icon:'success',
      showCancelButton:true,
    })
  }

  logout()
  {
    localStorage.removeItem('userId');
    this.router.navigate(['/signin'])
  }

}
