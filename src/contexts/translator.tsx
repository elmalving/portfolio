import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'cz';

type TranslatorContextType = {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

type Translations = Record<string, Record<Language, string>>;

export const TranslatorContext = createContext<TranslatorContextType | null>(
    null
);

export const TranslatorProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const currentLanguage =
        (localStorage.getItem('language') as Language) ?? 'en';

    const [language, setLanguage] = useState<Language>(currentLanguage);

    return (
        <TranslatorContext.Provider value={{ language, setLanguage }}>
            {children}
        </TranslatorContext.Provider>
    );
};

const translationCache: Record<string, Translations> = {};

export function useTranslator(filename: string): {
    translate: (key: string) => string;
    isLoading: boolean;
} & TranslatorContextType;

export function useTranslator(): TranslatorContextType;

export function useTranslator(filename?: string) {
    const context = useContext(TranslatorContext);

    const [translations, setTranslations] = useState<Translations | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    if (!context) {
        throw new Error(
            'useTranslator must be used within a TranslatorProvider'
        );
    }

    if (!filename) {
        return context;
    }

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);

            if (translationCache[filename]) {
                setTranslations(translationCache[filename]);
                setIsLoading(false);
                return;
            }

            try {
                const mod = await import(`../translations/${filename}.json`);
                const data = mod.default;

                translationCache[filename] = mod.default;

                setTranslations(data);
            } catch (err) {
                console.error(
                    `Failed to load translations for ${filename}:`,
                    err
                );
                setTranslations({});
            } finally {
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [context.language, filename]);

    const translate = (key: string): string => {
        if (isLoading) {
            return key;
        }

        if (!translations?.[key]) {
            console.error(`missing translations in ${filename} for key ${key}`);
            return key;
        }

        return translations[key][context.language] ?? key;
    };

    return { translate, isLoading, ...context };
}
