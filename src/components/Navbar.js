import styles from '../styles/Components.module.css'
export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li>
                    <h1 className='nome_site'>Animals AUUUUUUUUUUUUUUUU</h1>
                    <a href='/'> Home </a>
                </li>
            </ul>
        </div>
    )
}
