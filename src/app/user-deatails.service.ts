import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDeatailsService {

  constructor() { }

  userdata= {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    address:{
          postalAddress: '',
          city: '',
          postalCode: '',
          country: ''
        },
  };

  
  
  
  
  
  
  
}
