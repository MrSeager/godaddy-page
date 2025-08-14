import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';

const GoDaddyPage: FC = () => {
    const [lang, setLang] = useState<string>('en');

    const textProps = {
        en: {
            navLink1: 'Domain Names',
            navLink2: 'Websites & Hosting',
            navLink3: 'Commerce',
            navLink4: 'Email & Marketing',
            navLink5: 'Expert Services',
            navLink6: 'More',
            navLink7: 'Help Center',
            navLink8: 'Sign In',
            navLink9: 'Registration',
        },
        ua: {
            navLink1: 'Імена доменів',
            navLink2: 'Вебсайти & Хостинг',
            navLink3: 'Торгівля',
            navLink4: 'Електронна пошта & Маркетинг',
            navLink5: 'Послуги експертів',
            navLink6: 'Більше',
            navLink7: 'Довідковий центр',
            navLink8: 'Увійти',
            navLink9: 'Реєстрація',
        }
    }

    return (
        <Container className='p-0'>
            <GoDaddyNavBar 
                textProps={textProps[lang]}
            />
        </Container>
    );
}

export default GoDaddyPage;