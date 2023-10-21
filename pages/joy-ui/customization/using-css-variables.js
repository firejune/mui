import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/customization/using-css-variables/using-css-variables.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
