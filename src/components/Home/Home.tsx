import { useRef } from 'react';
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
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <img title={title} src={src} alt={title} />
        </a>
    );
};

export const Home = () => {
    const textCards = useRef<HTMLElement[]>([]);
    const { translate } = useTranslator('home');

    const TextCard = ({ children }: { children: React.ReactNode }) => (
        <div
            ref={(el) => {
                if (el && !textCards.current.includes(el)) {
                    textCards.current.push(el);
                }
            }}
        >
            {children}
        </div>
    );

    const articleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollContainer = event.currentTarget;

        const containerHeight = scrollContainer.clientHeight;
        const containerCenter = containerHeight / 2;
        const scrollPosition = scrollContainer.scrollTop;

        textCards.current.forEach((textCard) => {
            const textCardTop = textCard.offsetTop;
            const textCardCenter =
                textCardTop - scrollPosition + textCard.clientHeight / 2;
            const distanceFromCenter = Math.abs(
                textCardCenter - containerCenter
            );

            const translateZValue = distanceFromCenter / 3;

            textCard.style.transform = `translateZ(-${translateZValue}px)`;
        });
    };

    return (
        <>
            <div className={styles.theme}>
                <h1 className={styles.display4}>{translate('Welcome')}</h1>
            </div>
            <article
                onScroll={articleScroll}
                className={styles.mainTextContainer}
            >
                <TextCard>
                    {translate(
                        'In 2020, I completed a web-development bootcamp at the highly acclaimed'
                    )}{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ithillel.ua"
                    >
                        <u>Hillel IT School</u>
                    </a>{' '}
                    {translate(
                        'and was invited to join Better Plan as a Full-Stack Developer. I worked there until March 2021, when I left to focus on my high-school examinations.'
                    )}
                </TextCard>

                <TextCard>
                    {translate(
                        'After a year of learning Czech, I began my studies in Applied Informatics at'
                    )}{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ujep.cz"
                    >
                        <u>{translate('University of Jan Evangelista')}</u>
                    </a>
                    .
                </TextCard>

                <TextCard>
                    {translate(
                        'Two months later, I received a full-time offer from'
                    )}{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.pipedrive.com"
                    >
                        <u>Pipedrive</u>
                    </a>{' '}
                    {translate(
                        'as a Software Engineer. I worked in the Platform team, focusing on performance optimization and the development of design components leveraged by Product teams.'
                    )}
                </TextCard>

                <TextCard>
                    {translate(
                        'During my time at Pipedrive, I significantly improved my skills in JavaScript, TypeScript, and React, while gaining experience with Node.js frameworks, cloud infrastructure, and SQL databases.'
                    )}
                </TextCard>

                <TextCard>
                    {translate(
                        'In late 2024, I decided to pursue studies abroad, leaving the company in early 2025 to enroll in a program in'
                    )}{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.uma.es"
                    >
                        <u>{translate('University of Malaga')}</u>
                    </a>{' '}
                    {translate(
                        'focused on cybersecurity, machine learning, and artificial intelligence.'
                    )}
                </TextCard>

                <TextCard>
                    {translate(
                        "Upon returning from Spain, I focused on my Bachelor's thesis. By late 2025, once all the necessary administrative processes were completed, I had the time to continue developing both my technical and soft skills."
                    )}
                </TextCard>

                <TextCard>
                    {translate(
                        'While I’m not actively job hunting, I’m always open to exciting opportunities. You can reach me via LinkedIn or Telegram below.'
                    )}
                </TextCard>
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
