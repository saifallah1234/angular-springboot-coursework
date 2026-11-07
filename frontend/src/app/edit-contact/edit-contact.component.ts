import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router';
import { NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent implements OnInit{
  
  constructor(private router: Router, private contactService: ContactService){}
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    let contact:Contact = {
      id: -1,
      name: form.value['name'],
      email: form.value['email'],
      website: form.value['website'],
      projects: form.value['projects'],
      image: '',
      featured: true
    };
    this.contactService.addContact(contact).subscribe(res => {
      this.router.navigate(['/contacts'])
    })
    this.router.navigate(['/contacts'])
  }

  onContacts(){
    this.router.navigate(['/contacts'])
  }

}
