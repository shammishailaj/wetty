/* eslint-disable typescript/no-var-requires */

const yargs = require('yargs');
const wetty = require('./dist').default;

module.exports = wetty.wetty;

/**
 * Check if being run by cli or require
 */
if (require.main === module)
  wetty.init(
    yargs
      .options({
        sslkey: {
          demand: false,
          type: 'string',
          description: 'path to SSL key',
        },
        sslcert: {
          demand: false,
          type: 'string',
          description: 'path to SSL certificate',
        },
        sshhost: {
          demand: false,
          description: 'ssh server host',
          type: 'string',
          default: process.env.SSHHOST || 'localhost',
        },
        sshport: {
          demand: false,
          description: 'ssh server port',
          type: 'number',
          default: parseInt(process.env.SSHPOST, 10) || 22,
        },
        sshuser: {
          demand: false,
          description: 'ssh user',
          type: 'string',
          default: process.env.SSHUSER || '',
        },
        sshauth: {
          demand: false,
          description:
            'defaults to "password", you can use "publickey,password" instead',
          type: 'string',
          default: process.env.SSHAUTH || 'password',
        },
        base: {
          demand: false,
          alias: 'b',
          description: 'base path to wetty',
          type: 'string',
          default: process.env.BASE || '/wetty/',
        },
        port: {
          demand: false,
          alias: 'p',
          description: 'wetty listen port',
          type: 'number',
          default: parseInt(process.env.PORT, 10) || 3000,
        },
        help: {
          demand: false,
          alias: 'h',
          type: 'boolean',
          description: 'Print help message',
        },
      })
      .boolean('allow_discovery').argv
  );
