import Image from "next/image";
import logo from '../assets/Footer/logo.png'
import styles from '../styles/footer.module.scss'
import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

export function Footer() {
    return(
        <footer className={styles.footer}>
            <Image src={logo} alt="Logo Lemon Soluções"/>
            <div className={styles.nav}>
                <ul>
                    <li><span>Contato</span></li>
                    <li><a href="#">+ 81 9 3224-3402</a></li>
                    <li><a href="#">Lemonsolucoes@dev.com</a></li>
                </ul>

                <ul>
                    <li><span>Sobre nós</span></li>
                    <li><a href="#">Leia sobre nosso manifesto</a></li>
                    <li><a href="#">Membros e parceiros</a></li>
                </ul>

                <ul>
                    <li><span>Blog</span></li>
                    <li><a href="#">Quer fazer parte da nossa equipe?</a></li>
                    <li><a href="#">Radar Lemon</a></li>
                </ul>
            </div>

            <div className={styles.socialLinks}>
                <FacebookLogo size={24} fill="#FFFFFF" /> <TwitterLogo size={24} fill="#FFFFFF" /> <YoutubeLogo  size={24} fill="#FFFFFF"/> <InstagramLogo size={24} fill="#FFFFFF" />
            </div>


            <span className={styles.copy}>
                <p>© 2023 Lemon Design.</p>


                <ul>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos</a></li>
                </ul>
            </span>
        </footer>
    )
}