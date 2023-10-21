import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/getting-started/design-resources/design-resources.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd disableToc />;
}
