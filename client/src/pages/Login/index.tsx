import {Input, Button, Div} from '../../Components/Component';
import useLogin from './functionality';

export default function Login() {
    const {userRef, passRef, handleLogin} = useLogin();
    return (
        <Div cn="container box-border">
            <form className='login-form'>
                <Input type="text" ref={userRef} holder="Username" cn="input-field"/>
                <Input type="password" ref={passRef} holder="Password" cn="input-field"/>
                <Button cn="btn" onClk={handleLogin}>Login</Button>
            </form>
        </Div>
    )
}