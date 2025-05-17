import {Container} from "../../Container.tsx";
import {Title} from "../Title.tsx";
import {MyNetworks} from "../MyNetworks.tsx";
import {S} from "./Form_Styles.ts";
import Typewriter from "typewriter-effect";
import 'animate.css';
import emailjs from '@emailjs/browser';
import {ElementRef, useRef, useState} from "react";
import {ModalMessage} from "./ModalMessage.tsx";
import { useTranslation } from "react-i18next";

export const FormSection = () => {
    const { t } = useTranslation();

    const form = useRef<ElementRef<'form'>>(null);
    const [modal, setModal] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        const emailInput = form.current.elements.namedItem('email') as HTMLInputElement;
        const email = emailInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!emailRegex.test(email)) {
            setModal({ type: 'error', message: t("form.error.invalidEmail") });
            setTimeout(() => setModal(null), 3000);
            return;
        }

        emailjs
            .sendForm('service_q2dlx1v', 'template_gku485l', form.current, {
                publicKey: '5FjYBRfNRfHRDX2c2',
            })
            .then(() => {
                setModal({ type: 'success', message: t("form.success.messageSent") });
                form.current?.reset();
                setTimeout(() => setModal(null), 3000);
            })
            .catch((error) => {
                setModal({ type: 'error', message: t("form.error.sending") });
                console.error('FAILED...', error.text);
                setTimeout(() => setModal(null), 3000);
            });
    };

    const textInfo = t("form.typewriter", { returnObjects: true }) as string[];

    return (
        <>
            <S.FormSection id="contacts">
                <Container>
                    <S.FormWrapper>
                        <S.NetworksBlock>
                            <Title title={t("form.connectTitle")}/>
                            <p>
                                <Typewriter
                                    component="span"
                                    options={{
                                        strings: textInfo,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                            <S.NetworksLinkWrapper>
                                <MyNetworks/>
                            </S.NetworksLinkWrapper>
                        </S.NetworksBlock>
                        <S.FormBlock>
                            <p>{t("form.subtitle")}</p>
                            <S.Form ref={form} onSubmit={sendEmail}>
                                <input
                                    required
                                    placeholder={t("form.name")}
                                    type="text"
                                    name="name"
                                />
                                <input
                                    required
                                    placeholder={t("form.email")}
                                    type="email"
                                    name="email"
                                />
                                <textarea
                                    required
                                    placeholder={t("form.message")}
                                    name="message"
                                />
                                <button className="animate__animated animate__rotateInUpRight"> {t("form.sendButton")}</button>
                            </S.Form>
                        </S.FormBlock>
                    </S.FormWrapper>
                </Container>
            </S.FormSection>

            {modal && (
                <ModalMessage
                    message={modal.message}
                    type={modal.type}
                    onClose={() => setModal(null)}
                />
            )}
        </>
    );
};
