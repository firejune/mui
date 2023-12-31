import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/form-control/form-control.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import FormControlApiJsonPageContent from '../../api/form-control.json';
import useFormControlContextApiJsonPageContent from '../../api/use-form-control-context.json';

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
  const FormControlApiReq = require.context(
    'translations/api-docs-base/form-control',
    false,
    /form-control.*.json$/,
  );
  const FormControlApiDescriptions = mapApiPageTranslations(FormControlApiReq);

  const useFormControlContextApiReq = require.context(
    'translations/api-docs/use-form-control-context',
    false,
    /use-form-control-context.*.json$/,
  );
  const useFormControlContextApiDescriptions = mapApiPageTranslations(useFormControlContextApiReq);

  return {
    props: {
      componentsApiDescriptions: { FormControl: FormControlApiDescriptions },
      componentsApiPageContents: { FormControl: FormControlApiJsonPageContent },
      hooksApiDescriptions: { useFormControlContext: useFormControlContextApiDescriptions },
      hooksApiPageContents: { useFormControlContext: useFormControlContextApiJsonPageContent },
    },
  };
};
