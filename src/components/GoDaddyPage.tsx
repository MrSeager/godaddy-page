import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
import SectionThree from './SectionThree.tsx';
import SectionFour from './SectionFour.tsx';
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

    const textSecThreeProps = {
        en: {
            btn_1_1: 'Domains',
            btn_1_2: 'Email & Microsoft 365',
            btn_2_1: 'SSL Security',
            btn_2_2: 'Web Design Services',
            btn_3_1: 'Websites',
            btn_3_2: 'Online Store',
            btn_4_1: 'WorldPress',
            btn_4_2: 'Web Hosting',
            btn_5_1: 'Sale! $0.99*/1st yr.',
            btn_5_2: 'Attract shoppers. Sell more stuff.',
        },
        ua: {
            btn_1_1: 'Domains',
            btn_1_2: 'Електронна пошта & Microsoft 365',
            btn_2_1: 'Безпека SSL',
            btn_2_2: 'Послуги Веб-Дизайну',
            btn_3_1: 'Вебсайти',
            btn_3_2: 'Інтернет-магазин',
            btn_4_1: 'WorldPress',
            btn_4_2: 'Веб-хостинг',
            btn_5_1: 'Розпродаж! $0.99*/1-й рік.',
            btn_5_2: 'Залучайте покупців. Продавайте більше товарів.',
        }
    }

    const textSecFourProps = {
        en: {
            secFir: {
                titleOne: 'Sell online with a website',
                parOne: 'Sell anything, from physical products to downloads and services.',
                btnOne: 'Get Started',
                btnTwo: 'Learn More',
            },
            secSec: {
                titleOne: 'Success in 3 easy steps.',
                titleTwo: 'Save with the lowest fees',
                parOne: '2.3% + 0¢ per in-person transaction.',
                parTwo: '2.3% + 30¢ per online transaction.',
                parThree: 'Enjoy the lowest transaction fees compared to other leading providers.',
                btnOne: 'Start Getting Paid',
                btnTwo: 'Learn More',
            },
            secThr: {
                titleOne: 'Sell in-person and on the go',
                parOne: "Our new Point of Sale devices are designed to fit any business and budget. Choose the one that's right for you.",
                btnOne: 'Learn More',
            },
        },
        ua: {
            secFir: {
                titleOne: 'Продавайте онлайн за допомогою веб-сайту',
                parOne: 'Продавайте будь-що, від фізичних товарів до завантажень та послуг.',
                btnOne: 'Почати',
                btnTwo: 'Дізнатися Більше',
            },
            secSec: {
                titleOne: 'Успіх у 3 простих кроки.',
                titleTwo: 'Заощаджуйте з найнижчими комісіями',
                parOne: '2,3% + 0¢ за кожну транзакцію, здійснену особисто.',
                parTwo: '2,3% + 30¢ за онлайн-транзакцію.',
                parThree: 'Насолоджуйтесь найнижчими комісіями за транзакції порівняно з іншими провідними постачальниками.',
                btnOne: 'Почніть Отримувати Оплату',
                btnTwo: 'Дізнатися Більше',
            },
            secThr: {
                titleOne: 'Продавайте особисто та на ходу',
                parOne: "Наші нові пристрої для точок продажу розроблені для будь-якого бізнесу та бюджету. Оберіть той, який підходить саме вам.",
                btnOne: 'Дізнатися Більше',
            },
        }
    }

    return (
        <Container className='px-0 pb-5 d-flex flex-column aling-items-center gap-3'>
            <GoDaddyNavBar 
                textProps={textNavProps[lang]}
            />
            <SectionOne 
                textProps={textSecOneProps[lang]}
            />
            <SectionTwo 
                textProps={textSecTwoProps[lang]}
            />
            <SectionThree 
                textProps={textSecThreeProps[lang]}
            />
            <SectionFour
                textProps={textSecFourProps[lang]}
            />
        </Container>
    );
}

export default GoDaddyPage;