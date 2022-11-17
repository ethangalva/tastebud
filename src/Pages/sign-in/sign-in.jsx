import styles from './sign-in.module.css'
import '../../index.css'

function SignInView(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                {/* container for sign in form */}
                <div className={styles.signInContainer}>
                    <form>
                        <h1>Welcome Back</h1>
                        <p>Please enter your details</p>
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
                        <input type="submit" value="Sign in" />
                        <span>Not a member with us yet?</span>
                        <button type='button'>Create an account</button>
                    </form>
                </div>
                {/* container for copyright text at bottom left */}
                <div className={styles.copyright}>
                    <span>TasteBud ©</span>
                </div>
                {/* container for image and brand name at right of screen */}
                <div className={styles.imageRegisterContainer}>
                    <div className={styles.image}>
                        <h1>TasteBud</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInView;