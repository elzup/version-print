#!/usr/bin/env node
const meow = require('meow')
const versionPrint = require('.')

const cli = meow(`
	Usage
	  $ version-print
`)

versionPrint()
