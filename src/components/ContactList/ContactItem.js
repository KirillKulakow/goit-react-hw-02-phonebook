import React from 'react';
import {
    Contact,
    ContactDelButton,
    ContactP
} from './ContactItem.module';
import PropTypes from 'prop-types';

const ContactItem = ({id, name, number, deleteContact}) => {
    const delContact = () => {
        deleteContact(id)
    }
    return (<>
        <Contact>
        <ContactP>{`${name}: ${number}`}</ContactP>
        <ContactDelButton onClick={delContact}>X</ContactDelButton>
        </Contact>
        </>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.any.isRequired
}

export default ContactItem;