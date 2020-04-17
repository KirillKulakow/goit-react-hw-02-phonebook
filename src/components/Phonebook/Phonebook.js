import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactItem from '../ContactList/ContactItem';
import FilterContacts from '../FilterContacts/FilterContacts';
import { v4 as uuidv4 } from 'uuid';
import {
    PhonebookTitle
} from './Phonebook.module'

const Phonebook = () => {
    const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]);
    const [filterContacts, setFilterContacts] = useState([]);

    const addToContacts = (contact) => {
        setContacts([...contacts, contact]);
    };

    const filteredContacts = (filterValue) => {
        const newContacts = contacts.filter(contact => 
            (
                (contact.name.toLowerCase()).includes(filterValue.toLowerCase())
            ));

        if (filterValue === '') {
            setFilterContacts(contacts)
        }

        if (newContacts.length >= 1) {
            if(filterContacts.length === 1 &&  newContacts.length === 1) {
                if(newContacts[0].id === filterContacts[0].id){
                return;
                }
            }
            setFilterContacts(newContacts)
        }
    };

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

    return (
        <div>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm contacts={contacts} addToContacts={addToContacts}/>

            <PhonebookTitle>Contacts</PhonebookTitle>
            <FilterContacts filteredContacts={filteredContacts}/>
            <ul>
                {(filterContacts.length ? filterContacts : contacts).map((contact) => (
                    <ContactItem key={uuidv4()} {...contact} deleteContact={deleteContact}/>
                ))}
            </ul>
        </div>
    );
};

export default Phonebook;