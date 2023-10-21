import * as React from 'react';
import ApiPage from 'src/modules/components/ApiPage';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import jsonPageContent from './modal-overflow.json';

export default function Page(props) {
  const { descriptions, pageContent } = props;
  return <ApiPage descriptions={descriptions} pageContent={pageContent} />;
}

Page.getInitialProps = () => {
  const req = require.context(
    'translations/api-docs-joy/modal-overflow',
    false,
    /modal-overflow.*.json$/,
  );
  const descriptions = mapApiPageTranslations(req);

  return {
    descriptions,
    pageContent: jsonPageContent,
  };
};
