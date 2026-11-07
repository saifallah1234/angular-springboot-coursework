import { Inject, Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient, @Inject('BaseUrl') private BaseUrl: string) { }
  contacts: Contact[] = CONTACTS;
 
  getAllContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.BaseUrl+'contacts');
  }

  getContactById(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(this.BaseUrl+'contacts/'+id)
  }
  deletContact(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.BaseUrl+'contacts/'+id)
  }
  addContact(c: Contact): Observable<Contact>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.httpClient.post<Contact>(this.BaseUrl + 'contacts/', c, httpOptions);
  }
  /* getAllContacts(){
    return this.contacts;
  }
  getContactById(id: number){
    return this.contacts.find((contact) => contact.id = id)
  }

  deletContact(id: number){
    const index = this.contacts.findIndex((contact) => contact.id = id)
    this.contacts.splice(index,1);
  }
  addContact(c: Contact){
    const leng = this.contacts.length + 1
     c.id = leng;
     this.contacts.push(c);
  } */


}
