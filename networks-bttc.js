const networks = [
		{
			"chainName":"BitTorrent Chain Mainnet",
			"chain": "bttc",
			"chainId": 199,
			"shortName": "bttc",
			"networkId": 199,
			"nativeCurrency":{"name":"BTT","symbol":"BTT","decimals":18},
			"rpcUrls": ["https://rpc.bittorrentchain.io"],
			"blockExplorerUrls": ["https://bttcscan.com/"],
			"contactAddress": "0xa1019535e6b364523949eaf45f4b17521c1cb074",
			"tld": ".btt", 
			"logo": "/images/cryptologo/btt.svg",
			"baseUri" : "https://app.trxdomains.xyz/api/nftdomains/metadata/",
			"visible" : true
		}
	];
	
function getObjects(obj, key, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));    
			} else 
			//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
			if (i == key && obj[i] == val || i == key && val == '') { //
				objects.push(obj);
			} else if (obj[i] == val && key == ''){
				//only add if the object is not already in the array
				if (objects.lastIndexOf(obj) == -1){
					objects.push(obj);
				}
			}
		}
		return objects;
	}

	//return an array of values that match on a certain key
	function getValues(obj, key) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getValues(obj[i], key));
			} else if (i == key) {
				objects.push(obj[i]);
			}
		}
		return objects;
	}

	//return an array of keys that match on a certain value
	function getKeys(obj, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getKeys(obj[i], val));
			} else if (obj[i] == val) {
				objects.push(i);
			}
		}
		return objects;
	}
	
	function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
				
			//alert(sPageURL);
			
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
				
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
			return "";
     };

 $.fn.EnableInsertAtCaret = function() {
		$(this).on("focus", function() {        
			$(".insertatcaretactive").removeClass("insertatcaretactive");
			$(this).addClass("insertatcaretactive");
		});
	};
	 
	 
	function InsertAtCaret(myValue) {
	 
		return $(".insertatcaretactive").each(function(i) {
			if (document.selection) {
				//For browsers like Internet Explorer
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			} else if (this.selectionStart || this.selectionStart == '0') {
				//For browsers like Firefox and Webkit based
				var startPos = this.selectionStart;
				var endPos = this.selectionEnd;
				var scrollTop = this.scrollTop;
				this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
				this.focus();
				this.selectionStart = startPos + myValue.length;
				this.selectionEnd = startPos + myValue.length;
				this.scrollTop = scrollTop;
			} else {
				this.value += myValue;
				this.focus();
			}
		})
	}