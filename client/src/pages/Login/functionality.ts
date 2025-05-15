import { useState, useRef } from "react";

type UserId={
    user : string,
    pass : string
}
export default function useLogin(){
    const userRef = useRef<HTMLInputElement>();
    const passRef = useRef<HTMLInputElement>();
    const [userID, setUserID] = useState<UserId>();

    // function handleUserName(event : React.ChangeEvent<HTMLInputElement>){
    //     userRef.current.value = event.target.value;
    // }

    // function handlePassword(event : React.ChangeEvent<HTMLInputElement>){
    //     passRef.current.value = event.target.value;
    // }

    function handleLogin(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        const user = userRef.current?.value || "";
        const pass = passRef.current?.value || "";
        console.log(user, pass, userID);
        setUserID({...userID, user : user, pass : pass});
    }

    return {userRef, passRef, handleLogin};
}