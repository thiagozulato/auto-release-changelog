import React, { PropsWithChildren } from 'react'

const Login = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div className="login-container">
            <div className="login__title">
                <div className="login__content">
                    <div className="login__actions"></div>
                </div>
            </div>
        </div>
    )
}

export default Login