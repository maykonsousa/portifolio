import { Main, TextArea } from "@/components";
import { Input } from "@/components";
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
import { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { MdGroupAdd, MdOutlineAlternateEmail } from "react-icons/md";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

interface IInputProps {
  name: string;
  value: string;
}
const Contact = () => {
  const [values, setValues] = useState(initialValues);
  console.log(values);

  const handleChange = ({ name, value }: IInputProps) => {
    setValues({ ...values, [name]: value });
  };

  const SendWhatsAppMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=5561992943297&text=`;
    const message = `*MENSAGEM ENVIADA PELO SITE*%0A%0A*Nome:* ${values.name}%0A*E-mail:* ${values.email}%0A*Telefone:* ${values.phone}%0A*Mensagem:* ${values.message}`;
    window.open(url + message, "_blank");
  };

  return (
    <Main>
      <ContactPageContainer>
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
                    <Link href={"/"} target="_blank">
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
          <FormContainer >
            <form action="">
             <Input
             label="Nome"
             name="name"
             type="text"
             placeholder="Digite o seu nome"
             value={values.name}
             setValue={handleChange}
           />
           <Input
             label="E-mail"
             name="email"
             type="text"
             placeholder="Digite o seu e-mail"
             value={values.email}
             setValue={handleChange}
           />

           <Input
             label="Telefone"
             name="phone"
             type="tel"
             placeholder="Digite o seu telefone"
             value={values.phone}
             setValue={handleChange}
           />

          <TextArea 
           label={"Mensagem"}
           name={"message"}
           value={values.message}
           changeValue={handleChange}
          />
         <FormButtonsContainer>
           <EmailButton type="submit"><FaEnvelope/> Enviar</EmailButton>
           <WhatsappButton type="button" onClick={SendWhatsAppMessage}><FaWhatsapp/>Enviar</WhatsappButton>
         </FormButtonsContainer>
            </form>
           
          </FormContainer>
        </ContactContent>
      </ContactPageContainer>
    </Main>
  );
};

export default Contact;
