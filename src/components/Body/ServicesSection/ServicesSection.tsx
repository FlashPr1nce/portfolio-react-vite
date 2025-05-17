import {Container} from "../../../Container.tsx";
import {Title} from "../../Title.tsx";
import {ServicesSkillBlock} from "./ServicesSkillBlock.tsx";
import {S} from "./Services_Styles.ts";
import {useTranslation} from "react-i18next";


export const ServicesSection = () => {
    const { t } = useTranslation();

    const servicesSkills = [
        {
            title: t('services.typescript.title'),
            icon: 'TypeScript',
            description: t('services.typescript.description')
        },
        {
            title: t('services.react.title'),
            icon: 'ReactIcon',
            description: t('services.react.description')
        },
        {
            title: t('services.styled.title'),
            icon: 'StyledComponents',
            description: t('services.styled.description')
        }
    ];

    return (
        <S.ServiceSection>
            <Container>
                <S.ServicesWrapper>
                    <Title title={t('services.title')}/>
                    <S.ServicesSkillWrapper>
                        {
                            servicesSkills.map((service, index) => (
                                <ServicesSkillBlock key={index}
                                                    title={service.title}
                                                    icon={service.icon}
                                                    description={service.description}
                                                    indexBg={index}
                                />
                            ))
                        }
                    </S.ServicesSkillWrapper>
                </S.ServicesWrapper>
            </Container>
        </S.ServiceSection>
    );
};

