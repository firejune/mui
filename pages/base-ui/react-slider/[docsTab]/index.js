import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/slider/slider.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import SliderApiJsonPageContent from '../../api/slider.json';
import useSliderApiJsonPageContent from '../../api/use-slider.json';

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
  const SliderApiReq = require.context(
    'translations/api-docs-base/slider',
    false,
    /slider.*.json$/,
  );
  const SliderApiDescriptions = mapApiPageTranslations(SliderApiReq);

  const useSliderApiReq = require.context(
    'translations/api-docs/use-slider',
    false,
    /use-slider.*.json$/,
  );
  const useSliderApiDescriptions = mapApiPageTranslations(useSliderApiReq);

  return {
    props: {
      componentsApiDescriptions: { Slider: SliderApiDescriptions },
      componentsApiPageContents: { Slider: SliderApiJsonPageContent },
      hooksApiDescriptions: { useSlider: useSliderApiDescriptions },
      hooksApiPageContents: { useSlider: useSliderApiJsonPageContent },
    },
  };
};
