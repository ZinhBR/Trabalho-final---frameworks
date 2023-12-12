import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title> Home </title>
      </Head>
      <Navbar/>
      <div className='conteudo'>
      <h1> Pagina Inicial </h1>
      <a href="\users"> Abrir animals AAAAAAAAAAAAUUUUUUUUUUUUUUUU</a>
      </div>
      <Footer/>
    </div>

    
  )
}
