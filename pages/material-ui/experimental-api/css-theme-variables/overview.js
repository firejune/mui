import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import {
  demos,
  docs,
  demoComponents,
} from 'data/material/experimental-api/css-theme-variables/overview.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} demoComponents={demoComponents} />;
}
