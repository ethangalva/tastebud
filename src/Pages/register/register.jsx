import styles from './register.module.css';
import '../../index.css';

function RegisterView(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                {/* container for register form */}
                <div className={styles.registerContainer}>
                    <form>
                        <h1>Join our family!</h1>
                        <p>Please enter your details</p>
                        <label>
                            <span>Name:</span><br />
                            <input type="text" name="Name" />
                        </label>
                        <label>
                            <span>Email:</span><br />
                            <input type="text" name="Email" />
                        </label>
                        <br />
                        <label>
                            <span>Password:</span><br />
                            <input type="password" name="Password" />
                        </label>
                        <br />
                        <input type="submit" value="Register" />
                        <span>Already a member?</span>
                        <button type='button'>Sign In</button>
                    </form>
                </div>
                {/* container for copyright text at bottom left */}
                <div className={styles.copyright}>
                    <span>TasteBud ©</span>
                </div>
                {/* container for image and brand name at right of screen */}
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <h1>TasteBud</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView;