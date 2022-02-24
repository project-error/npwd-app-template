import App from './src/App';

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
  app: App,
});
