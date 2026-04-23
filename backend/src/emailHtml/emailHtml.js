export const resetPasswordHtml = ({ buttonUrl, content }) => `
    <!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset</title>
    <style>
      body {
        color: black;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #091548;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #091548;
        color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .img-fluid {
        max-width: 100%;
        height: auto;
      }
      .h4 {
        font-size: 24px;
        margin: 20px 0;
      }
      .btn-reset {
        display: inline-block;
        background-color: #ffffff;
        color: #091548;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 24px;
        font-weight: bold;
      }
      .text-center {
        text-align: center;
      }
      .p-4 {
        padding: 16px;
      }
      .mb-3 {
        margin-bottom: 16px;
      }
      .mt-3 {
        margin-top: 16px;
      }
      .mt-2 {
        margin-top: 8px;
      }
      .my-4 {
        margin: 16px 0;
      }
      .border-light-blue {
        border-color: #5a6ba8;
        border-top: 1px solid #5a6ba8;
      }
      .bg-light {
        background-color: #ffffff;
      }
      .text-light {
        color: #ffffff;
      }
      .text-dark {
        color: #091548;
      }
      .d-flex {
        display: flex;
      }
      .justify-content-center {
        justify-content: center;
      }
      .mx-2 {
        margin: 0 8px;
      }
    </style>
  </head>
  <body>
    <div class="container text-center p-4">
      <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/header3.png" alt="Main Image" class="img-fluid mb-3" style="max-width: 232px" />
      <h1 class="h4">Reset Your Password</h1>
      <p>${content}</p>
      <a href="${buttonUrl}" class="btn-reset mt-3">RESET MY PASSWORD</a>
      <p class="mt-2">
        If you're having trouble with the button above, copy and paste the URL below into your web browser.
      </p>
      <hr class="border-light-blue my-4" />
      <p><strong>Didn't request a password reset?</strong></p>
      <p>You can safely ignore this message.</p>
    </div>
  </body>
</html>
`;
export const invitationEmailHtml = (buttonUrl, projectName) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Invitation</title>
    <style>
      body {
        color: black;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #091548;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #091548;
        color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .img-fluid {
        max-width: 100%;
        height: auto;
      }
      .h4 {
        font-size: 24px;
        margin: 20px 0;
      }
      .btn-accept {
        display: inline-block;
        background-color: #ffffff;
        color: #091548;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 24px;
        font-weight: bold;
      }
      .text-center {
        text-align: center;
      }
      .p-4 {
        padding: 16px;
      }
      .mb-3 {
        margin-bottom: 16px;
      }
      .mt-3 {
        margin-top: 16px;
      }
      .mt-2 {
        margin-top: 8px;
      }
      .my-4 {
        margin: 16px 0;
      }
      .border-light-blue {
        border-color: #5a6ba8;
        border-top: 1px solid #5a6ba8;
      }
      .bg-light {
        background-color: #ffffff;
      }
      .text-light {
        color: #ffffff;
      }
      .text-dark {
        color: #091548;
      }
      .d-flex {
        display: flex;
      }
      .justify-content-center {
        justify-content: center;
      }
      .mx-2 {
        margin: 0 8px;
      }
    </style>
  </head>
  <body>
    <div class="container text-center p-4">
      <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/header3.png" alt="Main Image" class="img-fluid mb-3" style="max-width: 232px" />
      <h1 class="h4">You're Invited to Join a Project</h1>
      <p>Project: ${projectName}</p>
      <a href="${buttonUrl}" class="btn-accept mt-3">ACCEPT INVITATION</a>
      <p class="mt-2">
        If you're having trouble with the button above, copy and paste the URL below into your web browser.
      </p>
      <hr class="border-light-blue my-4" />
      <p><strong>Didn't request this invitation?</strong></p>
      <p>You can safely ignore this message.</p>
    </div>
  </body>
</html>
`;