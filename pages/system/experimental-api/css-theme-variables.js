import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/system/experimental-api/css-theme-variables/css-theme-variables.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
