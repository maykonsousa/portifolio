import { Main } from "@/components";
import {
  ContentContainer,
  DownloadButton,
  HomePageContainer,
  ImgContainer,
} from "@/styles/pages/Home.styles";
import ProfileImg from "@/assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Main>
        <HomePageContainer>
          <ImgContainer>
            <Image src={ProfileImg} alt="foto de perfil" width={360} />
          </ImgContainer>
          <ContentContainer>
            <h2>Seja bem-vindo(a)</h2>
            <h1>Maykon Sousa</h1>
            <ul>
              <li>
                <Link href={"mailto:maykon.sousa@hotmail.com"}>
                  <FaRegEnvelope />
                  maykon.sousa@hotmail.com
                </Link>
              </li>
              <li>
                <Link href={"http://wa.me/5561992943297"}>
                  <FaWhatsapp />
                  +55 61 9 9294-3297
                </Link>
              </li>

              <li>
                <Link href={"http://wa.me/5561992943297"}>
                  <IoLocation />
                  João Pessoa, Paraíba - Brazil
                </Link>
              </li>
            </ul>
            <DownloadButton
              href="https://drive.google.com/file/d/189oV30RCvj8O5yPYBm3MgBI3GyovovqL/view?usp=sharing"
              download
              target={"_blank"}
            >
              <FaDownload /> Download CV
            </DownloadButton>
          </ContentContainer>
        </HomePageContainer>
      </Main>
    </>
  );
}
