public inherited sharing class ContactsList {
    @AuraEnabled
    public static List<Contact> getContacts(){
        try {
            List<Contact> contacts = [SELECT Id, Name, Title, Phone, Email FROM Contact];
            return contacts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
