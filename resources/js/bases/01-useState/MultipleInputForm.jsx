import { useState } from "react";

export const MultipleInputForm = () => {

    const [user, setUser] = useState({email: '', password: ''});
    const [userInfo, setUserInfo] = useState('');

    const hadleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        setUserInfo('Correo: '+user.email+' | '+'Contraseña: '+user.password);
    }

    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value});
    }

    const handlePasswordChange = (e) => {
        setUser({...user, password: e.target.value});
    }

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        setUser({...user, [name]: value});
    }



    return (
        <>
            <h1>Multiple Input Form</h1>
            <hr />
        
            <form onSubmit={hadleSubmit}>
                <div className='form-group'>
                    <label>Email address</label>
                    <input
                        className='form-control'
                        placeholder='Enter email'
                        name="email"
                        type='email'
                        onChange={handleInputChange}
                        value={user.email}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        className='form-control'
                        placeholder='Password'
                        name="password"
                        type='password'
                        onChange={handleInputChange}
                        value={user.password}
                    />
                </div>
                <button type='submit' className='btn btn-primary m-5'>
                    Submit
                </button>
            </form>

            <hr />
            <h4>{userInfo}</h4>
        </>
    );

}