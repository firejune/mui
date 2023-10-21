import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/popup/popup.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import PopupApiJsonPageContent from '../../api/popup.json';

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
  const PopupApiReq = require.context(
    'translations/api-docs-base/popup',
    false,
    /popup.*.json$/,
  );
  const PopupApiDescriptions = mapApiPageTranslations(PopupApiReq);

  return {
    props: {
      componentsApiDescriptions: { Popup: PopupApiDescriptions },
      componentsApiPageContents: { Popup: PopupApiJsonPageContent },
      hooksApiDescriptions: {},
      hooksApiPageContents: {},
    },
  };
};
