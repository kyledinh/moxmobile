#!/bin/bash

keytool -genkey -v -keystore moxmobile.keystore -alias moxmobile-alias -keyalg RSA -keysize 2048 -validity 10000
