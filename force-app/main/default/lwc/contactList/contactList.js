import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactsList.getContacts';

export default class ContactList extends LightningElement {
    @track contactList = '[]';

    connectedCallback(){
        getContacts(
        )
        .then(result => {
            this.contactList = result;
        })
        .catch(error => {
            this.error = error;
        })
    }


}