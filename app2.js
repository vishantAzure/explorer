var express = require('express')
    , path = require('path')
    , favicon = require('static-favicon')
    , logger = require('morgan')
    , cron = require('node-cron')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , request = require('request')

const { execFile } = require('child_process');
const child = execFile('bash', ['./script.sh'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});