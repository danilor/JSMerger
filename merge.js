'use strict';

/**
 * EXCEL FILE CONVERSION
 */

/**
 * Simplifies the console log function
 * @param t
 */
function c( t ){
    console.log( t );
}

/**
 * Simplifies the console.log and adds a - at the beginning
 * @param t
 */
function co( t ){
    c( ' - ' + t );
}

/**
 * Simplifies the console.error command
 */
function er(t){
    console.error( t );
}

/**
 * Adds an space to the console
 */
function s(){
    c( ' ' );
}

/**
 * Adds N spaces to the console
 * @param n
 */
function sp(n = 1){
    for( let i = 0; i < n; i++ ){
        s();
    }
}

s();
c('|---------------------------------------------------------|');
c('|                                                         |');
c('|                    JS MERGER FILES                      |');
c('|                                                         |');
c('|---------------------------------------------------------|');
s();

co( 'Setting up global variables' );

const files = [
    'js/jquery.min.js',
    'js/lodash.min.js',
    'js/functions.js',
    'js/scripts.js'
];

const target = 'js/compiled.js';

co('Requiring the FS library. (FS Extra)');
const fs = require('fs-extra');

let compiled = '';

co( 'Reading files' );
for( let i = 0; i < files.length; i++ ){
    co( ' - File: ' + files[i] );
    try{
        compiled += fs.readFileSync(files[i], 'utf8');
    }catch (e) {
        er( 'File ' + files[i] + ' could not be read' );
        er( e.message );
    }
}

co( 'Writting target file' );

fs.writeFileSync(target, compiled);

co( 'Process completed' );
