import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/components/toggle-button-group/toggle-button-group.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
