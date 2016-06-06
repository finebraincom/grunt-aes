'use strict';

var aes = require("./aes/aes-ctr");
// require("./aes/aes-ctr");

module.exports = function(grunt) {

    grunt.registerMultiTask(
        'encrypt',
        'Encrypt file content with AES algorythm',
        function(){
            var config = grunt.config.get("encrypt"),
                cfg = config[this.target],
                data = grunt.file.read(cfg.src);
            if(grunt.file.exists(cfg.dest)){
                // check that file content changed
                var oldEncryptedData = grunt.file.read(cfg.dest);
                var oldDecrypted = aes.decrypt(oldEncryptedData, cfg.key, cfg.nBits);
                if(oldDecrypted === data){
                    grunt.log.ok('Data for encryption is not changed. File skipped: ' + cfg.src);
                    return;
                }
            }
            var encrypted = aes.encrypt(data, cfg.key, cfg.nBits);
            grunt.file.write(cfg.dest,  encrypted);
            grunt.log.ok('encrypted file: ' + cfg.dest);
        }
    );

    grunt.registerMultiTask(
        'decrypt',
        'Decrypt file content with AES algorythm',
        function(){
            var config = grunt.config.get("decrypt"),
                cfg = config[this.target],
                data = grunt.file.read(cfg.src);
            var decrypted = aes.decrypt(data, cfg.key, cfg.nBits);
            grunt.file.write(cfg.dest,  decrypted);
            grunt.log.ok('decrypted file: ' + cfg.dest);
        }
    );
};