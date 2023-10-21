import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/floating-action-button/floating-action-button.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
