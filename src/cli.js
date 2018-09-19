#!/usr/bin/env node
'use strict'
const meow = require('meow')
const versionPrint = require('.')

const cli = meow(`
	Usage
	  $ version-print [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ version-print
	  unicorns & rainbows
	  $ version-print ponies
	  ponies & rainbows
`)

console.log(versionPrint(cli.input[0] || 'unicorns'))
