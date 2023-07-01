import { registerLanguage, listLanguages } from 'highlight-ts/languages';
import { SQL } from 'highlight-ts/languages/sql';
import { process, init } from 'highlight-ts/process';
import { htmlRender } from 'highlight-ts/render/html';
import React, { TextareaHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

import styles from './CodeEditor.module.scss';

interface CodeEditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  prefixCls?: string;
  /**
   * Support dark-mode/night-mode
   */
  ['data-color-mode']?: 'dark' | 'light';

  /**
   * Set what programming language the code belongs to.
   */
  language?: string;

  /**
   * Optional padding for code. Default: `10`.
   */
  padding?: number;

  /**
   * The minimum height of the editor. Default: `16`.
   */
  minHeight?: number;

  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void | boolean;
}

const languages = {
  sql: SQL,
};

// https://uiwjs.github.io/react-textarea-code-editor/

const highlightCode = (lang: 'sql', code: string) => {
  if (!listLanguages().includes(lang)) registerLanguage(languages[lang]);
  return process(init(htmlRender, { classPrefix: '' }), code, lang).value;
};

export const CodeEditor = forwardRef<HTMLTextAreaElement, CodeEditorProps>((props, ref) => {
  const {
    prefixCls = 'w-tc-editor',
    padding = 10,
    minHeight = 16,
    placeholder,
    language,
    'data-color-mode': dataColorMode,
    className,
    style,
    onChange,
    ...other
  } = props;

  const [value, setValue] = useState(props.value || '');
  useEffect(() => setValue(props.value || ''), [props.value]);
  const textRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle<HTMLTextAreaElement, HTMLTextAreaElement>(ref, () => textRef.current!, [textRef]);

  const contentStyle = {
    paddingTop: padding,
    paddingRight: padding,
    paddingBottom: padding,
    paddingLeft: padding,
  };

  const htmlStr = useMemo(
    () =>
      `<pre aria-hidden=true><code ${language && value ? `class="language-${language}"` : ''} >${highlightCode(
        'sql',
        String(value || '')
      )}</code><br /></pre>`,

    [value, language]
  );
  const preView = useMemo(
    () => (
      <div
        style={{ ...contentStyle, minHeight }}
        className={`${prefixCls}-preview  ${styles.editor} ${language ? `language-${language}` : ''}`}
        dangerouslySetInnerHTML={{
          __html: htmlStr,
        }}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [prefixCls, language, htmlStr]
  );

  const change = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evn.target.value);
    if (onChange) onChange(evn);
  };

  const keyDown = (evn: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (other.readOnly) return;
    if (!other.onKeyDown || other.onKeyDown(evn) !== false) {
      // shortcuts(evn);
    }
  };

  const textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: 'false',
    autoCapitalize: 'off',
    ...other,
    placeholder,
    onKeyDown: keyDown,
    style: {
      ...contentStyle,
      minHeight,
      ...(placeholder && !value ? { WebkitTextFillColor: 'inherit' } : {}),
    },
    onChange: change,
    className: `${styles.textarea} ${prefixCls}-text ${styles.editor} `,
    value,
  };

  return (
    <div style={{ ...style }} className={`${prefixCls} ${className || ''} ${styles.container}`} data-color-mode={dataColorMode}>
      <textarea {...textareaProps} ref={textRef} />
      {preView}
    </div>
  );
});

CodeEditor.displayName = 'CodeEditor';
