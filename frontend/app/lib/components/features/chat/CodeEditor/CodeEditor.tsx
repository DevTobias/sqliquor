import {
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  TextareaHTMLAttributes,
  useMemo,
  useState,
} from 'react';

import { checkForShortcuts } from '$lib/components/CodeEditor/shortcuts';

import styles from './CodeEditor.module.scss';

interface CodeEditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  language: string;
  highlight: (code: string, lang: string) => string;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void | boolean;
}

export const CodeEditor: FC<CodeEditorProps> = ({ placeholder, language, className, onChange, highlight, ...rest }) => {
  const [value, setValue] = useState(rest.value || '');

  const highlightedCode = useMemo(() => highlight(String(value || ''), language), [language, highlight, value]);

  const onValueChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    if (onChange) onChange(event);
  };

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (rest.readOnly) return;
    if (!rest.onKeyDown || rest.onKeyDown(event) !== false) {
      checkForShortcuts(event);
    }
  };

  const onDoubleClick: MouseEventHandler<HTMLTextAreaElement> = (event) => {
    while (event.currentTarget.value.substring(event.currentTarget.selectionEnd - 1, 2) === ' ') {
      event.currentTarget.selectionEnd -= 1;
    }
  };

  const textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: 'false',
    autoCapitalize: 'off',
    ...rest,
    placeholder,
    onKeyDown,
    onDoubleClick,
    style: { ...(placeholder && !value ? { WebkitTextFillColor: 'inherit' } : {}) },
    onChange: onValueChange,
    className: `${styles.textarea} ${styles.text} ${styles.editor} `,
    value,
  };

  return (
    <div className={`${className || ''} ${styles.container}`}>
      <textarea {...textareaProps} />
      <div className={`${styles.preview} ${styles.editor}`}>
        <pre aria-hidden={true}>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};
