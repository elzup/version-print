#!/usr/bin/env node
import meow from 'meow'
import versionPrint from '.'

const cli = meow(`
	Usage
	  $ version-print
`)

versionPrint()
