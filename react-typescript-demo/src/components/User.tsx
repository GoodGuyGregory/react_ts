import { FC } from 'react';
import {Login, Name, Picture} from '../App';

interface UserProps {
    picture: Picture
    login: Login;
    name: Name;
    email: string;
}


// create a functional component
const User: FC<UserProps> = ({ name, email, picture}) => {
    return (
        <li>
            <div>
                <img src={picture.medium} alt="user-profile-picture" />
            </div>
            <div>
                <p>Name: {name.first} {name.last}</p>
            </div>
            <div>
                <p>Email: {email}</p>
            </div>
        </li>
    )
}

export default User;