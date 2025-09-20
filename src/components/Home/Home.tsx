import { useTranslator } from '../../contexts/translator';
import { socialMediaIcons } from '../../assets';
import * as styles from './Home.css';

const SocialMediaThumbnail = ({
    href,
    title,
    src,
}: {
    href: string;
    title: string;
    src: string;
}) => {
    return (
        <a href={href}>
            <img title={title} src={src} alt={title} />
        </a>
    );
};

export const Home = () => {
    const { translate } = useTranslator('home');

    return (
        <>
            <div className={styles.theme}>
                <h1 className={styles.display4}>{translate('Welcome')}</h1>
            </div>
            <article className={styles.mainTextContainer}>
                <div>
                    {translate(
                        'In 2020 I have completed programming courses at the highly acclaimed “Hillel IT School”. (https://ithillel.ua) The courses consisted of in-dept learning and practising Web Development {HTML, CSS, JS, mySQL, C#}, I also have a high level of proficiency in the Python programming language.'
                    )}
                </div>
                <div>
                    {translate(
                        'Currently, I have little professional experience as a programmer working on "Social media scheduler" project at Better Plan, but I am fully ready to devote myself to enhance my skill set and deliver high-quality solutions.'
                    )}
                </div>
                <div>
                    {translate(
                        'I embrace challenges and approach them with a growth mindset, always seeking new opportunities to broaden my expertise. With a drive for constant improvement, I am eager to take on new learning experiences and contribute to impactful projects.'
                    )}
                </div>
                <div>
                    {translate(
                        'Sociable and have experience working in a team.'
                    )}
                </div>
                <div>
                    {translate(
                        'Fluent in English and Czech, native in Russian and Ukrainian.'
                    )}
                </div>
            </article>
            <div className={styles.contactList}>
                <SocialMediaThumbnail
                    href="https://telegram.me/doomofeternity"
                    title="Telegram Messenger"
                    src={socialMediaIcons.telegram}
                />
                <SocialMediaThumbnail
                    href="https://www.linkedin.com/in/mykyta-hromov"
                    title="LinkedIn Profile"
                    src={socialMediaIcons.linkedin}
                />
                <SocialMediaThumbnail
                    href="https://github.com/elmalving"
                    title="GitHub Profile"
                    src={socialMediaIcons.github}
                />
                <SocialMediaThumbnail
                    href="https://www.instagram.com/nicktooweak"
                    title="Instagram Profile"
                    src={socialMediaIcons.instagram}
                />
            </div>
        </>
    );
};
