import { CustomButton } from "../Button"
import React from "react"
import { CustomInput } from "./input"

export const Login = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
    }
    console.log(form)
    return (<>
        <h1>Login</h1>
        <CustomInput onChange={(event)=> setForm({...form, username: event.target.value })} placeholder= "Email address" />
        <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} placeholder= "Password" type="password" />
        <br />
        <CustomButton onClick={()=>{}}> LOGIN </CustomButton>
        <br />
    </>
    )
}