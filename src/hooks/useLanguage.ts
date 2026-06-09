import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export function useLanguage() {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isZh = i18n.language === 'zh';

  return { t, toggleLanguage, isZh };
}