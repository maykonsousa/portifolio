import { GeneralContext, ISendEmailData } from "@/context/GeneralContext";
import React, { useContext } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { ButtonContainer, StatusContainer } from "./SendMailModal.styles";

interface IStatusMailProps {
  status: "success" | "error" | "loading" | "redirect" | null;
  message: string;
  formData: ISendEmailData;
}

interface IStatusContentProps {
  message: string;
  onClose?: () => void;
  sendWhatsapp?: (data: ISendEmailData) => void;
  data?: ISendEmailData;
}

const LoadingStatus = ({ message }: IStatusContentProps) => {
  return (
    <StatusContainer>
      <div className="spinner">
        <AiOutlineLoading3Quarters size={96} />
      </div>
      <h2>{message}</h2>
    </StatusContainer>
  );
};

const ErrorStatus = ({
  message,
  onClose,
  sendWhatsapp = () => {},
  data,
}: IStatusContentProps) => {
  return (
    <StatusContainer>
      <div className="error">
        <RiErrorWarningFill size={96} />
      </div>
      <h2>{message}</h2>
      <ButtonContainer>
        <button onClick={onClose} className="close">
          <IoExitOutline size={24} /> Fechar
        </button>

        <button
          onClick={() => sendWhatsapp(data as ISendEmailData)}
          className="whatsapp"
        >
          <FaWhatsapp size={24} /> Enviar via Whatsapp
        </button>
      </ButtonContainer>
    </StatusContainer>
  );
};

const SuccessStatus = ({
  message,
  onClose = () => {},
}: IStatusContentProps) => {
  return (
    <StatusContainer>
      <div className="success">
        <FaCheck size={96} />
      </div>
      <h2>{message}</h2>
      <ButtonContainer>
        <button onClick={onClose} className="close">
          <IoExitOutline /> Fechar
        </button>
      </ButtonContainer>
    </StatusContainer>
  );
};

const RedirectStatus = ({ message }: IStatusContentProps) => {
  return (
    <StatusContainer>
      <div className="success spinner">
        <FaWhatsapp size={96} />
      </div>
      <h2>{message}</h2>
    </StatusContainer>
  );
};

export const StatusMail = ({ status, message }: IStatusMailProps) => {
  const { onSendWhatsAppMessage, onCancelSendEmail } =
    useContext(GeneralContext);
  switch (status) {
    case "loading":
      return <LoadingStatus message={message} />;
    case "error":
      return (
        <ErrorStatus
          message={message}
          onClose={onCancelSendEmail}
          sendWhatsapp={() => onSendWhatsAppMessage()}
        />
      );
    case "success":
      return <SuccessStatus message={message} onClose={onCancelSendEmail} />;
    case "redirect":
      return <RedirectStatus message={message} />;
    default:
      return null;
  }
};

