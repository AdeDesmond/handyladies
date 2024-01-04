import nodemailer from "nodemailer";

export const sendVerificationEmail = async (
  email: string,
  emailType: string,
  token: string
) => {
  try {
    const confirmLink = `${process.env.NEXTAUTH_URL}/auth/new-verification?token=${token}`;
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0bd918ba8a2a88",
        pass: "dffd6f99725196",
      },
    });

    const mailOptions = {
      from: "developerdesmond@email.com",
      to: email,
      subject: emailType,
      html: `<p> Click <a href="${confirmLink}">here </a> to confirm 
       </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const sendPasswordResetToken = async (
  email: string,
  emailType: string,
  token: string
) => {
  try {
    const resetLink = `${process.env.NEXTAUTH_URL}/auth/new-password?token=${token}`;
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0bd918ba8a2a88",
        pass: "dffd6f99725196",
      },
    });

    const mailOptions = {
      from: "developerdesmond@email.com",
      to: email,
      subject: emailType,
      html: `<p> Click <a href="${resetLink}">here </a> to reset your password, if you did not request for this please ignore this message
       </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.log(error.message);
  }
};
