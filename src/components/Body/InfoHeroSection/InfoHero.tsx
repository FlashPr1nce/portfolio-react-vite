import {Container} from "../../../Container.tsx";
import {BlockSkill} from "./BlockSkill";
import {useState} from "react";
import {Title} from "../../Title.tsx";
import {Text} from "../../Text.tsx";
import {S} from "./InfoHero_Styles.ts"
import {Fade} from "react-awesome-reveal"
import { useTranslation } from "react-i18next";

type SkillsPropsType = {
    id: number
    title: string,
    icon: string
}

export const InfoHero = () => {
    const { t } = useTranslation();

    const skills: SkillsPropsType[] = [
        {
            id: 1,
            title: 'HTML 5',
            icon: 'html'
        },

        {
            id: 2,
            title: 'CSS 3',
            icon: 'css'
        },
        {
            id: 3,
            title: 'JavaScript',
            icon: 'javascript'
        },
        {
            id: 4,
            title: 'SASS',
            icon: 'sass'
        },
        {
            id: 5,
            title: 'REACT',
            icon: 'react'
        },
        {
            id: 6,
            title: 'REDUX',
            icon: 'redux'
        },
        {
            id: 7,
            title: 'GIT',
            icon: 'git'
        },
        {
            id: 8,
            title: 'GITHUB',
            icon: 'github'
        },
        {
            id: 9,
            title: 'VS CODE',
            icon: 'vscode'
        },
        {
            id: 10,
            title: 'BOOTSTRAP',
            icon: 'bootstrap'
        }
    ]

    const [activeButton, setActiveButton] = useState<number>(1);


    return (
        <S.InfoHeroSection id={'about'}>
            <Container>
                <S.InfoHeroWrapper>
                    <Title title={t('about.title')}/>
                    <Text textInfo={t('about.description')}/>
                    <S.TextExpWrapper>
                        <div><S.NoteSpan>2+</S.NoteSpan></div>
                        <div>
                            <S.TextExp>{t('about.experience')}</S.TextExp>
                        </div>
                    </S.TextExpWrapper>
                        <S.SkillWrapper>
                            <Fade cascade damping={0.2} triggerOnce>
                                {[...skills].map((skill, index) => (
                                    <BlockSkill
                                        key={index}
                                        title={skill.title}
                                        icon={skill.icon}
                                        isActive={activeButton === skill.id}
                                        onClick={() => setActiveButton(skill.id)}
                                    />
                                ))}
                            </Fade>
                        </S.SkillWrapper>
                </S.InfoHeroWrapper>
            </Container>
        </S.InfoHeroSection>
    )
}

