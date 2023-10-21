import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/use-media-query/use-media-query.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
