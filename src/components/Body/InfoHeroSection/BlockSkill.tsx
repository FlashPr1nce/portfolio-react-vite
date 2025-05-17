import {Icon} from "../../Icon";
import {ButtonPropsType} from "../../Button";
import {S} from "./InfoHero_Styles.ts"

export const BlockSkill = ({title, icon}:ButtonPropsType) => {
    return (
            <S.BlockSkill>
                {icon && <Icon iconId={icon} width={'80'} height={'80'} viewBox={'0 0 120 120'}/>}
                <p>{title}</p>
            </S.BlockSkill>

    );
};


