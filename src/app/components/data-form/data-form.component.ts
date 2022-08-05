import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  options: any[];
  @ViewChild('placename') input:ElementRef; 

  constructor( private googleService: GoogleService ) { 
    this.options = [];
  }

  ngOnInit(): void {
  }

  // onSearchOptions(): void{
  //   if(this.input.nativeElement.value.length < 3){
  //     this.options = [];
  //   }
  //   else{
  //     this.googleService.autocompletePlace(this.input.nativeElement.value)
  //       .subscribe( response => {
  //         this.options = response;
  //         console.log(this.options);
          
  //       } )
  //   }
    
  // }

  public AddressChange(address: any) {
    //setting address from API to local variable
    console.log(address);
    this.googleService.getPlaceDetails( address.reference );
    
    //this.formattedaddress=address.formatted_address
  }

}
