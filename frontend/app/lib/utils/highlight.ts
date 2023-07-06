import { LanguageDef } from 'highlight-ts';
import { registerLanguage, listLanguages } from 'highlight-ts/languages';
import { SQL } from 'highlight-ts/languages/sql';
import { process, init } from 'highlight-ts/process';
import { htmlRender } from 'highlight-ts/render/html';

const languages = new Map<string, LanguageDef>([['sql', SQL]]);

export const highlightCode = (code: string, lang: string, opt?: { classPrefix?: string }) => {
  if (!languages.has(lang)) return code;
  if (!listLanguages().includes(lang)) registerLanguage(languages.get(lang)!);
  return process(init(htmlRender, { classPrefix: opt?.classPrefix ?? '' }), code, lang).value;
};
