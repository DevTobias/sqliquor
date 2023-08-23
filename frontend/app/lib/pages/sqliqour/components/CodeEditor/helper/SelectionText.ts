export class SelectionText {
  elm: HTMLTextAreaElement;

  start: number;

  end: number;

  value: string;

  constructor(elm: HTMLTextAreaElement) {
    const { selectionStart, selectionEnd } = elm;
    this.elm = elm;
    this.start = selectionStart;
    this.end = selectionEnd;
    this.value = this.elm.value;
  }

  position(start?: number, end?: number) {
    const { selectionStart, selectionEnd } = this.elm;
    this.start = typeof start === 'number' && !Number.isNaN(start) ? start : selectionStart;
    this.end = typeof end === 'number' && !Number.isNaN(end) ? end : selectionEnd;
    this.elm.selectionStart = this.start;
    this.elm.selectionEnd = this.end;
    return this;
  }

  insertText(text: string) {
    this.elm.focus();
    this.elm.setRangeText(text);
    this.value = this.elm.value;
    this.position();
    return this;
  }

  getSelectedValue(start?: number, end?: number) {
    const { selectionStart, selectionEnd } = this.elm;
    return this.value.slice(
      typeof start === 'number' && !Number.isNaN(start) ? start : selectionStart,
      typeof end === 'number' && !Number.isNaN(end) ? start : selectionEnd
    );
  }

  getLineStartNumber() {
    let { start } = this;
    while (start > 0) {
      start -= 1;
      if (this.value.charAt(start) === '\n') {
        start += 1;
        break;
      }
    }
    return start;
  }

  getIndentText() {
    const start = this.getLineStartNumber();
    const str = this.getSelectedValue(start);
    let indent = '';
    str.replace(/(^(\s)+)/, (_, old) => (indent = old));
    return indent;
  }

  lineStarInsert(text: string) {
    if (text) {
      const oldStart = this.start;
      const start = this.getLineStartNumber();
      const str = this.getSelectedValue(start);
      this.position(start, this.end)
        .insertText(
          str
            .split('\n')
            .map((txt) => text + txt)
            .join('\n')
        )
        .position(oldStart + text.length, this.end);
    }
    return this;
  }

  lineStarRemove(text: string) {
    if (text) {
      const oldStart = this.start;
      const start = this.getLineStartNumber();
      const str = this.getSelectedValue(start);
      const reg = new RegExp(`^${text}`, 'g');
      let newStart = oldStart - text.length;
      if (!reg.test(str)) {
        newStart = oldStart;
      }
      this.position(start, this.end)
        .insertText(
          str
            .split('\n')
            .map((txt) => txt.replace(reg, ''))
            .join('\n')
        )
        .position(newStart, this.end);
    }
  }

  notifyChange() {
    const event = new Event('input', { bubbles: true, cancelable: false });
    this.elm.dispatchEvent(event);
  }
}
