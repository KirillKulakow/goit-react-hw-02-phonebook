import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    ContForm,
    NameInput,
    NameInputLabel,
    NumberInput,
    NumberInputLabel,
    ButtonSubmit
} from './ContactForm.module';
import PropTypes from 'prop-types';

const formInitialState = {
    name: '',
    number: ''
};

const ContactForm = ({contacts, addToContacts}) => {
    const [form, setForm] = useState({name: '', number: ''});

    const addInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        const {name, number} = form;
        const contact = {
            id: uuidv4(),
            name,
            number
        };
        if(contacts.find(contact => name === contact.name) !== undefined){
            alert(`${name} is already in contacts.`);
            return
        }
        addToContacts(contact);
        setForm(formInitialState);
    }

    const {name, number} = form;
    return (
        <ContForm onSubmit={submitForm}>
            <NameInputLabel>Name</NameInputLabel>
            <NameInput name="name" placeholder="Name and Surname" value={name} onChange={addInput}/>
            <NumberInputLabel>Number</NumberInputLabel>
            <NumberInput name="number" placeholder="Number" value={number} onChange={addInput}/>
            <ButtonSubmit type="submit">Add to contact</ButtonSubmit>
        </ContForm>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
    addToContacts: PropTypes.any.isRequired
}

ContactForm.defaultTypes = {
    contacts: []
}

export default ContactForm;