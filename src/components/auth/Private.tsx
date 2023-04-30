import {Login} from './Login'
import { ProfileProps } from "./Profile"
import React from 'react'

type PrivateProps = {
    isLoggedIn : boolean
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) =>{
    if(isLoggedIn){
        return <Component name="Andrei"/>
    }else{
        return <Login />
    }
}