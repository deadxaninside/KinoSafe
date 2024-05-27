import React from 'react';
import './footerNavItem.css';

function FooterNavItem({name}) {
    return (
        <li>
            <ion-icon name="chevron-forward-ouyline"></ion-icon>{''}
            <a href="#">{name}</a>
        </li>
    );
}

export default FooterNavItem;