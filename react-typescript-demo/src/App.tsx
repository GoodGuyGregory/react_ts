import axios from 'axios';
import { FC, useEffect, useState } from 'react';
// components aren't library elements so don't { User } 
// import as 'User' only
import User from './components/User.tsx';
// import the AppProps
import { AppProps, Users } from './App.types';

const App: FC<AppProps> = ({title}) => {
  // let's store the users from the axios call into our component
  const [users, setUsers] = useState<Users[]>([]);

  const [username, setUserName] = useState('');

  // adds loading details for the component
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // used to load data etc with a component
  // useEffect(() => {
  //   // define a function to call the users
  //   const getUsers = async () => {
  //     try {
  //       // set the loading parameter
  //       setIsLoading(true);
  //       // make the axios call to the users api
  //       const {data} = await axios.get(
  //         'https://randomuser.me/api/?results=10'
  //       );
  //       console.log(data);
  //       // call the setUsers function to store the 
  //       // users in the component's users state
  //       setUsers(data.results);
  //     } catch (error) {
  //       // display the error
  //       console.log(error);
  //     } finally {
  //       // return the finished state of loading.
  //       setIsLoading(false);
  //     }
  //   };
  //   // get the users from the axios call
  //   getUsers();
  // }, []);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.get('https://randomuser.me/api/?results=10');
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // for setting a username: based on the input text of the 
  // input tag
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event?.target.value);
  };

  return  (
    <>
    <div>
      <h1>{title}</h1>
    </div>

    <div>
      <button onClick={handleClick}>Show Users</button>
    </div>

    <div>
      <input type="text" onChange={handleChange} />
      <p>Username: {username}</p>
    </div>
    {/* adds conditional rendering for loading */}
    {isLoading && <p>Loading Users...</p>}

    {users.map(({ login, picture, name, email }) => {
          return <User key={login.uuid} name={name} email={email} picture={picture} />;
        })}
    </>
  );

};

export default App;