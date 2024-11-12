'use server';

import {cookies} from 'next/headers';
import {Locale, defaultLocale} from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const localeCookieName = '__LOCALE_DICTIONARIES';

export async function getUserLocale() {
  return cookies().get(localeCookieName)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(localeCookieName, locale);
}
