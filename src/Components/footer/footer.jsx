import styles from './footer.module.css'
import '../../index.css'

function Footer(props) {
    return(
        <div className={styles.container}>
            <svg style={{position: "relative", bottom: "-20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#252525" fill-opacity="1" d="M0,128L26.7,154.7C53.3,181,107,235,160,224C213.3,213,267,139,320,122.7C373.3,107,427,149,480,138.7C533.3,128,587,64,640,74.7C693.3,85,747,171,800,170.7C853.3,171,907,85,960,53.3C1013.3,21,1067,43,1120,58.7C1173.3,75,1227,85,1280,112C1333.3,139,1387,181,1413,202.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            <div className={styles.contents}>
                <div className={styles.personalMessage}>
                    <div className={styles.personalMessage_name}>ethangalva</div>
                    <div className={styles.personalMessage_message}>Hello, this website is functional and was 100% made by me.</div>
                    <div className={styles.personalMessage_icons}>
                        <a href='https://www.linkedin.com/in/ethan-galvan-5774a0232/' target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5EFE6" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                        <a href='https://github.com/ethangalva' target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5EFE6" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <a>Sign In</a>
                    <a>Register</a>
                    <a>Recipes</a>
                    <a href='https://www.edamam.com/' target="blank">API used</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;