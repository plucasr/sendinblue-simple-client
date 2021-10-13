import { templatesProvider } from './templatesProvider';
import { emailClient } from './emailClient';

const defaultOptions = {
  to: [
    {
      name: 'John Doe',
      email: 'john@doe.co',
    },
  ],
  content: '', // template from sendinblue api
  contentParams: {
    name: 'Some key',
    code: 'some value',
  }, // key and value for replace in the template
  subject: '[Subject] My subject info',
};

export type EmailUser = {
  email: string;
  name: string;
};

export type MailerOptions = {
  sender: EmailUser;
  to: EmailUser[];
  subject: string;
  content?: string;
  contentParams: {
    [key: string]: string;
  };
};

export class SendinBlueClient {
  apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  async sendEmail(options: MailerOptions | any) {
    return await emailClient(options, this.apiKey);
  }
  async templatesProvider(templateId = 0) {
    return await templatesProvider(templateId, this.apiKey);
  }
}

export default SendinBlueClient;
