import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phone,
  message,
}) => (
  <div>
    <p>Message from: {firstName}!</p>
    <p>
      {firstName} email: {email}
    </p>
    <p>
      {firstName} phone: {phone}
    </p>
    <p>Sent Message: {message}</p>
  </div>
);
