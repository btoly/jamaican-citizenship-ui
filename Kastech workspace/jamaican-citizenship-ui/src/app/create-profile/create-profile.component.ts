import { Component, OnInit } from '@angular/core';
import { CreateProfileService } from '../shared/services/create-profile.service';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { LoginService } from '../shared/services/login.service';
import { loadLContextFromNode } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  
  submitted:boolean = false;
  showErrorMsg:string;
  profile:FormGroup;
  dob:Date = new Date();
  countries:any;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private profileService:CreateProfileService,private utilityService:UtilityService, private routing:Router, 
    private loginService:LoginService,
    private formBuilder:FormBuilder) { 
    this.datePickerConfig = Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,
    maxDate:this.dob
    })
  }
  
  ngOnInit() {
  
   this.loadForm();

    this.countries = this.utilityService.loadCountriesFromJson().subscribe(data=>{
      this.countries = data;   
    })
   
  }

  loadForm(){
    this.profile = this.formBuilder.group({ //new FormGroup({
      firstname:['', [Validators.required, Validators.maxLength(10)]],
      lastname:['',Validators.required],
      middlename:[''],
      dob:[this.dob,Validators.required],
      pob:['Jamaica',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required]],
      gender:['',Validators.required],
      address:['',Validators.required]
  
    });
  }

  get f() { return this.profile.controls; }
  onSubmit(payload){
   
    debugger;

    this.submitted = true;
    this.showErrorMsg= "Please fill the required fields";
    if (this.profile.invalid) {
      return;
    }

    this.blockUI.start('Loading.....');

    this.loginService.validateEmailAddress(payload.email).subscribe(data=>{
      if(data != null){
        this.blockUI.stop();
        this.showErrorMsg = "An account already exists with this email id";
      }else{
       // payload.dob = this.utilityService.formatDate(payload.dob);
        this.profileService.createProfile(payload).subscribe(data=>{
          sessionStorage.setItem('profile',JSON.stringify(data));
          this.routing.navigate(['/allForms']);
          console.log('+++++',data);
          this.blockUI.stop();
        });

      }
    })

    console.log(payload);
  }

  onReset(){
    this.profile.reset();    
    this.loadForm();
  }  
}
