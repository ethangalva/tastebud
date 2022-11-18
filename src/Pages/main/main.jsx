import styles from './main.module.css'
import '../../index.css'

// import header from reusable module 
import Header from '../../Components/header/header';

function MainView(props) {
    return(
        <div className={styles.container}>
            <div className={styles.contents}>
                <Header />
            </div>
        </div>
    )
}
export default MainView;