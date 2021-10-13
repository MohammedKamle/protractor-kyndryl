// An example configuration file.
var buildName = process.env.BROWSERSTACK_BUILD_NAME
exports.config = {
    directConnect: false,

    'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

    // Capabilities to be passed to the webdriver instance.
    'capabilities': {
        'build': buildName,
        'name': 'single_test',
        'browserName': 'chrome',
        'resolution': '1024x768',
        'browserstack.debug': 'true'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['example_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
