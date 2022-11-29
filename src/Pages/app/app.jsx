import styles from './app.module.css'
import '../../index.css'

// import header from reusable module
import Header from '../../Components/header/header';
import Footer from '../../Components/footer/footer';

function App(props) {
    return(
        <div className={styles.container}>
            <div className={styles.contents}>
                <Header />
                <div className={styles.app}>
                    <div className={styles.title}>
                        Delicious<br></br> food for you
                    </div>
                    <div className={styles.formContainer}>
                                <form className={styles.form}>
                                    <label>
                                        <input placeholder='Search' type="text" name="Email" />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </button>
                                    </label>
                                </form>
                            </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;