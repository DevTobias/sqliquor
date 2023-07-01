import { KeyboardEvent } from 'react';

import { SelectionText } from './SelectionText';

const stopPropagation = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  e.stopPropagation();
  e.preventDefault();
};

export const checkForShortcuts = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  const api = new SelectionText(e.target as HTMLTextAreaElement);

  const code = (e.code || e.nativeEvent.code).toLocaleLowerCase();

  if (code === 'tab') {
    stopPropagation(e);

    if (api.start === api.end) {
      if (e.shiftKey) {
        api.lineStarRemove('  ');
      } else {
        api.insertText('  ').position(api.start + 2, api.end + 2);
      }
    } else if (api.getSelectedValue().indexOf('\n') > -1 && e.shiftKey) {
      api.lineStarRemove('  ');
    } else if (api.getSelectedValue().indexOf('\n') > -1) {
      api.lineStarInsert('  ');
    } else {
      api.insertText('  ').position(api.start + 2, api.end);
    }

    api.notifyChange();
    return;
  }

  if (code === 'enter') {
    stopPropagation(e);
    const indent = `\n${api.getIndentText()}`;
    api.insertText(indent).position(api.start + indent.length, api.start + indent.length);
    api.notifyChange();
    return;
  }

  if (code && /^(intlbackslash|backslash|equal|digit2|digit7|digit8)$/.test(code) && api.getSelectedValue()) {
    stopPropagation(e);
    const val = api.getSelectedValue();
    let txt = val;

    switch (code) {
      case 'intlbackslash':
        txt = `<${val}>`;
        break;
      case 'equal':
        if (e.shiftKey) txt = `\`${val}\``;
        break;
      case 'backslash':
        if (e.shiftKey) txt = `'${val}'`;
        break;
      case 'digit2':
        if (e.shiftKey) txt = `"${val}"`;
        break;
      case 'digit7':
        if (e.altKey) txt = `{${val}}`;
        break;
      case 'digit8':
        if (e.shiftKey) txt = `(${val})`;
        if (e.altKey) txt = `[${val}]`;
        break;
      default:
        txt = val;
        break;
    }
    api.insertText(txt);
    api.notifyChange();
  }
};
