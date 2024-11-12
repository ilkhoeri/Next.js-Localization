import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { locales } from '@/i18n/config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const languageItems = locales.map((lang) => ({
    value: lang,
    label: t(lang)
  }));

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={languageItems}
      label={t('label')}
    />
  );
}
