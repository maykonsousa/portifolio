import React, { useContext } from "react";
import {
  MailModalContainer,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  
} from "./SendMailModal.styles";
import { AiOutlineClose } from "react-icons/ai";
import { GeneralContext } from "@/context/GeneralContext";
import { StatusMail } from "./StatusMail";

export interface IFormProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface SendMailModalProps {
  formData: IFormProps;
}
export const SendMailModal = ({formData}:SendMailModalProps) => {
  const { sendEmailState, onCancelSendEmail } = useContext(GeneralContext);

  const {message, status} = sendEmailState;

  return (
    <MailModalContainer>
      {status && (
        <ModalOverlay>
          <ModalContent className={status ? "slideIn" : "slideOut"}>
            <ModalHeader>
              <h2></h2>
              <AiOutlineClose size={24} onClick={onCancelSendEmail} />
            </ModalHeader>
            <StatusMail message={message} status={status} formData={formData} />
          </ModalContent>
        </ModalOverlay>
      )}
    </MailModalContainer>
  );
};
