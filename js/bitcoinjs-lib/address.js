//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/address.js
Bitcoin.Address = function (bytes) {
	if ("string" == typeof bytes) {
		bytes = Bitcoin.Address.decodeString(bytes);
	}
	this.hash = bytes;
	this.version = Bitcoin.Address.networkVersion;
};

Bitcoin.Address.networkVersion = 110; // MaxCoin: 'm'

/**
* Serialize this object as a standard Bitcoin address.
*
* Returns the address as a base58-encoded string in the standardized format.
*/
Bitcoin.Address.prototype.toString = function () {
	// MaxCoin: verbose due to rewrite
	// The conversion is due to having to upgrade to latest CryptoJS for SHA3

	var waVersion = CryptoJS.enc.Hex.parse('6e'); // 0x6e == 110

	var waHash = CryptoJS.enc.Hex.parse(bytes_to_hex_string(this.hash));

	var waHash = waVersion.concat(waHash);

	var waLongChecksum = hash_keccak(waHash);
	var waChecksum = CryptoJS.lib.WordArray.create(waLongChecksum.words.slice(0, 4), 4);

	var waBytes = waHash.concat(waChecksum);

	var bytes = wordArrayToByteArray(waBytes);

	return bs58_encode(bytes);
};

Bitcoin.Address.prototype.getHashBase64 = function () {
	return Crypto.util.bytesToBase64(this.hash);
};

/**
* Parse a Bitcoin address contained in a string.
*/
Bitcoin.Address.decodeString = function (string) {
	var bytes = bs58_decode(string);
	var hash = bytes.slice(0, 21);
	var waChecksum = hash_keccak(hash);

	var checksum = wordArrayToByteArray(waChecksum);

	if (checksum[0] != bytes[21] ||
			checksum[1] != bytes[22] ||
			checksum[2] != bytes[23] ||
			checksum[3] != bytes[24]) {
		throw "Checksum validation failed!";
	}

	var version = hash.shift();

	if (version != Bitcoin.Address.networkVersion) {
		throw "Version " + version + " not supported!";
	}

	return hash;
};
