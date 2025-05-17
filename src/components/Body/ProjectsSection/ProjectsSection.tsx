import {Container} from "../../../Container.tsx";
import {Title} from "../../Title.tsx";
import {Text} from "../../Text.tsx";

import rickAndmorty from "../../../assets/rickAndmorty.png";
import liventsrImg from "../../../assets/livents.jpg";
import mooveImg from "../../../assets/delivery.jpg";
import {ProjectBlock} from "./ProjectBlock.tsx";
import {S} from "./Projects_Styles.ts"
import { useTranslation } from "react-i18next";


type ProjectsPropsType = {
    id: number
    imgUrl: string
    title: string
    info: string
    description: string
    githubRepo: string
    githubPage: string
}

export const ProjectsSection = () => {
    const { t } = useTranslation();

    const textInfo = t("projects.description");

    const projects: ProjectsPropsType[] = [
        {
            id: 1,
            imgUrl: rickAndmorty,
            title: t("projects.rick.title"),
            info: t("projects.rick.info"),
            description: t("projects.rick.description"),
            githubRepo: "https://github.com/FlashPr1nce/rick-morty",
            githubPage: "https://flashpr1nce.github.io/rick-morty/"
        },
        {
            id: 2,
            imgUrl: liventsrImg,
            title: t("projects.livents.title"),
            info: t("projects.livents.info"),
            description: t("projects.livents.description"),
            githubRepo: "https://github.com/FlashPr1nce/rick-morty",
            githubPage: "https://flashpr1nce.github.io/rick-morty/"
        },
        {
            id: 3,
            imgUrl: mooveImg,
            title: t("projects.moove.title"),
            info: t("projects.moove.info"),
            description: t("projects.moove.description"),
            githubRepo: "https://github.com/FlashPr1nce/rick-morty",
            githubPage: "https://flashpr1nce.github.io/rick-morty/"
        }
    ];

    return (
        <S.ProjectSection id={'projects'}>
            <Container>
                <Title title={t("projects.title")}/>
                <Text textInfo={textInfo}/>
                <S.ProjectCardWrapper>
                    {projects.map((project) =>
                        <ProjectBlock key={project.id}
                                      githubUrl={project.githubRepo}
                                      liveUrl={project.githubPage}
                                      title={project.title}
                                      description={project.description}
                                      imageUrl={project.imgUrl}
                                      info={project.info}/>
                    )}
                </S.ProjectCardWrapper>
            </Container>
        </S.ProjectSection>
    );
};


