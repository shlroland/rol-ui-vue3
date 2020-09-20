const path = require('path');

module.exports = {
    stories: ['../packages/**/doc/*.stories.[tj]s'],
    addons: ['@storybook/addon-storysource'],
    presets: [path.resolve(__dirname, './custom-presets')],
}
