import React from 'react'; 

const NavBar = (props) => {
    return(
        <div>
            {props.list.map((item, index) => item)}
        </div>
    );
};

export default NavBar;