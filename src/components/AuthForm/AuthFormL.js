import React from 'react';

import { Link } from 'react-router-dom';

const AuthFormL= ()=>{
   
    return(
    <section>
      
    <div className="mx-auto container">
        <form id="login-form">
            <div className="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="login-email" name="Email" placeholder="Email" required></input>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" id="login-password" name="password" placeholder="Contraseña" required></input>
            </div>
             <div className="form-group">
                <input type="submit" class="btn" id="login-btn" ></input>
            </div>
            <div className="form-group">
                <Link id="register-url" class="btn" to="/register">No tengo una cuenta? Registrarse</Link>
            </div>
        </form>
    </div>       
    </section>

    )
}
export default AuthFormL;