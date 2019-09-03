import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-natrualization-process-request4',
  templateUrl: './natrualization-process-request4.component.html',
  styleUrls: ['./natrualization-process-request4.component.css']
})
export class NatrualizationProcessRequest4Component implements OnInit {

  process4:FormGroup;
  datePickerConfig:Partial<BsDatepickerConfig>;
  dob:Date = new Date();
  type:string;
  nonEdittable:string;

  constructor(private datePipe: DatePipe,private formBuilder:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute,private utilityService:UtilityService) { 

    var process1 =  localStorage.getItem('process1');
    var processStorage =(process1!=null)? JSON.parse(process1):'';

    this.activatedRoute.params.subscribe(params=>{
      this.type = params.type;
    })

    
  this.process4 = this.formBuilder.group({ 
     
    lastname: [this.nullCheck(processStorage.lastname),],
    middlename: [this.nullCheck(processStorage.middlename)],
    firstname: [this.nullCheck(processStorage.firstname),],
    dob: [this.datePipe.transform(this.nullCheck(processStorage.dob)),],
    pob: [this.nullCheck(processStorage.pob),],
    country: [(processStorage.country != null) ? processStorage.country : 'Jamaica',],
    email: [{value:this.nullCheck(processStorage.email),disabled:true} , Validators.email],
    number: [(this.nullCheck(processStorage.number != null)) ? processStorage.number : '876', []],
    gender: [this.nullCheck(processStorage.gender),],
    address: [this.nullCheck(processStorage.address1),],

   
    alternateemail: [this.nullCheck(processStorage.alternateemail), Validators.email],
    occupation: [this.nullCheck(processStorage.occupation),],
    othername: [this.nullCheck(processStorage.othername)],
    businessaddress: [this.nullCheck(processStorage.businessaddress),],
    nationalityControl: [this.nullCheck(processStorage.nationalityControl),],
    presentnationalityControl: [this.nullCheck(processStorage.presentnationalityControl)],
    nationalityState: [this.nullCheck(processStorage.nationalityState)],
    nationalityStateless: [this.nullCheck(processStorage.nationalityStateless)],

    britishterritory: [this.nullCheck(processStorage.britishterritory),],
    status: [this.nullCheck(processStorage.status)],
    Nationalitystatus: [this.nullCheck(processStorage.Nationalitystatus)],
    fatherLastName: [this.nullCheck(processStorage.fatherLastName),],
    fatherFirstName: [this.nullCheck(processStorage.fatherFirstName),],
    FatherAddress: [this.nullCheck(processStorage.FatherAddress),],
    FatherCOB: [this.nullCheck(processStorage.FatherCOB),],
    motherLastName: [this.nullCheck(processStorage.motherLastName),],
    motherFirstName: [this.nullCheck(processStorage.motherFirstName),],
    motherAddress: [this.nullCheck(processStorage.motherAddress),],
    motherCOB: [this.nullCheck(processStorage.motherCOB),],
    maritalStatus: [this.nullCheck(processStorage.maritalStatus),],
    dom: [this.datePipe.transform(this.nullCheck(processStorage.dom)),],
    pom: [this.nullCheck(processStorage.pom),],
    dod: [this.datePipe.transform(this.nullCheck(processStorage.dod))],
    pod: [this.nullCheck(processStorage.pod)],
    dodissolved: [this.datePipe.transform(this.nullCheck(processStorage.dodissolved))],
    podissolved: [this.nullCheck(processStorage.podissolved)],
    wifeLastname: [this.nullCheck(processStorage.wifeLastname),],
    wifeFirstname: [this.nullCheck(processStorage.wifeFirstname),],
    wifeAddress: [this.nullCheck(processStorage.wifeAddress),],
    wifeCOB: [this.nullCheck(processStorage.wifeCOB),],
    husbandLastname: [this.nullCheck(processStorage.husbandLastname),],
    husbandFirstname: [this.nullCheck(processStorage.husbandFirstname),],
    husbandaddress: [this.nullCheck(processStorage.husbandaddress),],
    husbandCOB: [this.nullCheck(processStorage.husbandCOB),],

    residentaddress1: [this.nullCheck(processStorage.residentaddress1),],
    residentfrom1: [this.nullCheck(processStorage.residentfrom1),],
    residentto1: [this.nullCheck(processStorage.residentto1),],
    residentaddress2: [this.nullCheck(processStorage.residentaddress2),],
    residentfrom2: [this.nullCheck(processStorage.residentfrom2),],
    residentto2: [this.nullCheck(processStorage.residentto2),],
    residentaddress3: [this.nullCheck(processStorage.residentaddress3),],
    residentfrom3: [this.nullCheck(processStorage.residentfrom3),],
    residentto3: [this.nullCheck(processStorage.residentto3),],
    years_block: [this.nullCheck(processStorage.years_block),],

    visitedCountries1: [this.nullCheck(processStorage.visitedCountries1)],
    visitedCountriesfrom1: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom1))],
    visitedCountriesto1: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto1))],
    visitedCountries2: [this.nullCheck(processStorage.visitedCountries2)],
    visitedCountriesfrom2: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom2))],
    visitedCountriesto2: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto2))],
    visitedCountries3: [this.nullCheck(processStorage.visitedCountries3)],
    visitedCountriesfrom3: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom3))],
    visitedCountriesto3: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto3))],
    visitedCountries4: [this.nullCheck(processStorage.visitedCountries4)],
    visitedCountriesfrom4: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom4))],
    visitedCountriesto4: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto4))],
    visitedCountries5: [this.nullCheck(processStorage.visitedCountries5)],
    visitedCountriesfrom5: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom5))],
    visitedCountriesto5: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto5))],
    

    proceedingsname1: [this.nullCheck(processStorage.proceedingsname1)],
    proceedingsDate1: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate1))],
    proceedingsPlace1: [this.nullCheck(processStorage.proceedingsPlace1)],
    proceedingsResult1: [this.nullCheck(processStorage.proceedingsResult1)],
    proceedingsname2: [this.nullCheck(processStorage.proceedingsname2)],
    proceedingsDate2: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate2))],
    proceedingsPlace2: [this.nullCheck(processStorage.proceedingsPlace2)],
    proceedingsResult2: [this.nullCheck(processStorage.proceedingsResult2)],
    proceedingsname3: [this.nullCheck(processStorage.proceedingsname3)],
    proceedingsDate3: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate3))],
    proceedingsPlace3: [this.nullCheck(processStorage.proceedingsPlace3)],
    proceedingsResult3: [this.nullCheck(processStorage.proceedingsResult3)],
    proceedingsname4: [this.nullCheck(processStorage.proceedingsname4)],
    proceedingsDate4: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate4))],
    proceedingsPlace4: [this.nullCheck(processStorage.proceedingsPlace4)],
    proceedingsResult4: [this.nullCheck(processStorage.proceedingsResult4)],
    proceedingsname5: [this.nullCheck(processStorage.proceedingsname5)],
    proceedingsDate5: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate5))],
    proceedingsPlace5: [this.nullCheck(processStorage.proceedingsPlace5)],
    proceedingsResult5: [this.nullCheck(processStorage.proceedingsResult5)],

    compositionCreditors: [this.datePipe.transform(this.nullCheck(processStorage.compositionCreditors))],
    dischargeBankruptcy: [this.datePipe.transform(this.nullCheck(processStorage.dischargeBankruptcy))],
    bankruptcyDate: [this.datePipe.transform(this.nullCheck(processStorage.bankruptcyDate))],
    previousAppDate: [this.datePipe.transform(this.nullCheck(processStorage.previousAppDate)),],

    childrenName1: [this.nullCheck(processStorage.childrenName1)],
    childrenDob1: [this.datePipe.transform(this.nullCheck(processStorage.childrenDob1))],
    childrenPob1: [this.nullCheck(processStorage.childrenPob1)],
    childrenresidence1: [this.nullCheck(processStorage.childrenresidence1)],
    childrenName2: [this.nullCheck(processStorage.childrenName2)],
    childrenDob2: [this.datePipe.transform(this.nullCheck(processStorage.childrenDob2))],
    childrenPob2: [this.nullCheck(processStorage.childrenPob2)],
    childrenresidence2: [this.nullCheck(processStorage.childrenresidence2)],
    childrenNameother1: [this.nullCheck(processStorage.childrenNameother1)],
    childrenDobother1: [this.datePipe.transform(this.nullCheck(processStorage.childrenDobother1))],
    childrenPobother1: [this.nullCheck(processStorage.childrenPobother1)],
    childrenresidenceother1: [this.nullCheck(processStorage.childrenresidenceother1)],
    childrenNameother2: [this.nullCheck(processStorage.childrenNameother2)],
    childrenDobother2: [this.datePipe.transform(this.nullCheck(processStorage.childrenDobother2))],
    childrenPobother2: [this.nullCheck(processStorage.childrenPobother2)],
    childrenresidenceother2: [this.nullCheck(processStorage.childrenresidenceother2)],

    accept: [this.nullCheck(processStorage.accept),]
  })

    this.nonEdittable =  localStorage.getItem('isReviewOnly')
    if(this.nonEdittable){
      this.process4.disable();
    }


  }

  ngOnInit() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      maxDate: this.dob,dateInputFormat: 'DD/MM/YYYY'
    })
  }

  nullCheck(value){
    return (value)?value:'';
  }

  back(){
    localStorage.setItem('process1',JSON.stringify(this.process4.value));
    if(this.nonEdittable)
     this.router.navigate(['/naturalisation-process3',this.type])
    else
      this.router.navigate(['/naturalisation-process3'])
  }
  next(){
    localStorage.setItem('process1',JSON.stringify(this.process4.value));
    if(this.nonEdittable)
      this.router.navigate(['/naturalisation-process5',this.type])
    else
      this.router.navigate(['/naturalisation-process5'])
  }
}
