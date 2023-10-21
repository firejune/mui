import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/styles/api/api.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
