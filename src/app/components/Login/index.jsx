import { CustomButton } from "../Button"
import React from "react"
import { CustomInput } from "./input"
import { loginUser } from "../service/login"

export const Login = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
        loginUser(form.username, form.password)
            .then((res)=> {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=home'
            })
            .catch(()=>{
                alert('invalid user credentials')
            })
            }
    
    console.log(form)
    return (<>
        <h1>Login</h1>
        <CustomInput name="username" onChange={(event)=>setForm({...form, username: event.target.value })} placeholder= "Email address" />
        <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} placeholder= "Password" type="password" />
        <br />
        <CustomButton onClick={handleLogin}> LOGIN </CustomButton>
        <br />
    </>
    )
}