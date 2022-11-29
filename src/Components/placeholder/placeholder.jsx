import styles from './placeholder.module.css'
import '../../index.css'

// import header from reusable module

function Placeholder(props) {
    return(
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.placeholder}>
                    <div className={styles.placeholderImage} />
                    <div className={styles.placeholderText}>
                        <div className={styles.placeholderText_1} />
                        <div className={styles.placeholderText_2} />
                    </div>
                    <div className={styles.placeholderTextStats}>
                        <div className={styles.placeholderTextStats_1} />
                    </div>
                </div>
                <div className={styles.placeholder}>
                    <div className={styles.placeholderImage} />
                    <div className={styles.placeholderText}>
                        <div className={styles.placeholderText_1} />
                        <div className={styles.placeholderText_2} />
                    </div>
                    <div className={styles.placeholderTextStats}>
                        <div className={styles.placeholderTextStats_1} />
                    </div>
                </div>
                <div className={styles.placeholder}>
                    <div className={styles.placeholderImage} />
                    <div className={styles.placeholderText}>
                        <div className={styles.placeholderText_1} />
                        <div className={styles.placeholderText_2} />
                    </div>
                    <div className={styles.placeholderTextStats}>
                        <div className={styles.placeholderTextStats_1} />
                    </div>
                </div>
                <div className={styles.placeholder}>
                    <div className={styles.placeholderImage} />
                    <div className={styles.placeholderText}>
                        <div className={styles.placeholderText_1} />
                        <div className={styles.placeholderText_2} />
                    </div>
                    <div className={styles.placeholderTextStats}>
                        <div className={styles.placeholderTextStats_1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placeholder;