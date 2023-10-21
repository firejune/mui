import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/switch/switch.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import SwitchApiJsonPageContent from '../../api/switch.json';
import useSwitchApiJsonPageContent from '../../api/use-switch.json';

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
  const SwitchApiReq = require.context(
    'translations/api-docs-base/switch',
    false,
    /switch.*.json$/,
  );
  const SwitchApiDescriptions = mapApiPageTranslations(SwitchApiReq);

  const useSwitchApiReq = require.context(
    'translations/api-docs/use-switch',
    false,
    /use-switch.*.json$/,
  );
  const useSwitchApiDescriptions = mapApiPageTranslations(useSwitchApiReq);

  return {
    props: {
      componentsApiDescriptions: { Switch: SwitchApiDescriptions },
      componentsApiPageContents: { Switch: SwitchApiJsonPageContent },
      hooksApiDescriptions: { useSwitch: useSwitchApiDescriptions },
      hooksApiPageContents: { useSwitch: useSwitchApiJsonPageContent },
    },
  };
};
