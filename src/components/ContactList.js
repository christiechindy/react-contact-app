import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    })
    return (
        <div className="celledList">
            {renderContactList}
        </div>
    );
}

export default ContactList;