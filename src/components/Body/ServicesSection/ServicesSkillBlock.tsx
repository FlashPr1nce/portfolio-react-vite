import {Icon} from "../../Icon.tsx";
import {S} from "./Services_Styles.ts"

type SkillBlockProps = {
    title: string;
    icon: string;
    description: string;
    indexBg: number;
}

export const ServicesSkillBlock = ({title, icon, description, indexBg}: SkillBlockProps) => {

    const isEven = indexBg % 2 === 0;
    return (
        <S.ServicesSkillBlock $isEven={isEven}>
            <Icon iconId={icon} width={'60'} height={'60'} viewBox={'0 0 50 50'}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </S.ServicesSkillBlock>
    );
};

