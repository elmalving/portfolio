import { useTranslator } from '../contexts/translator';

export const Privacy = () => {
    const { translate } = useTranslator('privacy');

    return (
        <>
            {translate(
                'So far, all that the information site takes from your device is the size of its display for itself optimization, further - more.'
            )}
        </>
    );
};
