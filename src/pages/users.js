import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>
            <Navbar/>
            <div className='conteudo_lista'>
            <h1> Lista de animais </h1>
            {users.map((user, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={user._id}> <p> {user.nome} </p> </div>
                </Link>
            ))}
            </div>
            <Footer/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;

