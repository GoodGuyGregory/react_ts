export interface AppProps {
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