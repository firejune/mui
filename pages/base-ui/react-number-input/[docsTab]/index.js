import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/number-input/number-input.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import NumberInputApiJsonPageContent from '../../api/number-input.json';
import useNumberInputApiJsonPageContent from '../../api/use-number-input.json';

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
  const NumberInputApiReq = require.context(
    'translations/api-docs-base/number-input',
    false,
    /number-input.*.json$/,
  );
  const NumberInputApiDescriptions = mapApiPageTranslations(NumberInputApiReq);

  const useNumberInputApiReq = require.context(
    'translations/api-docs/use-number-input',
    false,
    /use-number-input.*.json$/,
  );
  const useNumberInputApiDescriptions = mapApiPageTranslations(useNumberInputApiReq);

  return {
    props: {
      componentsApiDescriptions: { NumberInput: NumberInputApiDescriptions },
      componentsApiPageContents: { NumberInput: NumberInputApiJsonPageContent },
      hooksApiDescriptions: { useNumberInput: useNumberInputApiDescriptions },
      hooksApiPageContents: { useNumberInput: useNumberInputApiJsonPageContent },
    },
  };
};
