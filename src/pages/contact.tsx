import { Main } from "@/components";
import { Input } from "@/components/Input/Input";
import {
  ContactContent,
  ContactPageContainer,
  FormContainer,
  InformationsCard,
  InformationsContainer,
} from "@/styles/pages/Contact.styles";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
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
          <FormContainer action="">
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

            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Mensagem"
              value={values.message}
              onChange={(e) =>
                handleChange({ name: "message", value: e.target.value })
              }
              style={{ resize: "none", flex: 1, padding: "1rem" }}
            ></textarea>
          </FormContainer>
        </ContactContent>
      </ContactPageContainer>
    </Main>
  );
};

export default Contact;
