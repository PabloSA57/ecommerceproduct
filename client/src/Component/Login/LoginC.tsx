import React, { useState} from 'react'

import {Link, useNavigate} from 'react-router-dom';

import {LoginStyle} from "./style";


import axios from "axios";



const LoginC = () => {
    const [input, setInput] = useState({
        email:'',
        password:''
    });
    const [state, setState] = useState({
        loading: false,
        loader: false,
        error: false
    })

    const navigate = useNavigate();


    function hadlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setState({
            loading: true,
            loader: false,
            error: false
        })
        try {
            const res =  await axios.post('http://localhost:3001/login', input)

            setState({
                loading: false,
                loader: true,
                error: false
            })
            //dispatch(jwtToken(res.data.token))
            window.localStorage.setItem('token', JSON.stringify(res.data))
            setTimeout(() => {navigate('/inicio',{replace:true})}, 2000)    
            

            }catch (error) {
                setState({
                    loading: false,
                    loader: false,
                    error: true
                })
            alert('incorrecto')
        }
    }

    return (
                <LoginStyle>
                    <div>
                    <form action="" onSubmit={handlesubmit}>
                    <div>
                    <h2 className="text-2xl font-bold">Login</h2>
                    </div>
                
                    <div>
                    <label htmlFor="">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={input.email}
                    placeholder='Email' 
                    onChange={hadlerInput}/>
                    </div>
                    
                    <div>
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={input.password}
                    placeholder='Password' 
                    onChange={hadlerInput}/>
                    </div>

                    <div>
                    <button type="submit">{state.loading ? "Loading..." : "Login"}</button>
                    </div>
                    
                </form>

                <div>
                    <p>No tenes una cuenta? <Link to='/register'>Sign up</Link></p>
                </div>
                    </div>
                    
        
            </LoginStyle>
    )
}

export default LoginC;
