import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://th.bing.com/th/id/Rdc0d3ad682ab29fda1face34ac066199?rik=of806rJrzgwaWg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f03%2fimessage-icon_27015.png&ehk=HhT64XTxfFiTiekQ8Fbfg%2bB262w9SHFMl%2fODkN%2bD48E%3d&risl=&pid=ImgRaw" alt=""/>
                <div className="login__text">
                    <h1>Sign in to Chatter</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
