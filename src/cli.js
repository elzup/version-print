#!/usr/bin/env node
'use strict'
const meow = require('meow')
const versionPrint = require('.')

const cli = meow(`
	Usage
	  $ version-print
`)

versionPrint()
