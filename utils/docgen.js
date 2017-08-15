const path = require('path');
const fs = require('fs');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

const componentPath = path.resolve(path.join(__dirname, '..', 'index.js'));

const renderer = new ReactDocGenMarkdownRenderer({
  componentsBasePath: path.resolve(path.join(__dirname, '..')),
});

fs.readFile(componentPath, (error, content) => {
  const documentationPath = 'docs' + renderer.extension;
  const doc = reactDocgen.parse(content);
  fs.writeFile(
    documentationPath,
    renderer.render(
      /* The path to the component, used for linking to the file. */
      componentPath,
      /* The actual react-docgen AST */
      doc,
      /* Array of component ASTs that this component composes*/
      []
    )
  );
});
