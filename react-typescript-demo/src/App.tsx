import axios from 'axios';
import { FC, useEffect, useState } from 'react';
// components aren't library elements so don't { User } 
// import as 'User' only
import User from './components/User.tsx';

interface AppProps {
  title: String;
}

// let's define the fields for the users 
// which will contain the Users interface
export interface Name {
  first: string;
  last: string;
}

export interface Login {
  uuid: string;
}

export interface Picture {
  medium: string;
}
// now I can use these anywhere I want to use them by importing them 
export interface Users {
  name: Name;
  login: Login;
  email: string;
  picture: Picture;

}

const App: FC<AppProps> = ({title}) => {
  // let's store the users from the axios call into our component
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    // define a function to call the users
    const getUsers = async () => {
      try {
        // make the axios call to the users api
        const {data} = await axios.get(
          'https://randomuser.me/api/?results=10'
        );
        console.log(data);
        // call the setUsers function to store the 
        // users in the component's users state
        setUsers(data.results);
      } catch (error) {
        // display the error
        console.log(error);
      }
    };
    // get the users from the axios call
    getUsers();
  }, []);

  return  (
    <>
    <div>
      <h1>{title}</h1>
    </div>
    {users.map(({ login, picture, name, email }) => {
          return <User key={login.uuid} name={name} email={email} picture={picture} />;
        })}
    </>
  );

};

export default App;