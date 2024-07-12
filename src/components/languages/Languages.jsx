import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import Container from '../container/Container';

const Languages = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => i18n.language.substring(0, 2).toUpperCase());

  const handleSelect = (countryCode) => {
    switch (countryCode) {
      case 'UZ':
        i18n.changeLanguage('uz');
        break;
      case 'RU':
        i18n.changeLanguage('ru');
        break;
      case 'GB':
        i18n.changeLanguage('gb');
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    setCurrentLanguage(i18n.language.substring(0, 2).toUpperCase());
  }, [i18n.language]);

  return (
    <Container>
      <div className='mt-7 mb-3.5'>
        <ReactFlagsSelect
          countries={['UZ', 'RU', 'GB']}
          customLabels={{ UZ: 'UZ', RU: 'RU', GB: 'GB' }}
          onSelect={handleSelect}
          selected={currentLanguage}
          placeholder={currentLanguage}
        />
      </div>
    </Container>
  );
};

export default Languages;
