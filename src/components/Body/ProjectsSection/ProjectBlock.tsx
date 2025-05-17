import {Button} from "../../Button.tsx";
import {S} from "./Projects_Styles.ts"
import { useTranslation } from "react-i18next";

type ProjectBlockProps = {
    imageUrl: string;
    title: string;
    info: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
}


export const ProjectBlock = ({imageUrl, title, info, description, liveUrl, githubUrl}:ProjectBlockProps) => {
    const { t } = useTranslation();

    return (
        <S.ProjectBlock>
            <S.ProjectWrapper>
                <img src={imageUrl} alt={description}/>
                <h3>{title}</h3>
                <p>{info}</p>
                <S.ButtonWrapper>
                    <Button
                        title={t("projects.buttons-name.review")}
                        href={liveUrl}
                        isActive={true}
                    />
                    <Button
                        title={t("projects.buttons-name.repo")}
                        href={githubUrl}
                    />
                </S.ButtonWrapper>
            </S.ProjectWrapper>
        </S.ProjectBlock>
    );
};


