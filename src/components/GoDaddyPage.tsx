import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
import SectionThree from './SectionThree.tsx';
import SectionFour from './SectionFour.tsx';
import SectionFive from './SectionFive.tsx';
import SectionSix from './SectionSix.tsx';
import SectionFooter from './SectionFooter.tsx';
import SectorFooterTwo from './SectorFooterTwo.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';

const GoDaddyPage: FC = () => {
    const [lang, setLang] = useState<string>(() => {
        return localStorage.getItem('lang') || 'en';
    });

    const handleLangChange = (newLang: string) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };



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

    const textSecFiveProps = {
        en: {
            title: 'Templates designed to sell.',
            par: 'Choose from 100s of designs for every idea and industry.',
            btn: 'Browse All Templates',
        },
        ua: {
            title: 'Шаблони, розроблені для продажу.',
            par: 'Оберіть із сотень дизайнів для кожної ідеї та галузі.',
            btn: 'Переглянути Всі Шаблони',
        }
    }

    const textSecSixProps = {
        en: {
            titleOne: 'Sign up for news and special offers',
            titleTwo: 'We love taking your call.',
            titleThree: 'guides',
            btn: 'Sign Up',
            par: 'Email address'
        },
        ua: {
            titleOne: 'Підпишіться на новини та спеціальні пропозиції',
            titleTwo: 'Ми любимо приймати ваші дзвінки.',
            titleThree: 'гіди',
            btn: 'Зареєструватися',
            par: 'Електронна адреса'
        },
    }

    const textSecFooterProps = {
        en: {
            title_1: 'About GoDaddy',
            buttons_1: [
                'About Us',
                'Newsroom',
                'Investor Relations',
                'Careers',
                'Corporate Responsibility',
                'Trust Center',
                'Legal'
            ],

            title_2: 'Help Center',
            buttons_2: [
                'Help Center',
                'Community',
                'Venture Forward: Microbusiness Data',
                'GoDaddy Blog',
                'Contact Us',
                'Report Abuse',
                'Resources'
            ],

            title_3: 'Resources',
            buttons_3: [
                'Webmail',
                'WHOIS',
                'GoDaddy Mobile App',
                'ICANN Confirmation',
                'Designers & Developers',
                'Corporate Domains',
                'Redeem Code',
                'Product Catalog',
                'Videos',
                'Business Name Generator'
            ],

            title_4: 'Partner Programs',
            buttons_4: [
                'Affiliates',
                'Reseller Programs',
                'GoDaddy Pro'
            ],

            title_5: 'Account',
            buttons_5: [
                'My Products',
                'Renewals & Billing',
                'Create Account'
            ],

            title_6: 'Shopping',
            buttons_6: [
                'Buy a Domain',
                'Websites',
                'WorldPress',
                'Hosting',
                'Web Security',
                'Email & Office',
                'Phone Numbers',
                'Promos'
            ],
        },
        ua: {
            title_1: 'Про GoDaddy',
            buttons_1: [
                'Про нас',
                'Новини',
                'Відносини з інвесторами',
                'Кар’єра',
                'Корпоративна відповідальність',
                'Центр довіри',
                'Юридична інформація'
            ],

            title_2: 'Центр допомоги',
            buttons_2: [
                'Центр допомоги',
                'Спільнота',
                'Venture Forward: Дані про мікробізнес',
                'Блог GoDaddy',
                'Зв’язатися з нами',
                'Повідомити про порушення',
                'Ресурси'
            ],

            title_3: 'Ресурси',
            buttons_3: [
                'Вебпошта',
                'WHOIS',
                'Мобільний додаток GoDaddy',
                'Підтвердження ICANN',
                'Дизайнери та розробники',
                'Корпоративні домени',
                'Активувати код',
                'Каталог продуктів',
                'Відео',
                'Генератор назв для бізнесу'
            ],

            title_4: 'Партнерські програми',
            buttons_4: [
                'Партнери',
                'Програми реселлерів',
                'GoDaddy Pro'
            ],

            title_5: 'Обліковий запис',
            buttons_5: [
                'Мої продукти',
                'Оновлення та оплата',
                'Створити обліковий запис'
            ],

            title_6: 'Покупки',
            buttons_6: [
                'Купити домен',
                'Вебсайти',
                'WordPress',
                'Хостинг',
                'Веббезпека',
                'Електронна пошта та офіс',
                'Номери телефонів',
                'Акції'
            ]
        },
    }

    const textSecFooterTwoProps = {
        en: {
            btnLang: 'United States - English',
            parOne: 'Copyright © 1999 - 2025 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.',
            parTwo: 'Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal',
            parLink: 'Terms of Service',
            btnOne: 'Legal',
            btnTwo: 'Privacy Policy',
            btnThree: 'Cookies',
            parThree: 'Do not sell my personal information',
        },
        ua: {
            btnLang: 'Україна - Українська',
            parOne: 'Авторське право © 1999–2025 GoDaddy Operating Company, LLC. Усі права захищено. Словесний знак GoDaddy є зареєстрованим товарним знаком GoDaddy Operating Company, LLC у США та інших країнах. Логотип «GO» є зареєстрованим товарним знаком GoDaddy.com, LLC у США.',
            parTwo: 'Використання цього Сайту регулюється чітко визначеними умовами використання. Використовуючи цей сайт, ви підтверджуєте свою згоду з цими Універсальними умовами надання послуг.',
            parLink: 'Умови надання послуг',
            btnOne: 'Юридичні',
            btnTwo: 'Політика Конфіденційності',
            btnThree: 'Cookies',
            parThree: 'Не продавайте мою особисту інформацію',
        },
    }

    return (
        <Container fluid className='px-0 d-flex flex-column aling-items-center'>
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
            <SectionFive
                textProps={textSecFiveProps[lang]}
            />
            <SectionSix 
                textProps={textSecSixProps[lang]}
            />
            <SectionFooter 
                textProps={textSecFooterProps[lang]}
            />
            <SectorFooterTwo 
                lang={lang}
                setLang={handleLangChange}
                textProps={textSecFooterTwoProps[lang]}
            />
        </Container>
    );
}

export default GoDaddyPage;