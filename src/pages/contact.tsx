import { Main, SendMailModal, TextArea } from "@/components";
import { Input } from "@/components";
import { GeneralContext } from "@/context/GeneralContext";
import {
  ContactContent,
  ContactPageContainer,
  EmailButton,
  FormButtonsContainer,
  FormContainer,
  InformationsCard,
  InformationsContainer,
  WhatsappButton,
} from "@/styles/pages/Contact.styles";
import Link from "next/link";
import { FormEvent, useContext } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { MdGroupAdd, MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  const {
    onSendWhatsAppMessage,
    onSendEmail,
    formState,
    handleChangeFormState,
  } = useContext(GeneralContext);

  const { name, email, message, phone } = formState;

  return (
    <Main>
      <ContactPageContainer>
        <SendMailModal />
        <h1>Contatos</h1>
        <ContactContent>
          <InformationsContainer>
            <InformationsCard>
              <h2>Redes Sociais</h2>
              <div>
                <div className="icon">
                  <MdGroupAdd />
                </div>
                <ul>
                  <li>
                    <Link href={process.env.MY_LINKEDIN} target="_blank">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/"} target="_blank">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/"} target="_blank">
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/"}>
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </InformationsCard>
            <InformationsCard>
              <h2>E-mail</h2>
              <div>
                <div className="icon">
                  <MdOutlineAlternateEmail />
                </div>
                <span>
                  <Link
                    href={"mailto:maykon.sousa@hotmail.com"}
                    target="_blank"
                  >
                    maykon.sousa@hotmail.com
                  </Link>
                </span>
              </div>
            </InformationsCard>
            <InformationsCard>
              <h2>Telefone</h2>
              <div>
                <div className="icon">
                  <FaWhatsapp />
                </div>
                <span>
                  <Link href={"https://wa.me/5561992943297"}>
                    +55 61 99294-3297
                  </Link>
                </span>
              </div>
            </InformationsCard>
          </InformationsContainer>
          <FormContainer>
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                onSendEmail();
              }}
            >
              <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Digite o seu nome"
                value={name}
                setValue={handleChangeFormState}
              />
              <Input
                label="E-mail"
                name="email"
                type="text"
                placeholder="Digite o seu e-mail"
                value={email}
                setValue={handleChangeFormState}
              />

              <Input
                label="Telefone"
                name="phone"
                type="tel"
                placeholder="Digite o seu telefone"
                value={phone}
                setValue={handleChangeFormState}
              />

              <TextArea
                label={"Mensagem"}
                name={"message"}
                value={message}
                changeValue={handleChangeFormState}
              />
              <FormButtonsContainer>
                <EmailButton type="submit">
                  <FaEnvelope /> Enviar
                </EmailButton>
                <WhatsappButton type="button" onClick={onSendWhatsAppMessage}>
                  <FaWhatsapp />
                  Enviar
                </WhatsappButton>
              </FormButtonsContainer>
            </form>
          </FormContainer>
        </ContactContent>
      </ContactPageContainer>
    </Main>
  );
};

export default Contact;
