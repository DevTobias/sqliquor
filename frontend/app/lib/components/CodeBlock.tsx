import { registerLanguage, listLanguages } from 'highlight-ts/languages';
import { SQL } from 'highlight-ts/languages/sql';
import { process, init } from 'highlight-ts/process';
import { htmlRender } from 'highlight-ts/render/html';
import { FC, ReactElement } from 'react';

const languages = {
  sql: SQL,
};

interface Props {
  code?: string;
  lang?: 'sql';
  children?: ReactElement;
}

export const CodeBlock: FC<Props> = ({ code, lang, ...rest }) => {
  const childProps = rest.children?.props;

  const highlightCode = () => {
    const parsedLang = lang ?? childProps.className?.split('-')[1] ?? '';
    if (!listLanguages().includes(parsedLang)) registerLanguage(languages[parsedLang as 'sql']);
    return process(init(htmlRender, { classPrefix: '' }), code ?? childProps.children ?? '', lang).value;
  };

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'inherit' }}>
      <code dangerouslySetInnerHTML={{ __html: highlightCode() }} style={{ fontFamily: 'inherit' }}></code>
    </pre>
  );
};
