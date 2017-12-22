export const pages = [
  'Foo',
  'Bar',
  'Baz',
  'Rudy',
  'Example',
  'ReduxFirstRouter',
  'Universal',
  'FaceySpacey',
];

export const nextIndex = index => (index + 1) % pages.length;

export const indexFromPath = (rawPath) => {
  const path = (rawPath === '/' ? '/Foo' : rawPath).substr(1);
  return pages.indexOf(path);
};
