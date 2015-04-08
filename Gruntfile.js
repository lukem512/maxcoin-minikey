module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combine: {
			redeem: {
				input: "./html/redeem.html",
				output: "./redeem.html",
				tokens: [
					{ token: "//cryptojs-v3-sha256.js", file: "./js/cryptojs-v3/sha256.js" },
					{ token: "//cryptojs-v3-ripemd160.js", file: "./js/cryptojs-v3/ripemd160.js" },
					{ token: "//cryptojs-v3-sha3.js", file: "./js/cryptojs-v3/sha3.js" },
					{ token: "//cryptojs-v3-lib-typedarrays.js", file: "./js/cryptojs-v3/lib-typedarrays.js" },
					{ token: "//jsrsasign-latest-all-min.js", file: "./js/jsrsasign/jsrsasign-latest-all-min.js" },
					{ token: "//cryptocoinjs-bs58.js", file: "./js/cryptocoinjs/bs58.js" },
					{ token: "//ellipticcurve.js", file: "./js/ellipticcurve.js" },
					{ token: "//bitcoinjs-lib.js", file: "./js/bitcoinjs-lib/bitcoinjs-lib.js" },
					{ token: "//bitcoinjs-lib-biginteger.js", file: "./js/bitcoinjs-lib/biginteger.js" },
					{ token: "//bitcoinjs-lib-util.js", file: "./js/bitcoinjs-lib/util.js" },
					{ token: "//bitcoinjs-lib-ecdsa.js", file: "./js/bitcoinjs-lib/ecdsa.js" },
					{ token: "//bitcoinjs-lib-address.js", file: "./js/bitcoinjs-lib/address.js" },
					{ token: "//bitcoinjs-lib-eckey.js", file: "./js/bitcoinjs-lib/eckey.js" },
					{ token: "//bootstrap.min.css", file: "./css/bootstrap.min.css" },
				]
			},
			generate: {
				input: "./html/generate.html",
				output: "./generate.html",
				tokens: [
					{ token: "//cryptojs-v3-sha256.js", file: "./js/cryptojs-v3/sha256.js" },
					{ token: "//cryptojs-v3-ripemd160.js", file: "./js/cryptojs-v3/ripemd160.js" },
					{ token: "//cryptojs-v3-sha3.js", file: "./js/cryptojs-v3/sha3.js" },
					{ token: "//cryptojs-v3-lib-typedarrays.js", file: "./js/cryptojs-v3/lib-typedarrays.js" },
					{ token: "//jsrsasign-latest-all-min.js", file: "./js/jsrsasign/jsrsasign-latest-all-min.js" },
					{ token: "//cryptocoinjs.js", file: "./js/cryptocoinjs/cryptocoin.js" },
					{ token: "//cryptocoinjs-bs58.js", file: "./js/cryptocoinjs/bs58.js" },
					{ token: "//ellipticcurve.js", file: "./js/ellipticcurve.js" },
					{ token: "//bitcoinjs-lib.js", file: "./js/bitcoinjs-lib/bitcoinjs-lib.js" },
					{ token: "//bitcoinjs-lib-biginteger.js", file: "./js/bitcoinjs-lib/biginteger.js" },
					{ token: "//bitcoinjs-lib-util.js", file: "./js/bitcoinjs-lib/util.js" },
					{ token: "//bitcoinjs-lib-ecdsa.js", file: "./js/bitcoinjs-lib/ecdsa.js" },
					{ token: "//bitcoinjs-lib-address.js", file: "./js/bitcoinjs-lib/address.js" },
					{ token: "//bitcoinjs-lib-eckey.js", file: "./js/bitcoinjs-lib/eckey.js" },
					{ token: "//bootstrap.min.css", file: "./css/bootstrap.min.css" },
				]
			}
		}
	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-combine");
	grunt.registerTask("default", ["combine:redeem", "combine:generate"]);
};
