/**
 * Contact Information
 * 
 * Contains all contact information displayed on the portfolio.
 * Edit this file to update your contact details across the site.
 */

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactInfo = {
  email: {
    id: 'email',
    icon: EmailIcon,
    label: 'Email',
    value: 'hayryan1045@gmail.com',
    href: 'mailto:hayryan1045@gmail.com'
  },
  phone: {
    id: 'phone',
    icon: PhoneIcon,
    label: 'Phone',
    value: '+37433150750',
    href: 'tel:+37433150750'
  },
  telegram: {
    id: 'telegram',
    icon: TelegramIcon,
    label: 'Telegram',
    value: '@arsh_hayr',
    href: 'https://t.me/arsh_hayr',
    target: '_blank'
  },
  linkedin: {
    id: 'linkedin',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'arshak-hayriyan-8a00a2229',
    href: 'https://linkedin.com/in/arshak-hayriyan-8a00a2229',
    target: '_blank'
  }
};

// Array format for easy mapping in components
export const contactInfoArray = Object.values(contactInfo);

// Re-export the LocationOnIcon so Home component can use it directly
export { LocationOnIcon };

export default contactInfo; 