import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/autocomplete/autocomplete.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import useAutocompleteApiJsonPageContent from '../../api/use-autocomplete.json';

export default function Page(props) {
  const { userLanguage, ...other } = props;
  return <MarkdownDocs {...pageProps} {...other} />;
}

Page.getLayout = (page) => {
  return <AppFrame>{page}</AppFrame>;
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { docsTab: 'components-api' } }, { params: { docsTab: 'hooks-api' } }],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = () => {
  const useAutocompleteApiReq = require.context(
    'translations/api-docs/use-autocomplete',
    false,
    /use-autocomplete.*.json$/,
  );
  const useAutocompleteApiDescriptions = mapApiPageTranslations(useAutocompleteApiReq);

  return {
    props: {
      componentsApiDescriptions: {},
      componentsApiPageContents: {},
      hooksApiDescriptions: { useAutocomplete: useAutocompleteApiDescriptions },
      hooksApiPageContents: { useAutocomplete: useAutocompleteApiJsonPageContent },
    },
  };
};
