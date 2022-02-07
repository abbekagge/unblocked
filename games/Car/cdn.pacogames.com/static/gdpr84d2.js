"use strict";function AwagonPrivacy(a){function b(){this.storage=new c,this.gui=new d,this.gameplayer=!this.isWeb();var b=null!==this.storage.getItem("session","pg_notstpage");b||this.storage.setItem("session","pg_notstpage","1"),("undefined"==typeof a||void 0===window.UserConsent)&&(window.UserConsent={required:!0,nexesarry:!1,statistics:!1,marketing:!1},a=window.UserConsent);var e=this.storage.getCookie("_asc1");if(0===e&&(e=this.storage.getItem("local","_asc1")),window.console.log("GDPR | 09.07.20 | storage availability:",this.storage.webStorageAvailability,"UserConsent:",a),!!this.gameplayer)a.required&&0===e?this.gui.privacyWindow():b?this.sendToGamePlayer(!1):this.sendToGamePlayer(!0);else if(0===e)this.storage.webStorageAvailability&&this.gui.privacyBar(a.required);else if(2===e&&this.isGamePage()){var f=this.storage.getItem("local","_ascg")+1;10<=f&&"1"===b&&(f=0,this.gui.privacyWindow()),this.storage.setItem("local","_ascg",f,20)}}function c(){this.webStorageAvailability=navigator.cookieEnabled&&function(){try{window.localStorage;return!0}catch(a){return console.log(a),!1}}()}function d(){this.cssWindowLoaded=!1;try{this.csLanguage=-1!==window.navigator.languages.indexOf("cs")}catch(a){this.csLanguage="cs"===window.navigator.language}}b.prototype.isWeb=function(){return null===document.getElementById("ga_game")},b.prototype.isGamePage=function(){return null!==document.getElementById("game-frame")},b.prototype.xhrRequest=function(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4==c.readyState&&200===c.status){if(void 0!==b)return b(null,this.response);}else if((4==c.readyState&&404===c.status||5==c.readyState)&&void 0!==b)return b(c.status,null)},c.withCredentials=!0,c.open("POST",a),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(null)},b.prototype.sendToGamePlayer=function(a){gameLoadProcessor===void 0?setTimeout(awagonPrivacy.app.sendToGamePlayer,500,a):gameLoadProcessor.asyncLoadReady({s:"PRIVACY",interactionRequired:a})},c.prototype.getCookie=function(a){if(navigator.cookieEnabled)try{for(var b,d=document.cookie.split(";"),e=0;e<d.length;e++){for(b=d[e].split("=");" "==b[0].charAt(0);)b[0]=b[0].substring(1);if(b[0]===a)return b[1]}return 0}catch(a){return console.log(a),0}else return-1},c.prototype.setItem=function(a,b,c,d){this.webStorageAvailability&&("local"===a?window.localStorage.setItem(b,c+"-"+new Date().getTime()+36e4*(24*d)):window.sessionStorage.setItem(b,c))},c.prototype.getItem=function(a,b){if("local"===a){var c=0;if(this.webStorageAvailability)if(c=window.localStorage.getItem(b),null!==c){var d=c.split("-");c=+d[1]>new Date().getTime()?+d[0]:0}else c=0;return c}return this.webStorageAvailability?window.sessionStorage.getItem(b):null},d.prototype.loadCss=function(a){var b=document.createElement("style");b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),(document.head||document.getElementsByTagName("head")[0]).appendChild(b)},d.prototype.privacyBar=function(a){var b=document.createElement("section");b.setAttribute("id","awagon_gdpr_bar");var c=document.location.hostname,d="#awagon_gdpr_bar {position:fixed;bottom:0;right:0;z-index:2;width:560px;max-width:calc(100% - 15px);font-family:\"Open Sans\",sans-serif;border-bottom-width:2px;border-bottom-style:solid;text-align:center;margin:5px;border-radius:10px;background-color:rgba(31,31,31,0.91);box-shadow:rgb(21,21,21) 0px 0px 8px 2px;border-color:#d29806} .awagon_gdpr_btn_bar {opacity:0.85;cursor:pointer;border:0;font-family:\"Open Sans\",sans-serif;height:40px} .awagon_gdpr_btn_bar:hover {opacity:1} ";-1<c.indexOf("pacogames.com")?d+=".awagon_gdpr_brand_btn {background-color: rgb(255,183,0);color:black} .awagon_gdpr_brand_sbj {color: #ffb700;} ":-1<c.indexOf("games44.com")&&(d+="#awagon_gdpr_bar {border-color:#6b913a} ",d+=".awagon_gdpr_brand_btn {background-color:#78a83b;color:#fff} .awagon_gdpr_brand_sbj {color: #78a83b} "),this.loadCss(d),this.isMobile="m.pacogames.com"===c||"m1.pacogames.com"===c,console.log("Awagon privacy: ","EU:",a,c);var e="",f={p:a?"<span class=\"awagon_gdpr_brand_sbj\"><strong>Privacy Policy:</strong></span> Do you agree to share data for improvements and monetization purposes?":"We use cookies to ensure you get the best experience on our website.</span>",b:"More",a:a?"Approve":"Got it!"};this.csLanguage&&(f={p:"<span class=\"awagon_gdpr_brand_sbj\"><strong>Vy\u017Eadovan\xE1 akce:</strong></span> Schv\xE1len\xED podm\xEDnkek pr\xE1ce s osobn\xEDmi \xFAdaji.",b:"V\xEDce.",a:"Schv\xE1lit"}),e="<p style=\"color:#a8a8a8;margin: 15px 5px 5px;font-size:16px;display:inline-block;line-height:25px;\">"+f.p+"</p>",e+=a?"<button name=\"privacy_settings\" class=\"awagon_gdpr_btn_bar\" style=\"width:33%;background-color:unset;color:white;\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\">"+f.b+"</button>":"<a href=\"https://cookiesandyou.com\" target=\"_blank\" rel=\"nofollow noopener\" style=\"margin:0 20px 0 -15px\">"+f.b+"</a>",e+="<button name=\"agree\" class=\"awagon_gdpr_btn_bar awagon_gdpr_brand_btn\" style=\"width:66%;font-weight:700;\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\">"+f.a+"</button>",b.innerHTML=e,(document.body||document.getElementsByTagName("body")[0]).appendChild(b)},d.prototype.privacyWindow=function(){if(!this.cssWindowLoaded){this.cssWindowLoaded=!0;this.loadCss(".awagon_gdpr_btn {height:47px;border:0;opacity:.8;font-family:'Open Sans',sans-serif;opacity:0.85;font-size:14px;cursor:pointer;margin-right:15px} .awagon_gdpr_btn:hover {opacity:1}")}var a=document.getElementById("awagon_gdpr_box");if(null===a){a=document.createElement("section"),a.setAttribute("id","awagon_gdpr_box"),a.setAttribute("style","position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);z-index:2147483640"),document.getElementsByTagName("body")[0].appendChild(a);var b={pUpdate:"Privacy policy",text:"Authorization of giving us the consent is conditioned by minimum age of 13. If You you are younger, ask your parents for giving us the consent or select option \"ask later\". We will add more options for consents soon.",agree:"I agree",notAgree:"I do not agree",later:"ask later",more:"More privacy oprions.",back:"Back."};this.csLanguage&&(b={pUpdate:"Aktualizace podm\xEDnek ochrany osobn\xEDch \xFAdaj\u016F",text:"Souhlas m\u016F\u017Ee ud\u011Blit pouze osoba star\u0161\xED 13 let. Pokud jste mlad\u0161\xED, po\u017E\xE1dejte o ud\u011Blen\xED souhlasu z\xE1konn\xE9ho z\xE1stupce nebo zvolte mo\u017Enost \"Odlo\u017Eit\". Awagon brzy p\u0159id\xE1 nov\xE9 mo\u017Enosti souhlasu.",agree:"Souhlas\xEDm",notAgree:"Nesouhlas\xEDm",later:"Odlo\u017Eit",more:"Dal\u0161\xED mo\u017Enosti.",back:"Zp\u011Bt."});var c="<div style=\"position:absolute;max-height:558px;max-width:614px;background-color:#131313;color:#e8e8e8;top:0;left:0;right:0;bottom:0;margin:auto;\"><img name=\"awagon_gdpr_close-box\" alt=\"Close GDPR panel\" style=\"float:right;height:16px;width:16px;position:relative;top:10px;cursor:pointer;\" src=\"https://data.pacogames.com/static/gdpr/cancel.svg\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\"><h2 style=\"font-size:25px;color:#bbbbbb;text-align:center;margin-top:35px;\">"+b.pUpdate+"</h2><div id=\"awagon_gdpr_info\" style=\"height:calc(100% - 225px);overflow-y:auto;margin:36px 43px 32px 43px;\"><p style=\"font-size:14px;margin:0 5px 20px 0;text-align:justify;\">";if(c+=this.csLanguage?"Awagon Entertainment s.r.o. (d\xE1le jako Awagon), provozovatel port\xE1lu PacoGames.com, pou\u017E\xEDv\xE1 z\xE1kladn\xED u\u017Eivatelsk\xE1 data v souladu se z\xE1konem. Vyu\u017E\xEDv\xE1n\xED osobn\xEDch \xFAdaj\u016F je podm\xEDn\u011Bno u\u017Eivatelsk\xFDm souhlasem. Projd\u011Bte si pln\xE9 zn\u011Bn\xED <a target=\"_blank\" style=\"color: #a8a8a8;\" href=\"https://www.pacogames.com/privacy-policy\">Ochrany soukrom\xED.</a><br><br> Awagon se sna\u017E\xED u\u017Eivatel\u016Fm p\u0159in\xE1\u0161et kvalitn\xED hry i web. Pou\u017E\xEDv\xE1n\xED na\u0161ich produkt\u016F je zdarma, monetizov\xE1no pomoc\xED reklam. Data u\u017Eivatel\u016F nikdy neprod\xE1v\xE1me. Obecn\u011B zobrazujeme nepersonalizovanou reklamu. Awagon umo\u017E\u0148uje a \u017E\xE1d\xE1 o mo\u017Enost nahrazen\xED tohotot typu reklam za personalizovan\xE9, c\xEDlen\xE9 na z\xE1klad\u011B preferenc\xED u\u017Eivatele. Povolen\xED lze prov\xE9st pomoc\xED stisknut\xED tla\u010D\xEDtka souhlasu a p\u0159in\xE1\u0161\xED n\xE1sleduj\xEDc\xED v\xFDhody:</p>\t<ul style=\"text-align:justify;margin:7px 30px 2px 0;\"><li>Zaj\xEDmav\u011Bj\u0161\xED reklamn\xED sd\u011Blen\xED pro u\u017Eivatele. Uvid\xEDte reklamy na produkty, kter\xE9 by v\xE1s mohly zaj\xEDmat na z\xE1klad\u011B Va\u0161ich z\xE1jm\u016F z\xEDskan\xFDch na z\xE1klad\u011B nav\u0161t\u011Bvovan\xFDch str\xE1nek.</li>\t<li>Podpo\u0159\xEDte Awagon. S povolen\xEDm personalizovan\xFDch reklam Awagon bude schopen dos\xE1hnout lep\u0161\xED monetizace webu. V\xFDsledkem bude zvy\u0161uj\xEDc\xED se kvalita her, web\u016F a slu\u017Eeb poskytovan\xFDch spole\u010Dnost\xED Awagon.</li>\t<li>V p\u0159\xEDpad\u011B zm\u011Bny n\xE1zoru m\u016F\u017Eete vz\xEDt sv\u016Fj souhlas kdykoliv zp\u011Bt.</li></ul>":"Awagon Entertainment s.r.o. (further as Awagon), operator of PacoGames.com, uses user data on basis of legal matters and permissions provided by users. Please, check full <a target=\"_blank\" style=\"color:#a8a8a8;\" href=\"https://www.pacogames.com/privacy-policy\">Privacy policy</a> specification.<br><br> Awagon is trying to bring the best games and user engagement for visitors of its websites. Using of our products is free, monetised by ads near or in the content. We never sell any user data. In general, we display non-personalised ads. Awagon allow and ask you for possibility to replace non-personalised ads for personalised ads targeted for users on basis of their need and preferencies. This permission can be granted over this form and brings following advantages:</p>\t<ul style=\"text-align:justify;margin:7px 30px 2px 0;\"><li>More interesting advertising. You will see ads for products you need, want, or which could be interesting for you. Maybe you will find things you did not even know that you want.</li>\t<li>Higher support of Awagon. With enabled personalised ads, Awagon will be probably able to earn more money for its running. The result of it will be in increasing quality of web and games produced by Awagon and all developers in GameArter.</li>\t<li>If you change your decision, you will be able to take it back anytime you want.</li></ul>",c+="<p style=\"font-size:14px;margin:0 5px 20px 0;text-align:justify;padding-top:15px;\">"+b.text+"</p></div>",c+="<div id=\"awagon_gdpr_action_btns\" style=\"text-align:center;margin:20px 43px 32px 43px;\"><button name=\"agree\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\" class=\"awagon_gdpr_btn\" style=\"background-color:#ffb700;color:black;font-weight:800;width:90%;margin-right:0\">"+b.agree+"</button><span name=\"more-options\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\" style=\"margin-top:8px;display:block;font-size:12px;cursor:pointer;\">"+b.more+"</span></div>",c+="<div id=\"awagon_gdpr_action_back\" style=\"text-align:center;margin-top:20px;display:none;\"><button name=\"go-back\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\" class=\"awagon_gdpr_btn\" style=\"color:#ffb700;background-color:#5f5d5d40;width:90px\">"+b.back+"</button><button name=\"donot-agree\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\" class=\"awagon_gdpr_btn\" style=\"background-color:#5f5d5d40;color:#ffffff;width:110px\">"+b.notAgree+"</button><button name=\"remain-later\" onclick=\"awagonPrivacy.clickListener(this)\" ontouchstart=\"awagonPrivacy.clickListener(this)\" class=\"awagon_gdpr_btn\" style=\"background-color:#5f5d5d40;color:#ffffff;width:90px\">"+b.later+"</button></div>",c+="</div>",a.innerHTML=c,this.isMobile){document.getElementById("awagon_gdpr_info").style.margin="20px 13px 20px 13px";var d=document.getElementById("awagon_gdpr_action_back");null!==d&&(d.style.marginLeft=0,d.style.marginRight=0)}}else a.style.display="block"},this.app=new b}AwagonPrivacy.prototype.clickListener=function(a){console.log("clickListener:",a);try{this.app.gameplayer||ga("send","event","consent-click",a.getAttribute("name"))}catch(a){console.log(a)}switch(a.getAttribute("name")){case"privacy_settings":this.app.gui.privacyWindow();break;case"awagon_gdpr_close-bar":document.getElementById("awagon_gdpr_bar").style.display="none";break;case"awagon_gdpr_close-box":document.getElementById("awagon_gdpr_box").style.display="none",this.app.gameplayer&&this.app.sendToGamePlayer(!1);break;case"remain-later":document.getElementById("awagon_gdpr_box").style.display="none";try{this.app.storage.setItem("local","_asc1",2,5)}catch(a){console.error(a)}this.app.gameplayer?this.app.sendToGamePlayer(!1):document.getElementById("awagon_gdpr_bar").style.display="none";break;case"agree":var b=document.getElementById("awagon_gdpr_box");if(null!==b&&(b.style.display="none"),-1===document.location.hostname.indexOf("games44"))this.app.xhrRequest("https://auth.gamearter.com/consent/remote",function(a,b){console.log(a,b)}),this.app.xhrRequest("https://api.pacogames.com/consent",function(a,b){console.log(a,b)});else try{this.app.storage.setItem("local","_asc1",1,360)}catch(a){console.error(a)}try{window.UserConsent.nexesarry=!0,window.UserConsent.statistics=!0,window.UserConsent.marketing=!0}catch(a){console.error(a)}if(this.app.gameplayer){this.app.sendToGamePlayer(!1);try{null!==window.parent.document.getElementById("awagon_gdpr_bar")&&(window.parent.document.getElementById("awagon_gdpr_bar").style.display="none")}catch(a){}}else document.getElementById("awagon_gdpr_bar").style.display="none";break;case"more-options":document.getElementById("awagon_gdpr_action_btns").style.display="none",document.getElementById("awagon_gdpr_action_back").style.display="block";break;case"go-back":document.getElementById("awagon_gdpr_action_btns").style.display="block",document.getElementById("awagon_gdpr_action_back").style.display="none";break;case"donot-agree":document.getElementById("awagon_gdpr_box").style.display="none";try{this.app.storage.setItem("local","_asc1",3,60)}catch(a){console.error(a)}this.app.gameplayer?this.app.sendToGamePlayer(!1):document.getElementById("awagon_gdpr_bar").style.display="none";break;default:console.log("unknown attr name: ",a);}};var awagonPrivacy=new AwagonPrivacy(window.UserConsent);