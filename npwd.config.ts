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
  id: 'RACING',
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#222',
  backgroundColor: '#333',
  path: '/racing',
  app: App,
});
