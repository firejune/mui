import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocsV2';
import AppFrame from 'src/modules/components/AppFrame';
import * as pageProps from 'data/base/components/table-pagination/table-pagination.md?@mui/markdown';
import mapApiPageTranslations from 'src/modules/utils/mapApiPageTranslations';
import TablePaginationApiJsonPageContent from '../../api/table-pagination.json';

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
  const TablePaginationApiReq = require.context(
    'translations/api-docs-base/table-pagination',
    false,
    /table-pagination.*.json$/,
  );
  const TablePaginationApiDescriptions = mapApiPageTranslations(TablePaginationApiReq);

  return {
    props: {
      componentsApiDescriptions: { TablePagination: TablePaginationApiDescriptions },
      componentsApiPageContents: { TablePagination: TablePaginationApiJsonPageContent },
      hooksApiDescriptions: {},
      hooksApiPageContents: {},
    },
  };
};
