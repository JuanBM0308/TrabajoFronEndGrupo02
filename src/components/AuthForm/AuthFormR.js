import { Link } from 'react-router-dom';

const AuthFormR = () => {
    
   
    return (
        <section>
           <div className="mx-auto container">
                    <form  id="register-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" id="register-name" name="name" placeholder="Name"  required></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" id="register-email" name="Email" placeholder="Email"
                            required></input>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" id="register-password" name="password" placeholder="Contraseña"
                            required></input>
                        </div>
                        <div className="form-group">
                            <label>Confirmar Contraseña</label>
                            <input type="password" class="form-control" id="register-confirm-password" name="confirmpassword" placeholder="Confirmar Contraseña" 
                              required></input>
                        </div>
                        <div className="form-group">
                            <input type="submit" class="btn" id="register-btn" value="Register"></input>
                        </div>
                        <div className="form-group">
                            <Link id="register-url" class="btn" to="/signup">Ya tienes una cuenta? Ingresar</Link>
                </div>
            </form>
        </div>
    </section >
    
    )
}
export default AuthFormR;