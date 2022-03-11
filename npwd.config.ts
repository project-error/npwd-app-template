import App from './src/App';
import {AppIcon} from "./icon";

const defaultLanguage = 'en';
const localizedAppName = {
  sv: 'Snabb',
  en: 'Racing',
};

interface Settings {
  language: 'sv' | 'en';
}

export default (settings: Settings) => ({
  id: 'WEATHER',
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#222',
  backgroundColor: '#333',
  path: '/weather',
  icon: AppIcon,
  app: App,
});
