/* eslint-disable no-await-in-loop */

import { useEffect, useState } from 'react';

async function* readStreamData(reader: ReadableStreamDefaultReader<Uint8Array>) {
  const textDecoder = new TextDecoder();
  let readResult = await reader.read();
  while (!readResult.done) {
    yield textDecoder.decode(readResult.value);
    readResult = await reader.read();
  }
}

export const useStream = (stream: ReadableStream<Uint8Array>) => {
  const [value, setValue] = useState('');

  const readStream = async () => {
    for await (const chunk of readStreamData(stream.getReader())) {
      setValue((val) => `${val}${chunk}`);
    }
  };

  useEffect(() => {
    if (!stream.locked) readStream();
  }, [stream]);

  return value;
};
