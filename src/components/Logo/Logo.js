import React from 'react';

// importing an image instead of hard coding the path in the src attribute,
// because the production files path is different from the development files path.
// Hence, importing the file will make webpack be aware that this 'burgerLogo'
// need to be converted to the production files path.
import burgerLogo from '../../assets/images/burger-logo.png';

import styles from './Logo.module.css';

const Logo = props => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default Logo;
