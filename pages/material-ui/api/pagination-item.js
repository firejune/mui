import * as React from 'react';
import ApiPage from 'src/modules/components/ApiPage';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import jsonPageContent from './pagination-item.json';

export default function Page(props) {
  const { descriptions, pageContent } = props;
  return <ApiPage descriptions={descriptions} pageContent={pageContent} />;
}

Page.getInitialProps = () => {
  const req = require.context(
    'translations/api-docs/pagination-item',
    false,
    /pagination-item.*.json$/,
  );
  const descriptions = mapApiPageTranslations(req);

  return {
    descriptions,
    pageContent: jsonPageContent,
  };
};
