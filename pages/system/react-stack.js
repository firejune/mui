import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/system/components/stack/stack.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
