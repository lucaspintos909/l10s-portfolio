import { ui } from './ui';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/**
 * Returns the relative URL for a given path in the specified locale.
 * Matches Astro 5 i18n routing with `prefixDefaultLocale: true`.
 */
export function getRelativeLocaleUrl(lang: Locale, path: string = ''): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${lang}${cleanPath}`;
}

/**
 * Extracts the locale from a URL pathname.
 * Falls back to the default locale if not found.
 */
export function getLangFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (LOCALES.includes(lang as Locale)) return lang as Locale;
    return DEFAULT_LOCALE;
}

/**
 * Returns a translation function for the given locale.
 * Usage: const t = useTranslations('en');  t('nav.about')
 */
export function useTranslations(lang: Locale) {
    return function t(key: keyof (typeof ui)['es']): string {
        return (ui[lang] as Record<string, string>)[key as string]
            ?? (ui[DEFAULT_LOCALE] as Record<string, string>)[key as string]
            ?? (key as string);
    };
}

/**
 * Returns the alternate locale for language switching.
 */
export function getAlternateLocale(lang: Locale): Locale {
    return lang === 'es' ? 'en' : 'es';
}

/**
 * Formats a Date object into a locale-aware month/year string.
 */
export function formatDate(date: Date, lang: Locale): string {
    return date.toLocaleDateString(lang === 'es' ? 'es-UY' : 'en-US', {
        month: 'short',
        year: 'numeric',
    });
}
