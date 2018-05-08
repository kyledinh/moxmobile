#!/bin/bash

atom ./
open ./
open /Applications/React\ Native\ Debugger.app


osascript -e 'tell application "Terminal" to activate'
	-e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'

react-native start --reset-cache
