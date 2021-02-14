import { LightningElement, api, track} from 'lwc';
import getContacts from '@salesforce/apex/ContactsList.getContacts';

export default class Contact extends LightningElement {
    @track contactsList = '[]';

    //Load contact list when page is first rendered
    connectedCallback(){
        getContacts(
        )
        .then(result => {
            this.contactsList = result;
            console.log(result);
        })
        .catch(error => {
            this.error = error;
        });
    }
}