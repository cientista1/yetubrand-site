

export function sendEmail(email, subject, message ) {
  message = message.replace(/<br\s*\/?>/mg,"%0D%0A");
  return `mailto:${email}?subject=${subject}&body=${message}`;
}