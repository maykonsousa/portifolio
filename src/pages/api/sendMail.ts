import { mailOptions, transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

interface IDataProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IFields {
  [key: string]: string;
}

const CONTACT_MESSAGE_FIELDS: IFields = {
  name: "Nome",
  email: "E-mail",
  phone: "Telefone",
  subject: "Assunto",
  message: "Mensagem",
};

const generateEmailContent = (data: IDataProps) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `
    <!DOCTYPE html>
    <html> 
    <head>
     <title>Mensagem do Site</title> 
     <meta charset="utf-8"/> 
     <meta name="viewport" content="width=device-width, initial-scale=1"/> 
     <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
     <style type="text/css"> 
     body, table, td, a{
      -webkit-text-size-adjust: 100%; 
      -ms-text-size-adjust: 100%;
    }
    table{
      border-collapse: collapse !important;
    }
    body{
      height: 100% !important; 
      margin: 0 !
      important; 
      padding: 0 !important; 
      width: 100% !important;
    }
    @media screen and (max-width: 525px){
      .wrapper{
        width: 100% !important; 
        max-width: 100% !important;
      }
      .responsive-table{
        width: 100% !important;
      }
      .padding{
        padding: 10px 5% 15px 5% !important;
      }
      .section-padding{
        padding: 0 15px 50px 15px !important;
      }
    }
    .form-container{
      margin-bottom: 24px; 
      padding: 20px; 
      border: 1px dashed #ccc;
    }
    .form-heading{
      color: #f4f4f5; 
      font-family: "Roboto", sans-serif; 
      font-weight: 400; 
      text-align: left; 
      line-height: 20px; 
      font-size: 18px; 
      margin: 0 0 8px; 
      padding: 0;
    }
    .form-answer{
      color: #f4f4f5; 
      font-family: "Roboto", sans-serif; 
      font-weight: bold; 
      text-align: left; 
      line-height: 20px; 
      font-size: 16px; 
      margin: 0 0 24px; 
      padding: 0;
    }
    div[style*="margin: 16px 0;"]{
      margin: 0 !important;
    }
    </style> 
    </head> 
    <body 
    style="margin: 0 !important; 
    padding: 0 !important; 
    background: #18181b"> 
    <div style=" display: none; font-size: 1px; color: #f4f4f5; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " >
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
    <tr> 
    <td bgcolor="#27272a" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > 
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > 
    <tr> 
    <td> 
    <table width="100%" border="0" cellspacing="0" cellpadding="0"> 
    <tr> <
    td> 
    <table width="100%" border="0" cellspacing="0" cellpadding="0" > 
    <tr> 
    <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #f4f4f5; " class="padding message-content" > 
    <h2>
    Nova Mensagem do Site
    </h2> 
    <div class="form-container">${htmlData}</div>
    </td>
    </tr>
    </table>
     </td>
     </tr>
     </table>
      </td>
      </tr>
      </table>
       </td>
       </tr>
       </table>
        </body>
        </html>`,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      console.log("caiu aqui");
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      console.log("mailOptions", mailOptions);
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "Nova mensagem do site",
      });

      return res.status(200).json({
        message:
          "E-mail enviado com sucesso, Em breve retornarei o seu contato",
      });
    } catch (err) {
      return res.status(400).json({
        message:
          "Falha no serviço de envio de e-mail, Tente enviar via Wahtsapp ou tente novamente mais tarde",
      });
    }
  }
  return res
    .status(400)
    .json({ message: "Essa requisição só pode ser chamada com metódo post" });
};
export default handler;

