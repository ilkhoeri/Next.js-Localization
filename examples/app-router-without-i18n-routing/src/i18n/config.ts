enum Locales {
  id = 'id',
  en = 'en',
  th = 'th',
  ja = 'ja'
}

// export type Locale = (typeof locales)[number];
// export const locales = ['id', 'en', 'th', 'ja'] as const;

export type Locale = `${Locales}`;
export const locales = Object.values(Locales);
export const defaultLocale: Locale = 'id';
