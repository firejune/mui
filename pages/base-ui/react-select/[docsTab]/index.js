import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/select/select.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import OptionApiJsonPageContent from '../../api/option.json';
import OptionGroupApiJsonPageContent from '../../api/option-group.json';
import SelectApiJsonPageContent from '../../api/select.json';
import useOptionApiJsonPageContent from '../../api/use-option.json';
import useSelectApiJsonPageContent from '../../api/use-select.json';

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
  const OptionApiReq = require.context(
    'translations/api-docs-base/option',
    false,
    /option.*.json$/,
  );
  const OptionApiDescriptions = mapApiPageTranslations(OptionApiReq);

  const OptionGroupApiReq = require.context(
    'translations/api-docs-base/option-group',
    false,
    /option-group.*.json$/,
  );
  const OptionGroupApiDescriptions = mapApiPageTranslations(OptionGroupApiReq);

  const SelectApiReq = require.context(
    'translations/api-docs-base/select',
    false,
    /select.*.json$/,
  );
  const SelectApiDescriptions = mapApiPageTranslations(SelectApiReq);

  const useOptionApiReq = require.context(
    'translations/api-docs/use-option',
    false,
    /use-option.*.json$/,
  );
  const useOptionApiDescriptions = mapApiPageTranslations(useOptionApiReq);

  const useSelectApiReq = require.context(
    'translations/api-docs/use-select',
    false,
    /use-select.*.json$/,
  );
  const useSelectApiDescriptions = mapApiPageTranslations(useSelectApiReq);

  return {
    props: {
      componentsApiDescriptions: {
        Option: OptionApiDescriptions,
        OptionGroup: OptionGroupApiDescriptions,
        Select: SelectApiDescriptions,
      },
      componentsApiPageContents: {
        Option: OptionApiJsonPageContent,
        OptionGroup: OptionGroupApiJsonPageContent,
        Select: SelectApiJsonPageContent,
      },
      hooksApiDescriptions: {
        useOption: useOptionApiDescriptions,
        useSelect: useSelectApiDescriptions,
      },
      hooksApiPageContents: {
        useOption: useOptionApiJsonPageContent,
        useSelect: useSelectApiJsonPageContent,
      },
    },
  };
};
