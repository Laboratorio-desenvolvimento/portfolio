import emailjs from '@emailjs/browser';
/*serviceID,templateID,publicKey devem ser pegos no site do emailjs. As variáveis do template
devem ser name, email e message, para coincidir com as variáveis do formulário do EmailForm.jsx
*/
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';

export function sendEmail(formRef) {
  if (!formRef?.current) {
    return Promise.reject(new Error('form reference is not set'));
  }
  return emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
}