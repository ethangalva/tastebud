import styles from './sign-in.module.css'
import '../../index.css'

function SignInView(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
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
                        <button>Create an account</button>
                    </form>
                </div>
                <div className={styles.copyright}>
                    <span>TasteBud ©</span>
                </div>
                <div className={styles.imageRegisterContainer}>
                    <div className={styles.image}>
                        <h1>TasteBud</h1>
                    </div>
                    {/* <div className={styles.register}>qwfqw</div> */}
                </div>
            </div>
        </div>
    )
}

export default SignInView;