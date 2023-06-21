import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDeatailsService } from '../user-deatails.service';
import { Observable, startWith, map } from 'rxjs';

interface Race {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = false;
  showSpinner = false;
  userdata: any;
  confirmPass: any;
  startDate = new Date(1990, 0, 1);
  foods: Race[] = [
    {value: 'Black-0', viewValue: 'Black'},
    {value: 'Colored-1', viewValue: 'Colored'},
    {value: 'White-2', viewValue: 'White'},
  ];
  constructor(
    private _formBuilder: FormBuilder,
    private userDetailsService: UserDeatailsService
  ) {
    this.userdata = this.userDetailsService.userdata;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
      seventhCtrl: ['', Validators.required],
      eighthCtrl: ['', Validators.required],
      ninthCtrl: ['', Validators.required],
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  toggleLinear() {
    this.isLinear = !this.isLinear;
  }

  saveData() {
    const confirmPass = this.confirmPass; 
    const user = {
      firstname: this.userdata.firstname,
      lastname: this.userdata.lastname,
      email: this.userdata.email,
      phone: this.userdata.phone,
      password: this.userdata.password,
      address: {
        postalAddress: this.userdata.postalAddress,
        city: this.userdata.city,
        postalCode: this.userdata.postalCode,
        country: this.userdata.country
      }
    };
    const chkEmail = /^\S+@\S+\.\S+$/.test(user.email);
    const users = JSON.parse(localStorage.getItem('users') || '[]');

       
    
    // Validation
    if (
      !user.firstname ||
      !user.lastname ||
      !user.password ||
      
      !user.phone ||
      !user.email ||
      !user.address.city ||
      !user.address.country ||
      !user.address.postalAddress ||
      !user.address.postalCode
    ) {
      alert('Please fill in all the required fields');
      return;
    } else if (!isNaN(Number(user.firstname))) {
      alert('Firstname cannot contain numbers');
      return;
    } else if (!isNaN(Number(user.lastname))) {
      alert('Lastname cannot contain numbers');
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      alert('Invalid email format');
      return;
    } else if (isNaN(Number(user.phone)) || user.phone.length < 10) {
      alert('Invalid cellphone number');
      return;}
    // } else if (confirmPass !== user.password) {
    //   alert('Passwords must match');
    //   return;
    // }

    // Save user data
    this.showSpinner = true;
    setTimeout(() => {
      // Save data to backend or perform other actions
      this.showSpinner = false;
      alert('User registered successfully');
        users.push(user);
      localStorage.setItem('users', JSON.stringify(user));
    }, 5000);
  }
  myControl = new FormControl('');
  options: string[] = ['Gauteng', 'limpopo', 'free state'];
  filteredOptions: Observable<string[]> | undefined;

 
}
