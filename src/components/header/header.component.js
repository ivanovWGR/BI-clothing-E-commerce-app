import React from "react";
import "./header.component.styles.scss";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'; //import svg as Logo from assets

const headerComponent = () => {
  return (
    <div>
     <Link to="/">
       <Logo/>
     </Link>
    </div>
  );
};

export default headerComponent;