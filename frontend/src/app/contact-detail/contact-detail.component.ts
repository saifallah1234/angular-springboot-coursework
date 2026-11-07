import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit{
  contact?: Contact;
  idContact: any;
  
  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(res =>{
      this.idContact = res.get('id');
      this.contactService.getContactById(this.idContact).subscribe(res => { this.contact = res});

    })
  }

  onContact(){
    this.router.navigate(['/contacts']);
  }

}
