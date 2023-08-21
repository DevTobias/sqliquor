type ClassObject = { [key: string]: boolean };

type ClassElement = string | boolean | undefined | ClassObject;

const classNamesFromObject = (classes: ClassObject) => {
  const classNames = [];

  for (const [k, v] of Object.entries(classes)) {
    if (v) classNames.push(k);
  }

  return classNames.join(' ') || undefined;
};

export const classNames = (...classes: ClassElement[]) => {
  const generatedClasses: (string | undefined)[] = [];

  let element: ClassElement;
  for (let i = classes.length - 1; i >= 0; i -= 1) {
    element = classes[i];

    if (element && typeof element !== 'boolean') {
      if (typeof element === 'string') generatedClasses.push(element);
      else generatedClasses.push(classNamesFromObject(element));
    }
  }

  return generatedClasses.join(' ') || undefined;
};
