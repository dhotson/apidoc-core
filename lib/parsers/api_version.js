var trim = require('../utils/trim');

var ParameterError = require('../errors/parameter_error');

function parse(content) {
    content = trim(content);

    if (content.length === 0)
        return null;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(content))
        throw new ParameterError('Version format not valid.',
                                 'apiVersion', '@apiVersion yyyy-mm-dd');

    return {
        version: content
    };
}

/**
 * Exports
 */
module.exports = {
    parse     : parse,
    path      : 'local',
    method    : 'insert',
    extendRoot: true
};
