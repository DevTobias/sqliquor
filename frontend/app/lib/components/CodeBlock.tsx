import { registerLanguage, listLanguages } from 'highlight-ts/languages';
import { SQL } from 'highlight-ts/languages/sql';
import { process, init } from 'highlight-ts/process';
import { htmlRender } from 'highlight-ts/render/html';
import { FC } from 'react';

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
