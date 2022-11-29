import styles from './app.module.css'
import '../../index.css'

// import header from reusable module
import Header from '../../Components/header/header';
import Footer from '../../Components/footer/footer';
import Placeholder from '../../Components/placeholder/placeholder';

import axios from 'axios';
import { useState } from 'react';

function App(props) {
    // assigns default variable to search input
    const [ input, setInput ] = useState('');
    // declare hook for input
    const [ inputErr, setInputErr ] = useState('');

    const validate = () => {
        let toVal = input;
        let val = toVal.replace(/\s/g, '%20')
        return val
    }
        
    // function for submit form
    const handleSubmit = (e) => {
        // stop default behavior
        e.preventDefault();
        // defining variables 
        // const accessPoint = 'https://api.edamam.com/api/recipes/v2';
        let type = 'public';
        let key = 'dfe6dff4b314211f8e59e2c208d41dde';
        let id = 'edfd8a8e';
        let tag = input.replace(/\s/g, '%20');

        console.log(input.replace(/\s/g, '%20'))
        // if(isVal) {
            axios.get(
                `https://api.edamam.com/api/recipes/v2?type=${type}&app_id=${id}&app_key=${key}&tag=${tag}`
            ).then(response => {
                const data = response.data;
                console.log(data);
            }).catch(e => {
                console.log(e);
            })
        // }
    };

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
                                <input type='text' placeholder='Food in mind?' value={input} onChange={e => setInput(e.target.value)} />
                                <button type='submit' onClick={handleSubmit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                    <div>Search</div>
                                </button>
                            </label>
                        </form>
                    </div>
                    {/* RECIPE LOADING AND PLACEHOLDER GO HERE */}
                    <Placeholder />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;