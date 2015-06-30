var saltDefault = 'hublimiaLveoKAisNgRM';

function encode(){
	var salt = document.getElementById('salt-input').value;
	//var length = document.getElementById('hash-length').value;
	var val = parseInt(document.getElementById('value-input').value);
	var toEncode = document.getElementById('timestamp-checkbox').checked ? [new Date().getTime(), val] : val;
	//hashids = new Hashids(salt, length);
	hashids = new Hashids(salt);
	var id = hashids.encode(toEncode);
	document.getElementById('encode-result').innerHTML = "encoded " + toEncode + " to <span id='id'>" + id + "</span>";	
	console.log(toEncode, id);
}

function decode(){
	var salt = document.getElementById('decode-salt-input').value;
	var hash = document.getElementById('hashid-input').value;
	hashids = new Hashids(salt);
	var numbers = hashids.decode(hash);
	document.getElementById('decode-result').innerHTML = "decoded " + hash + " to <span id='id'>" + numbers + "</span>";	
	console.log(hash, numbers);
}

function setDefaultSalt(){
	var useDefaultSalt = document.getElementById('default-salt-checkbox').checked;
	if(useDefaultSalt){
		document.getElementById('salt-input').value = saltDefault;
	}else{
		document.getElementById('salt-input').value = '';
	}
}

function setDecodeDefaultSalt(){
	var useDefaultSalt = document.getElementById('decode-default-salt-checkbox').checked;
	if(useDefaultSalt){
		document.getElementById('decode-salt-input').value = saltDefault;
	}else{
		document.getElementById('decode-salt-input').value = '';
	}
}

document.getElementById('default-salt-checkbox').addEventListener('change', setDefaultSalt, false);
document.getElementById('decode-default-salt-checkbox').addEventListener('change', setDecodeDefaultSalt, false);
document.getElementById('encode-button').addEventListener('click', encode, false);
document.getElementById('decode-button').addEventListener('click', decode, false);