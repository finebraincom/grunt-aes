grunt-aes
=========

Grunt task for encryprion/decryption with AES elgorythm


module.exports = function(grunt) {

     grunt.initConfig({
        encrypt : {
            'secret' : {
                src : '<src/file>',
                dest : '<dest/encrypted/file>',
                key : '<encryptionKey>',
                nBits : <number of encryption bits>
            },
        },
        decrypt : {
            'secret' : {
                src : '<src/encrypted/file>',
                dest : '<dest/decrypted/file>',
                key : '<encryptionKey>',
                nBits : <number of encryption bits>
            },
            //...
        }
    });
}
