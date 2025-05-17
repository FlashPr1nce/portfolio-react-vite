import {Container} from "../../Container.tsx";
import {MyNetworks} from "../MyNetworks.tsx";
import { S } from './Footer_Styles.ts';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return <S.Footer>
    <Container>
      <S.TextTech>
        <span>{t("footer.role1")}</span>
        <span>{t("footer.role2")}</span>
        <S.NetworksLinkWrapper>
          <MyNetworks/>
        </S.NetworksLinkWrapper>
      </S.TextTech>

      <S.TextCapture>
        <span>© 2025 FlashPr1nce. {t("footer.rights")}</span>
      </S.TextCapture>
    </Container>
  </S.Footer>;
};


