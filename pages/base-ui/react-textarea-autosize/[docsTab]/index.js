import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/textarea-autosize/textarea-autosize.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import TextareaAutosizeApiJsonPageContent from '../../api/textarea-autosize.json';

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
  const TextareaAutosizeApiReq = require.context(
    'translations/api-docs-base/textarea-autosize',
    false,
    /textarea-autosize.*.json$/,
  );
  const TextareaAutosizeApiDescriptions = mapApiPageTranslations(TextareaAutosizeApiReq);

  return {
    props: {
      componentsApiDescriptions: { TextareaAutosize: TextareaAutosizeApiDescriptions },
      componentsApiPageContents: { TextareaAutosize: TextareaAutosizeApiJsonPageContent },
      hooksApiDescriptions: {},
      hooksApiPageContents: {},
    },
  };
};
