import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import en from './locale/en.json';

I18n.fallbacks = true;

I18n.translations = {
  en,
};

const currentLocale = I18n.currentLocale();

export const isRTL = currentLocale.indexOf('hi') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export function strings(name, params = {}) {
  return I18n.t(name, params);
}
