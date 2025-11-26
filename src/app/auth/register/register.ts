import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  namaDepan = "";
  namaBelakang = "";
  email = "";
  password = "";
  confirmPassword = "";

  btnSimpan(f:NgForm){
    if(f.invalid){
      alert("form belum valid!");
      return;
    }
    
  }
}
