import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/system/screen-readers/screen-readers.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
