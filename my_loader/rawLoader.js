const getOptions = require('loader-utils').getOptions;
const validateOptions = require('schema-utils');

const schema = {
  "additionalProperties": false,
  "properties": {},
  "type": "object"
}

module.exports = function(source) {
    const options = getOptions(this) || {};

    validateOptions(schema, options, 'Example Loader');

    // 输出内容
    return `export default ${ JSON.stringify(source) }`;
};
