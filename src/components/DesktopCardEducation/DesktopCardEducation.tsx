import Image from "next/image";
import React from "react";
import { CardContainer } from "./DesktopCardEducation.styles";
import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

interface ITeacher {
  name: string;
  website: string | null;
  avatar: string | null;
  likedin: string | null;
  github: string | null;
}

export interface IEducationData {
  id: number;
  year: string;
  duration?: string;
  title: string;
  description?: string;
  image?: string;
  link?: string;
  school?: string;
  teacher?: ITeacher;
}

interface IDesktopCardEducationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: IEducationData;
  isActive: boolean;
  isLast: boolean;
  handleActive: (id: number) => void;
}

export const DesktopCardEducation = ({
  data,
  isActive,
  isLast,
  handleActive,
}: IDesktopCardEducationProps) => {
  console.log(data);
  const activeClass = isActive ? "active" : "";
  const lastClass = isLast ? "last" : "";
  return (
    <CardContainer>
      <aside
        onClick={() => handleActive(data.id)}
        className={`${activeClass} ${lastClass}`}
      >
        <div>{data.year}</div>
        <div>{data.title}</div>
        <div>{data.duration}</div>
      </aside>
      {isActive && (
        <main>
          <div className="header">
            <Image
              src={`${data.image}`}
              width={100}
              height={100}
              alt={`${data.title} Image`}
            />
            <div>
              <h1>{data.title}</h1>
              <div>
                <small>
                  <Link
                    href={`${data.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.school}
                  </Link>
                </small>
                <small>{data.duration}</small>
              </div>
            </div>
          </div>
          <div className="content">
            <p>{data.description}</p>

            <div className="educator">
              <div>
                <Image
                  src={`${data.teacher?.avatar}`}
                  alt={`Avatar do professor ${data.teacher?.name}`}
                  width={100}
                  height={100}
                />
                <h2>{data?.teacher?.name}</h2>
              </div>
              <ul>
                <li>
                  <Link href={`${data.teacher?.github}`} target="_blank">
                    <FaGithub size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={`${data.teacher?.github}`} target="_blank">
                    <FaLinkedin size={24} />
                  </Link>
                </li>
                <li>
                  <Link href={`${data.teacher?.github}`} target="_blank">
                    <FaGlobe size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      )}
    </CardContainer>
  );
};

