import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';

const GoDaddyPage: FC = () => {
    const [lang, setLang] = useState<string>('en');

    const textNavProps = {
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

    const textSecOneProps = {
        en: {
            textOne: 'Type the domain you want',
            buttonOne: 'Search Domain',
        },
        ua: {
            textOne: 'Введіть потрібний домен',
            buttonOne: 'Пошук Домену',
        }
    }

    const textSecTwoProps = {
        en: {
            titleOne: 'Websites & Commerce',
            titelTwo: 'Tools for all your business firsts.',
            parOne: 'Website and store solutions for any small business.',
            btnOne: 'Get Started',
            btnTwo: 'Learn More',
            parTwo: 'No credit card required**',
            titleThree: 'Domain Names',
            titleFour: 'Grab a .com for just $0.01*/1st yr',
            parThree: '2-year purchase required*',
            btnThree: 'Find Your Domain',
            parFour: 'Transfer Your Domain',
            parFive: 'Domains include free privacy protection forever*',
        },
        ua: {
            titleOne: 'Вебсайти & Комерція',
            titelTwo: 'Інструменти для всіх ваших бізнес-першорядів.',
            parOne: 'Рішення для веб-сайтів та магазинів для будь-якого малого бізнесу.',
            btnOne: 'Почати',
            btnTwo: 'Дізнатися більше',
            parTwo: 'Кредитна картка не потрібна**',
            titleThree: 'Імена доменів',
            titleFour: 'Отримайте домен .com лише за $0.01*/1-й рік',
            parThree: 'Потрібна покупка на 2 роки*',
            btnThree: 'Знайдіть Свій Домен',
            parFour: 'Перенесіть Свій Домен',
            parFive: 'Домени включають безкоштовний захист конфіденційності назавжди*',
        }
    }

    return (
        <Container className='p-0 d-flex flex-column aling-items-center gap-3'>
            <GoDaddyNavBar 
                textProps={textNavProps[lang]}
            />
            <SectionOne 
                textProps={textSecOneProps[lang]}
            />
            <SectionTwo 
                textProps={textSecTwoProps[lang]}
            />
        </Container>
    );
}

export default GoDaddyPage;