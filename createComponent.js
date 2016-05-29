"use strict";

const fs = require('fs');

if (!process.argv[2]) {
    // TODO: make it possible to create a name here
    throw new Error("No component name");
}

const componentName = process.argv[2];

const template = [
`import React from 'react';`,
``,
`class ${ componentName } extends React.Component {`,
`    render() {`,
`        return (`,
`            `,
`        )`,
`    }`,
`}`,
``,
`${ componentName }.propTypes = {`,
    ``,
`}`,
``,
`export default ${ componentName };`
];

const templateString = (function templateToString(arrayOfStrings) {
    let res = '';
    arrayOfStrings.forEach((string) => {
        res += `${ string }\n`;
    });
    return res;
})(template);

const path = `./scripts/Components/${ componentName }`;
fs.exists(path, (componentExists) => {
    if(componentExists) {
        throw new Error("Component already exists");
    }

    fs.mkdir(path, () => {

        fs.writeFile(`${ path }/index.jsx`, templateString, (err) => {
            if (err) {
                throw new Error('Could not write file');
            }

            console.log(`${ componentName } created`);
        });
    });
});
