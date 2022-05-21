const e=document.getElementById("audio");var t=VoiceRSS={speech(e){this._validate(e),this._request(e)},_validate(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){let t=!1;switch(e.c.toLowerCase()){case"mp3":t=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":t=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":t=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":t=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":t=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!t)throw`The browser does not support the audio codec ${e.c}`}},_request(t){const a=this._buildRequest(t),c=this._getXHR();c.onreadystatechange=function(){if(4==c.readyState&&200==c.status){if(0==c.responseText.indexOf("ERROR"))throw c.responseText;let t=c.responseText;e.src=t,e.onloadedmetadata=()=>{e.play()}}},c.open("POST","https://api.voicerss.org/",!0),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),c.send(a)},_buildRequest(e){const t=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return`key=${e.key||""}&src=${e.src||""}&hl=${e.hl||""}&r=${e.r||""}&c=${t||""}&f=${e.f||""}&ssml=${e.ssml||""}&b64=true`},_detectCodec(){const e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};const a=document.getElementById("button"),c=document.getElementById("audio");function o(){a.disabled=!a.disabled}a.addEventListener("click",(async function(){let e="";try{const a=await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky"),c=await a.json();e=c.setup?`${c.setup} ... ${c.delivery}`:c.joke,function(e){const a=e.trim().replace(/ /g,"%20");t.speech({key:"93d20da9af8940d4996fa1fc7cba40a3",src:a,hl:"en-us",r:0,c:"mp3",f:"44khz_16bit_stereo",ssml:!1})}(e),o()}catch(e){console.log(`${e.message}☄️☄️☄️`)}})),c.addEventListener("ended",o);
//# sourceMappingURL=index.f0d68420.js.map