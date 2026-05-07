import { BrevoClient,BrevoError } from "@getbrevo/brevo";
// import { BrevoError } from "@getbrevo/brevo";

export default async function sendEmail(options) {
  const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  });

  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: "patherpanchali28@gmail.com",
        name: options.senderName,
      },
      subject: options.subject,
      to: [
        {
          email: options.receicerEmail,
          name: options.name,
        },
      ],
      htmlContent: `${options.htmlContent}`,
    });
    if (result) return { success: true, messageId: result?.messageId };
  } catch (err) {
    if (err instanceof BrevoError) {
      let message = "";
      switch (err.statusCode) {
        case 401:
          message = "Unauthorized: Your API key is invalid or expired.";
        case 429:
          message = `Rate Limit: Too many requests. Retry after: ${err.rawResponse.headers["retry-after"]}`;
        case 400:
          message =
            "Bad Request: Check your email parameters (invalid email, etc.)";
        default:
          message = `Error ${err.statusCode}: ${err.message}`;
      }
      return { success: false, message: message };
    }
  }
}
