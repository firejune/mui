import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/customization/how-to-customize/how-to-customize.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
