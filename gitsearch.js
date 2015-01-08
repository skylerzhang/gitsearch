#!/usr/bin/env node

//console.log('hello world');
//
//console.log(process.argv);

var program = require('commander');
var request = require('request');

program.version('0.0.1').usage('<keywords>').parse(process.argv);

if (!program.args.length) {
    program.help();
} else {
    var keywords = program.args;
    var url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + keywords;
}

//console.log (url);

request({
    method : 'GET',
    header : {
        'User-Agent': 'skylerzhang'
    },
    url : url

}, function(error, response, body){
    console.log(response.statusCode);
    console.log(body);
    if (!error && response.statusCode == 200){
        var body = JSON.parse(body);
        console.log(body);
    } else if (error) {
        console.log('Error: '+ error);
    }
});