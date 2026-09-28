import { useContext } from 'react';
import {UserContext} from './UserContext'


const ContextDemo1 = () => {
    const name = useContext(UserContext);
  return <div>
    Name : {name}
  </div>;
};

export default ContextDemo1;
