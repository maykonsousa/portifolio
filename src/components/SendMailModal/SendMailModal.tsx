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

export const SendMailModal = () => {
  const { sendEmailState, onCancelSendEmail, formState } =
    useContext(GeneralContext);

  const { message, status } = sendEmailState;

  return (
    <MailModalContainer>
      {status && (
        <ModalOverlay>
          <ModalContent className={status ? "slideIn" : "slideOut"}>
            <ModalHeader>
              <h2></h2>
              <AiOutlineClose size={24} onClick={onCancelSendEmail} />
            </ModalHeader>
            <StatusMail
              message={message}
              status={status}
              formData={formState}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </MailModalContainer>
  );
};

