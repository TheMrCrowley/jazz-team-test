import React from 'react';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import './contacts.css';

const Contacts = () => {
  return (
    <ul className="contactsList">
      <li className="contactsItem">
        <a href="https://github.com/TheMrCrowley" target="_blank" rel="noreferrer">
          <img className="contactsImage" src={GitHub} alt="github" />
        </a>
      </li>
      <li className="contactsItem">
        <a
          href="https://www.linkedin.com/in/denis-mytnik-05791718a/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contactsImage" src={LinkedIn} alt="linkedin" />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
