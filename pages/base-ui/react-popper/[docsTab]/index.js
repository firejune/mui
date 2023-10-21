import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/popper/popper.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import PopperApiJsonPageContent from '../../api/popper.json';

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
  const PopperApiReq = require.context(
    'translations/api-docs-base/popper',
    false,
    /popper.*.json$/,
  );
  const PopperApiDescriptions = mapApiPageTranslations(PopperApiReq);

  return {
    props: {
      componentsApiDescriptions: { Popper: PopperApiDescriptions },
      componentsApiPageContents: { Popper: PopperApiJsonPageContent },
      hooksApiDescriptions: {},
      hooksApiPageContents: {},
    },
  };
};
