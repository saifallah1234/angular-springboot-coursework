import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router){}
  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(res =>{ this.contacts = res;})
  }
  onDelete(id:number){
    this.contactService.deletContact(id).subscribe(res => {
      const index = this.contacts.findIndex((contact) => contact.id = id)
      this.contacts.splice(index,1);
    })
  }
  onAdd(){
    this.router.navigate(['contact/edit'])

  }
}
