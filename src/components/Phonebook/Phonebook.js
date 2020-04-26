import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactItem from '../ContactList/ContactItem';
import FilterContacts from '../FilterContacts/FilterContacts';
import {
    PhonebookTitle
} from './Phonebook.module'

const Phonebook = () => {
    const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]);
    const [filterContacts, setFilterContacts] = useState([
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);

    const addToContacts = (contact) => {
        setContacts([...contacts, contact]);
        setFilterContacts([...filterContacts, contact]);
    };

    const filteredContacts = (filterValue) => {
        const newContacts = contacts.filter(contact => (contact.name.toLowerCase()).includes(filterValue.toLowerCase()));
        setFilterContacts(newContacts);
    };

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
        setFilterContacts(newContacts);
    };

    return (
        <div>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm contacts={contacts} addToContacts={addToContacts}/>

            <PhonebookTitle>Contacts</PhonebookTitle>
            <FilterContacts filteredContacts={filteredContacts}/>
            <ul>
                {(filterContacts.length ? filterContacts : contacts).map((contact, index) => (
                    <ContactItem key={contact.id} {...contact} deleteContact={deleteContact}/>
                ))}
            </ul>
        </div>
    );
};

export default Phonebook;