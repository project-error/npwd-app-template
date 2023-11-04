import App from './src/App';
import { AppIcon } from './icon';

interface Settings {
  language: 'en';
}

export const path = '/mockapp';
export default (settings: Settings) => ({
  id: 'MOCKAPP',
  path,
  nameLocale: "Mockapp", 
  color: '#fff',
  backgroundColor: '#333',
  icon: AppIcon,
  app: App,
});