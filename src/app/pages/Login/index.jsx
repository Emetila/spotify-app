import { CustomButton } from "../../components/Button"
import React from "react"
import { CustomInput } from "./input"
import { loginUser } from "../../components/service/login"
import { Logo } from "../../components/Logo/Logo"
import style from './style.module.css'
import {ReactComponent as FaceBookLogo} from "../../assets/icons/facebook-logo.svg"
import {ReactComponent as AppleLogo} from "../../assets/icons/apple-logo.svg"
import {ReactComponent as GoogleLogo} from "../../assets/icons/google-logo.svg"
import {ReactComponent as StrokeLine} from "../../assets/icons/line.svg"
import {ReactComponent as LineDivider} from "../../assets/icons/stroke2.svg"

export const Login = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
        loginUser(form.username, form.password)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=home'
            })
            .catch(()=>{
                alert('invalid user credentials')
            })
        }
    
    console.log(form)
    
    return <section className={style.Login}>
        <div className={style.logo}>
            <Logo useWhite={false} />
        </div>
        <div className={style.btns}>
        <button className={style.facebookbtn}>
            <FaceBookLogo />
            Continue with Facebook
        </button>
        <button className={style.applebtn}>
            <AppleLogo />
            Continue with Apple
        </button>
        <button className={style.googlebtn}>
            <GoogleLogo className={style.google}/>
            Continue with Google
        </button>
        <div className={style.divider}>
            <StrokeLine />
            <p>OR</p>
            <StrokeLine />
        </div>
        </div>

        <div>
            <label>Email address or username</label>
            <CustomInput name="username" onChange={(event)=>setForm({...form, username: event.target.value })} placeholder= "Enter your email adress or username" />
        </div>
        <div>
            <label>Password</label>
            <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} placeholder= "Password" type="password" />
            <a href="#/forgot" className={style.forgot}>
                Forgot your password?
            </a>
        <div className={style.remember}>
            <div className={style.rememberbox}>
                <input className={style.inputbox} type="checkbox" placeholder="Remember me" />
                <p>Remember me</p>
            </div>
            <CustomButton onClick={handleLogin} type="secondary"> LOGIN </CustomButton>
        </div>
        <LineDivider className={style.divider} />
        <div className={style.createAccount}>
            <h4 className={style.create}>Don't have an account?</h4>
            <button className={style.googlebtn}>Sign up for Spotify</button>
        </div>

        </div>
    </section>
}
