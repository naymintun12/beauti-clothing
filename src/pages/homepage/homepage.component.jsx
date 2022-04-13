import React from 'react';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import './homepage.style.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;