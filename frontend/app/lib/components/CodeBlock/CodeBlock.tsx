import { FC } from 'react';

import { process, init } from 'highlight-ts/process';
import { registerLanguage, listLanguages } from 'highlight-ts/languages';
import { htmlRender } from 'highlight-ts/render/html';
import { SQL } from 'highlight-ts/languages/sql';

const languages = {
  sql: SQL,
};

interface Props {
  code: string;
  lang: 'sql';
}

export const CodeBlock: FC<Props> = ({ code, lang }) => {
  const highlightCode = () => {
    if (!listLanguages().includes(lang)) registerLanguage(languages[lang]);
    return process(init(htmlRender, { classPrefix: '' }), code, lang).value;
  };

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      <code dangerouslySetInnerHTML={{ __html: highlightCode() }}></code>
    </pre>
  );
};
