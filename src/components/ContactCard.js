import React from 'react';

const ContactCard = (props) => {
    const {name, email} = props.contact;
    return(
        <div className="item">
            <div className="avatar"></div>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
        </div>
    );
}

export default ContactCard;