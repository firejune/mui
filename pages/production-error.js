import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'src/pages/production-error/index.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
