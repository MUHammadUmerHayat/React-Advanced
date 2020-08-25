import React, { useContext } from 'react';
import UserContext from './userContext';

const MovieRow = () => {

    const currentUser = useContext(UserContext);

    return (  
        <div>
            {currentUser.name}
        </div>
    );
}
 
export default MovieRow;