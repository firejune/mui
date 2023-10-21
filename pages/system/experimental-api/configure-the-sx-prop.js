import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/system/experimental-api/configure-the-sx-prop/configure-the-sx-prop.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
