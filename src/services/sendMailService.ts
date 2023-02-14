import { api } from "../config/axios";

interface IDataProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendMailService = async ({
  name,
  email,
  phone,
  message,
}: IDataProps) => {
  const formFields = {
    name,
    email,
    phone,
    message,
  };

  const response = await api.post("/sendMail", formFields);
  return response.data;
};

