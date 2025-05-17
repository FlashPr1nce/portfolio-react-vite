import {Container} from "../../../Container.tsx";
import {Button} from "../../Button.tsx";

import heroImage from '../../../assets/hero.jpg';
import {S} from "./Hero_Styles.ts"

import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';



export const HeroSection = () => {

    const { t } = useTranslation();

    const textInfo = [
        t('hero.frontend'),
        t('hero.web')
    ];

    return (
        <S.HeroSection  id={'home'}>
            <Container>
                <S.HeroSectionWrapper>
                    <S.HeroSectionInfo>
                        <h2>{t('hero.greeting')}</h2>
                        <h1>{t('hero.name')}</h1>
                        <h3>
                            <Typewriter
                                component="span"
                                options={{
                                    strings: textInfo,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <S.ButtonFlexWrapper>
                            <Button title={t('hero.about')} icon={'User'} isActive={true}/>
                            <Button title={t('hero.projects')} icon={'Eye'} />
                        </S.ButtonFlexWrapper>
                    </S.HeroSectionInfo>

                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={false}>
                        <S.HeroSectionPhoto>
                            <img src={heroImage} alt="hero"/>
                        </S.HeroSectionPhoto>
                    </Tilt>
                </S.HeroSectionWrapper>
            </Container>
        </S.HeroSection>
    );
};


