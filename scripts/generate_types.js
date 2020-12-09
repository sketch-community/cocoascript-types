#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const read = require('fs-readdir-recursive');
const ClassDeclaration = require('../lib/ClassDeclaration');
const MethodDeclaration = require('../lib/MethodDeclaration');
const PropertyDeclaration = require('../lib/PropertyDeclaration');



function createIdentifier(clazz, id) {
  const docFile = path.resolve(id.replace('doc://com.apple.documentation/', '') + '.json');
  if (!fs.existsSync(docFile)) {
    return;
  }
  const doc = require(docFile);
  const firstSection = doc.primaryContentSections && doc.primaryContentSections[0];
  if (!firstSection) {
    return;
  }
  if (firstSection.kind !== 'declarations') {
    return;
  }
  const { tokens } = firstSection.declarations[0];
  let index = 0;
  if (tokens[index].text === '- (') {
    const method = new MethodDeclaration(clazz);
    index += 1;
    const returnType = tokens[index];
    if (returnType.text !== 'void') {
      method.returnType = returnType.text;
    }
    while (index < tokens.length) {
      if (tokens[index].kind === 'identifier') {
        const id = tokens[index].text.replace(/:$/, '');
        index += 2;
        let paramType;
        let paramName;
        if (tokens[index]) {
          paramType = tokens[index].text;
          while (tokens[index].kind !== 'internalParam') {
            index += 1;
          }
          paramName = tokens[index].text;
        }
        method.identifiers.push({
          id,
          paramType,
          paramName,
        });
      }
      index += 1;
    }
    return method;
  }
  if (tokens[index].text === '@property') {
    const property = new PropertyDeclaration();
    while (index < tokens.length) {
      if (tokens[index].text.includes('nullable')) {
        property.nullable = true;
      }
      if (tokens[index].text.includes('readonly')) {
        property.readonly = true;
      }
      if (tokens[index].kind === 'typeIdentifier') {
        property.type = tokens[index].text;
      }
      if (tokens[index].kind === 'identifier') {
        property.identifier = tokens[index].text;
      }

      index += 1;
    }
    return property;
  }
}

function main() {
  const code = [];
  read('./documentation').forEach(file => {
    const doc = require(`../documentation/${file}`);
    const firstSection = doc.primaryContentSections && doc.primaryContentSections[0];
    if (!firstSection) {
      return;
    }
    if (firstSection.kind !== 'declarations') {
      return;
    }
    const { tokens } = firstSection.declarations[0];
    if (tokens[0].text === '@interface') {
      const idToken = tokens.find(t => t.kind === 'identifier');
      const clazz = new ClassDeclaration(idToken.text, doc.abstract && doc.abstract.text);
      const inheritsSection = doc.relationshipsSections.find(s => s.type === 'inheritsFrom');
      if (inheritsSection) {
        const inheritsRef = doc.references[inheritsSection.identifiers[0]];
        clazz.inheritsFrom = inheritsRef.title;
      }
      if (doc.topicSections) {
        doc.topicSections.forEach(topic => {
          topic.identifiers.forEach(id => {
            const property = createIdentifier(clazz, id);
            if (property) {
              clazz.properties.push(property);
            }
          });
        });
      }
      code.push(clazz.generate());
    }
    fs.writeFileSync('./types/index.d.ts', code.join('\n\n'));
  });
}

main();
