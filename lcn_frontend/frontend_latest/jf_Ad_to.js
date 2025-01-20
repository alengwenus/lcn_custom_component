/*! For license information please see jf_Ad_to.js.LICENSE.txt */
export const id=538;export const ids=[538];export const modules={8076:(e,t,i)=>{i.r(t),i.d(t,{mdiHomeAssistant:()=>a});const a="m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864"},1538:(e,t,i)=>{i.r(t),i.d(t,{LCNEntitiesPage:()=>Pe});var a=i(2659),n=i(9534),s=i(6349),r=i(9182),o=i(4671),d=i(3799),l=i(8597),c=i(9278),h=i(196);const u=e=>e.substr(0,e.indexOf("."));i(5989);var f=i(5081),v=i(7905),p=i(9760);(0,a.A)([(0,h.EM)("ha-config-section")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,h.MZ)({type:Boolean})],key:"isWide",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean})],key:"vertical",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean,attribute:"full-width"})],key:"fullWidth",value(){return!1}},{kind:"method",key:"render",value:function(){return l.qy`
      <div
        class="content ${(0,p.H)({narrow:!this.isWide,"full-width":this.fullWidth})}"
      >
        <div class="header"><slot name="header"></slot></div>
        <div
          class="together layout ${(0,p.H)({narrow:!this.isWide,vertical:this.vertical||!this.isWide,horizontal:!this.vertical&&this.isWide})}"
        >
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`
      :host {
        display: block;
      }
      .content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
      }

      .layout {
        display: flex;
      }

      .horizontal {
        flex-direction: row;
      }

      .vertical {
        flex-direction: column;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }

      .together {
        margin-top: 32px;
      }

      .intro {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        width: 100%;
        opacity: var(--dark-primary-opacity);
        font-size: 14px;
        padding-bottom: 20px;
      }

      .horizontal .intro {
        max-width: 400px;
        margin-right: 40px;
        margin-inline-end: 40px;
        margin-inline-start: initial;
      }

      .panel {
        margin-top: -24px;
      }

      .panel ::slotted(*) {
        margin-top: 24px;
        display: block;
      }

      .narrow.content {
        max-width: 640px;
      }
      .narrow .together {
        margin-top: 20px;
      }
      .narrow .intro {
        padding-bottom: 20px;
        margin-right: 0;
        margin-inline-end: 0;
        margin-inline-start: initial;
        max-width: 500px;
      }

      .full-width {
        padding: 0;
      }

      .full-width .layout {
        flex-direction: column;
      }
    `}}]}}),l.WF);i(9222);var m=i(3167),y=i(1355);const C=window;"customIconsets"in C||(C.customIconsets={});const b=C.customIconsets,g=window;"customIcons"in g||(g.customIcons={});const _=new Proxy(g.customIcons,{get:(e,t)=>{var i;return null!==(i=e[t])&&void 0!==i?i:b[t]?{getIcon:b[t]}:void 0}});function k(e){return new Promise(((t,i)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>i(e.error)}))}function A(e,t){const i=indexedDB.open(e);i.onupgradeneeded=()=>i.result.createObjectStore(t);const a=k(i);return(e,i)=>a.then((a=>i(a.transaction(t,e).objectStore(t))))}let H;function M(){return H||(H=A("keyval-store","keyval")),H}function V(e,t,i=M()){return i("readwrite",(i=>(i.put(t,e),k(i.transaction))))}const x=JSON.parse('{"version":"7.4.47","parts":[{"file":"7a7139d465f1f41cb26ab851a17caa21a9331234"},{"start":"account-supervisor-circle-","file":"9561286c4c1021d46b9006596812178190a7cc1c"},{"start":"alpha-r-c","file":"eb466b7087fb2b4d23376ea9bc86693c45c500fa"},{"start":"arrow-decision-o","file":"4b3c01b7e0723b702940c5ac46fb9e555646972b"},{"start":"baby-f","file":"2611401d85450b95ab448ad1d02c1a432b409ed2"},{"start":"battery-hi","file":"89bcd31855b34cd9d31ac693fb073277e74f1f6a"},{"start":"blur-r","file":"373709cd5d7e688c2addc9a6c5d26c2d57c02c48"},{"start":"briefcase-account-","file":"a75956cf812ee90ee4f656274426aafac81e1053"},{"start":"calendar-question-","file":"3253f2529b5ebdd110b411917bacfacb5b7063e6"},{"start":"car-lig","file":"74566af3501ad6ae58ad13a8b6921b3cc2ef879d"},{"start":"cellphone-co","file":"7677f1cfb2dd4f5562a2aa6d3ae43a2e6997b21a"},{"start":"circle-slice-2","file":"70d08c50ec4522dd75d11338db57846588263ee2"},{"start":"cloud-co","file":"141d2bfa55ca4c83f4bae2812a5da59a84fec4ff"},{"start":"cog-s","file":"5a640365f8e47c609005d5e098e0e8104286d120"},{"start":"cookie-l","file":"dd85b8eb8581b176d3acf75d1bd82e61ca1ba2fc"},{"start":"currency-eur-","file":"15362279f4ebfc3620ae55f79d2830ad86d5213e"},{"start":"delete-o","file":"239434ab8df61237277d7599ebe066c55806c274"},{"start":"draw-","file":"5605918a592070803ba2ad05a5aba06263da0d70"},{"start":"emoticon-po","file":"a838cfcec34323946237a9f18e66945f55260f78"},{"start":"fan","file":"effd56103b37a8c7f332e22de8e4d67a69b70db7"},{"start":"file-question-","file":"b2424b50bd465ae192593f1c3d086c5eec893af8"},{"start":"flask-off-","file":"3b76295cde006a18f0301dd98eed8c57e1d5a425"},{"start":"food-s","file":"1c6941474cbeb1755faaaf5771440577f4f1f9c6"},{"start":"gamepad-u","file":"c6efe18db6bc9654ae3540c7dee83218a5450263"},{"start":"google-f","file":"df341afe6ad4437457cf188499cb8d2df8ac7b9e"},{"start":"head-c","file":"282121c9e45ed67f033edcc1eafd279334c00f46"},{"start":"home-pl","file":"27e8e38fc7adcacf2a210802f27d841b49c8c508"},{"start":"inbox-","file":"0f0316ec7b1b7f7ce3eaabce26c9ef619b5a1694"},{"start":"key-v","file":"ea33462be7b953ff1eafc5dac2d166b210685a60"},{"start":"leaf-circle-","file":"33db9bbd66ce48a2db3e987fdbd37fb0482145a4"},{"start":"lock-p","file":"b89e27ed39e9d10c44259362a4b57f3c579d3ec8"},{"start":"message-s","file":"7b5ab5a5cadbe06e3113ec148f044aa701eac53a"},{"start":"moti","file":"01024d78c248d36805b565e343dd98033cc3bcaf"},{"start":"newspaper-variant-o","file":"22a6ec4a4fdd0a7c0acaf805f6127b38723c9189"},{"start":"on","file":"c73d55b412f394e64632e2011a59aa05e5a1f50d"},{"start":"paw-ou","file":"3f669bf26d16752dc4a9ea349492df93a13dcfbf"},{"start":"pigg","file":"0c24edb27eb1c90b6e33fc05f34ef3118fa94256"},{"start":"printer-pos-sy","file":"41a55cda866f90b99a64395c3bb18c14983dcf0a"},{"start":"read","file":"c7ed91552a3a64c9be88c85e807404cf705b7edf"},{"start":"robot-vacuum-variant-o","file":"917d2a35d7268c0ea9ad9ecab2778060e19d90e0"},{"start":"sees","file":"6e82d9861d8fac30102bafa212021b819f303bdb"},{"start":"shoe-f","file":"e2fe7ce02b5472301418cc90a0e631f187b9f238"},{"start":"snowflake-m","file":"a28ba9f5309090c8b49a27ca20ff582a944f6e71"},{"start":"st","file":"7e92d03f095ec27e137b708b879dfd273bd735ab"},{"start":"su","file":"61c74913720f9de59a379bdca37f1d2f0dc1f9db"},{"start":"tag-plus-","file":"8f3184156a4f38549cf4c4fffba73a6a941166ae"},{"start":"timer-a","file":"baab470d11cfb3a3cd3b063ee6503a77d12a80d0"},{"start":"transit-d","file":"8561c0d9b1ac03fab360fd8fe9729c96e8693239"},{"start":"vector-arrange-b","file":"c9a3439257d4bab33d3355f1f2e11842e8171141"},{"start":"water-ou","file":"02dbccfb8ca35f39b99f5a085b095fc1275005a0"},{"start":"webc","file":"57bafd4b97341f4f2ac20a609d023719f23a619c"},{"start":"zip","file":"65ae094e8263236fa50486584a08c03497a38d93"}]}'),$=(0,f.A)((async()=>{const e=A("hass-icon-db","mdi-icon-store");{const t=await function(e,t=M()){return t("readonly",(t=>k(t.get(e))))}("_version",e);t?t!==x.version&&(await function(e=M()){return e("readwrite",(e=>(e.clear(),k(e.transaction))))}(e),V("_version",x.version,e)):V("_version",x.version,e)}return e})),w=["mdi","hass","hassio","hademo"];let L=[];const Z=e=>new Promise(((t,i)=>{if(L.push([e,t,i]),L.length>1)return;const a=$();((e,t)=>{const i=new Promise(((t,i)=>{setTimeout((()=>{i(`Timed out in ${e} ms.`)}),e)}));return Promise.race([t,i])})(1e3,(async()=>{(await a)("readonly",(e=>{for(const[t,i,a]of L)k(e.get(t)).then((e=>i(e))).catch((e=>a(e)));L=[]}))})()).catch((e=>{for(const[,,t]of L)t(e);L=[]}))})),q={},E={},F=(0,y.s)((()=>(async e=>{const t=Object.keys(e),i=await Promise.all(Object.values(e));(await $())("readwrite",(a=>{i.forEach(((i,n)=>{Object.entries(i).forEach((([e,t])=>{a.put(t,e)})),delete e[t[n]]}))}))})(E)),2e3),S={};(0,a.A)([(0,h.EM)("ha-icon")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,h.MZ)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_path",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_secondaryPath",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_legacy",value(){return!1}},{kind:"method",key:"willUpdate",value:function(e){(0,n.A)(a,"willUpdate",this,3)([e]),e.has("icon")&&(this._path=void 0,this._secondaryPath=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?l.qy`<!-- @ts-ignore we don't provice the iron-icon element -->
        <iron-icon .icon=${this.icon}></iron-icon>`:l.qy`<ha-svg-icon
      .path=${this._path}
      .secondaryPath=${this._secondaryPath}
      .viewBox=${this._viewBox}
    ></ha-svg-icon>`:l.s6}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const e=this.icon,[t,a]=this.icon.split(":",2);let n,s=a;if(!t||!s)return;if(!w.includes(t)){const i=_[t];return i?void(i&&"function"==typeof i.getIcon&&this._setCustomPath(i.getIcon(s),e)):void(this._legacy=!0)}if(this._legacy=!1,s in q){const e=q[s];let i;e.newName?(i=`Icon ${t}:${s} was renamed to ${t}:${e.newName}, please change your config, it will be removed in version ${e.removeIn}.`,s=e.newName):i=`Icon ${t}:${s} was removed from MDI, please replace this icon with an other icon in your config, it will be removed in version ${e.removeIn}.`,console.warn(i),(0,m.r)(this,"write_log",{level:"warning",message:i})}if(s in S)return void(this._path=S[s]);if("home-assistant"===s){const t=(await Promise.resolve().then(i.bind(i,8076))).mdiHomeAssistant;return this.icon===e&&(this._path=t),void(S[s]=t)}try{n=await Z(s)}catch(d){n=void 0}if(n)return this.icon===e&&(this._path=n),void(S[s]=n);const r=(e=>{let t;for(const i of x.parts){if(void 0!==i.start&&e<i.start)break;t=i}return t.file})(s);if(r in E)return void this._setPath(E[r],s,e);const o=fetch(`/static/mdi/${r}.json`).then((e=>e.json()));E[r]=o,this._setPath(o,s,e),F()}},{kind:"method",key:"_setCustomPath",value:async function(e,t){const i=await e;this.icon===t&&(this._path=i.path,this._secondaryPath=i.secondaryPath,this._viewBox=i.viewBox)}},{kind:"method",key:"_setPath",value:async function(e,t,i){const a=await e;this.icon===i&&(this._path=a[t]),S[t]=a[t]}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`
      :host {
        fill: currentcolor;
      }
    `}}]}}),l.WF);i(6396);var z=i(4078),I=i(3982),P=i(3267);class O{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class R{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}var N=i(2154);const j=e=>!(0,I.sO)(e)&&"function"==typeof e.then,B=1073741823;class W extends P.Kq{constructor(){super(...arguments),this._$C_t=B,this._$Cwt=[],this._$Cq=new O(this),this._$CK=new R}render(...e){var t;return null!==(t=e.find((e=>!j(e))))&&void 0!==t?t:z.c0}update(e,t){const i=this._$Cwt;let a=i.length;this._$Cwt=t;const n=this._$Cq,s=this._$CK;this.isConnected||this.disconnected();for(let r=0;r<t.length&&!(r>this._$C_t);r++){const e=t[r];if(!j(e))return this._$C_t=r,e;r<a&&e===i[r]||(this._$C_t=B,a=0,Promise.resolve(e).then((async t=>{for(;s.get();)await s.get();const i=n.deref();if(void 0!==i){const a=i._$Cwt.indexOf(e);a>-1&&a<i._$C_t&&(i._$C_t=a,i.setValue(t))}})))}return z.c0}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const T=(0,N.u$)(W);var U=i(8076);const D="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",G="M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",K="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",Y="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",J="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z",Q="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",X="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z",ee="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20Z",te="M2,11H9.17C9.58,9.83 10.69,9 12,9C13.31,9 14.42,9.83 14.83,11H22V13H14.83C14.42,14.17 13.31,15 12,15C10.69,15 9.58,14.17 9.17,13H2V11Z",ie="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z",ae={air_quality:G,alert:"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",automation:"M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z",calendar:Y,climate:"M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",configurator:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",conversation:"M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z",counter:"M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z",date:Y,datetime:J,demo:U.mdiHomeAssistant,device_tracker:D,google_assistant:"M7,2A6,6 0 0,0 1,8A6,6 0 0,0 7,14A6,6 0 0,0 13,8A6,6 0 0,0 7,2M21.5,6A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 21.5,9A1.5,1.5 0 0,0 23,7.5A1.5,1.5 0 0,0 21.5,6M17,8A3,3 0 0,0 14,11A3,3 0 0,0 17,14A3,3 0 0,0 20,11A3,3 0 0,0 17,8M17,15A3.5,3.5 0 0,0 13.5,18.5A3.5,3.5 0 0,0 17,22A3.5,3.5 0 0,0 20.5,18.5A3.5,3.5 0 0,0 17,15Z",group:"M15,12C13.89,12 13,12.89 13,14A2,2 0 0,0 15,16A2,2 0 0,0 17,14C17,12.89 16.1,12 15,12M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M14,9C14,7.89 13.1,7 12,7C10.89,7 10,7.89 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9M9,12A2,2 0 0,0 7,14A2,2 0 0,0 9,16A2,2 0 0,0 11,14C11,12.89 10.1,12 9,12Z",homeassistant:U.mdiHomeAssistant,homekit:"M12,3L2,12H5V20H19V12H22L12,3M12,8.5C14.34,8.5 16.46,9.43 18,10.94L16.8,12.12C15.58,10.91 13.88,10.17 12,10.17C10.12,10.17 8.42,10.91 7.2,12.12L6,10.94C7.54,9.43 9.66,8.5 12,8.5M12,11.83C13.4,11.83 14.67,12.39 15.6,13.3L14.4,14.47C13.79,13.87 12.94,13.5 12,13.5C11.06,13.5 10.21,13.87 9.6,14.47L8.4,13.3C9.33,12.39 10.6,11.83 12,11.83M12,15.17C12.94,15.17 13.7,15.91 13.7,16.83C13.7,17.75 12.94,18.5 12,18.5C11.06,18.5 10.3,17.75 10.3,16.83C10.3,15.91 11.06,15.17 12,15.17Z",image_processing:"M18,8H6V18H18M20,20H4V6H8.5L12.04,2.5L15.5,6H20M20,4H16L12,0L8,4H4A2,2 0 0,0 2,6V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V6A2,2 0 0,0 20,4Z",image:"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",input_boolean:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z",input_button:"M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z",input_datetime:J,input_number:te,input_select:X,input_text:ee,lawn_mower:"M1 14V5H13C18.5 5 23 9.5 23 15V17H20.83C20.42 18.17 19.31 19 18 19C16.69 19 15.58 18.17 15.17 17H10C9.09 18.21 7.64 19 6 19C3.24 19 1 16.76 1 14M6 11C4.34 11 3 12.34 3 14C3 15.66 4.34 17 6 17C7.66 17 9 15.66 9 14C9 12.34 7.66 11 6 11M15 10V12H20.25C19.92 11.27 19.5 10.6 19 10H15Z",light:"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",notify:"M9 22C8.4 22 8 21.6 8 21V18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H13.9L10.2 21.7C10 21.9 9.8 22 9.5 22H9M13 11V5H11V11M13 15V13H11V15H13Z",number:te,persistent_notification:K,person:D,plant:"M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z",proximity:"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z",remote:"M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z",scene:"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",schedule:J,script:"M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z",select:X,sensor:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",simple_alarm:K,siren:"M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z",stt:"M8,7A2,2 0 0,1 10,9V14A2,2 0 0,1 8,16A2,2 0 0,1 6,14V9A2,2 0 0,1 8,7M14,14C14,16.97 11.84,19.44 9,19.92V22H7V19.92C4.16,19.44 2,16.97 2,14H4A4,4 0 0,0 8,18A4,4 0 0,0 12,14H14M21.41,9.41L17.17,13.66L18.18,10H14A2,2 0 0,1 12,8V4A2,2 0 0,1 14,2H20A2,2 0 0,1 22,4V8C22,8.55 21.78,9.05 21.41,9.41Z",sun:"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",text:ee,time:Q,timer:"M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z",todo:"M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z",tts:"M16.5 3H21.5C22.3 3 23 3.7 23 4.5V7.5C23 8.3 22.3 9 21.5 9H18L15 12V4.5C15 3.7 15.7 3 16.5 3M3 3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H11C12.1 21 13 20.1 13 19V5C13 3.9 12.1 3 11 3H3M7 5C8.1 5 9 5.9 9 7S8.1 9 7 9 5 8.1 5 7 5.9 5 7 5M7 11C9.2 11 11 12.8 11 15S9.2 19 7 19 3 17.2 3 15 4.8 11 7 11M7 13C5.9 13 5 13.9 5 15S5.9 17 7 17 9 16.1 9 15 8.1 13 7 13",vacuum:"M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",wake_word:"M12 3C6.5 3 2 6.58 2 11C2 13.13 3.05 15.07 4.75 16.5C4.7 17.1 4.33 18.67 2 21C2 21 5.55 21 8.47 18.5C9.57 18.82 10.76 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M15 9.3L11.76 13H15V15H9V12.7L12.24 9H9V7H15V9.3Z",weather:"M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z",zone:"M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"},ne=(new Set(["fan","input_boolean","light","switch","group","automation","humidifier","valve"]),new Set(["camera","image","media_player"]),e=>u(e.entity_id));var se=i(6412);const re=e=>!!e.attributes.in_progress,oe={10:"mdi:battery-10",20:"mdi:battery-20",30:"mdi:battery-30",40:"mdi:battery-40",50:"mdi:battery-50",60:"mdi:battery-60",70:"mdi:battery-70",80:"mdi:battery-80",90:"mdi:battery-90",100:"mdi:battery"},de={10:"mdi:battery-charging-10",20:"mdi:battery-charging-20",30:"mdi:battery-charging-30",40:"mdi:battery-charging-40",50:"mdi:battery-charging-50",60:"mdi:battery-charging-60",70:"mdi:battery-charging-70",80:"mdi:battery-charging-80",90:"mdi:battery-charging-90",100:"mdi:battery-charging"},le=(e,t)=>{const i=Number(e);if(isNaN(i))return"off"===e?"mdi:battery":"on"===e?"mdi:battery-alert":"mdi:battery-unknown";const a=10*Math.round(i/10);return t&&i>=10?de[a]:t?"mdi:battery-charging-outline":i<=5?"mdi:battery-alert-variant-outline":oe[a]},ce=(e,t)=>{const i=ne(e),a=null!=t?t:e.state,n=e.attributes.device_class;switch(i){case"update":return((e,t)=>"on"===(null!=t?t:e.state)?re(e)?"mdi:package-down":"mdi:package-up":"mdi:package")(e,a);case"sensor":if("battery"===n)return((e,t)=>{const i=null!=t?t:e.state;return le(i)})(e,a);break;case"device_tracker":return((e,t)=>{const i=null!=t?t:e.state;return"router"===(null==e?void 0:e.attributes.source_type)?"home"===i?"mdi:lan-connect":"mdi:lan-disconnect":["bluetooth","bluetooth_le"].includes(null==e?void 0:e.attributes.source_type)?"home"===i?"mdi:bluetooth-connect":"mdi:bluetooth":"not_home"===i?"mdi:account-arrow-right":"mdi:account"})(e,a);case"sun":return"above_horizon"===a?"mdi:white-balance-sunny":"mdi:weather-night";case"input_datetime":if(!e.attributes.has_date)return"mdi:clock";if(!e.attributes.has_time)return"mdi:calendar"}};var he=i(2872);const ue={entity:{},entity_component:{},services:{domains:{}}},fe=async(e,t,i)=>e.callWS({type:"frontend/get_icons",category:t,integration:i}),ve=async(e,t,i=!1)=>{if(!i&&t in ue.entity)return ue.entity[t];if(!(0,he.x)(e,t)||!((e,t,i,a)=>{const[n,s,r]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===a?Number(s)>=i:Number(s)>i)||void 0!==a&&Number(n)===t&&Number(s)===i&&Number(r)>=a})(e.connection.haVersion,2024,2))return;const a=fe(e,"entity",t).then((e=>null==e?void 0:e.resources[t]));return ue.entity[t]=a,ue.entity[t]},pe=async(e,t,i=!1)=>{var a;return!i&&ue.entity_component.resources&&null!==(a=ue.entity_component.domains)&&void 0!==a&&a.includes(t)?ue.entity_component.resources.then((e=>e[t])):(0,he.x)(e,t)?(ue.entity_component.domains=[...e.config.components],ue.entity_component.resources=fe(e,"entity_component").then((e=>e.resources)),ue.entity_component.resources.then((e=>e[t]))):void 0},me=async(e,t,i,a,n)=>{const s=null==n?void 0:n.platform,r=null==n?void 0:n.translation_key,o=null==i?void 0:i.attributes.device_class,d=null!=a?a:null==i?void 0:i.state;let l;if(r&&s){const i=await ve(e,s);if(i){var c,h;const e=null===(c=i[t])||void 0===c?void 0:c[r];l=d&&(null==e||null===(h=e.state)||void 0===h?void 0:h[d])||(null==e?void 0:e.default)}}if(!l&&i&&(l=ce(i,d)),!l){const i=await pe(e,t);if(i){var u;const e=o&&i[o]||i._;l=d&&(null==e||null===(u=e.state)||void 0===u?void 0:u[d])||(null==e?void 0:e.default)}}return l},ye=async(e,t,i)=>{const a=await pe(e,t);if(a){const e=i&&a[i]||a._;return null==e?void 0:e.default}};(0,a.A)([(0,h.EM)("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"stateValue",value:void 0},{kind:"field",decorators:[(0,h.MZ)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;const i=this.icon||this.stateObj&&(null===(e=this.hass)||void 0===e||null===(e=e.entities[this.stateObj.entity_id])||void 0===e?void 0:e.icon)||(null===(t=this.stateObj)||void 0===t?void 0:t.attributes.icon);if(i)return l.qy`<ha-icon .icon=${i}></ha-icon>`;if(!this.stateObj)return l.s6;if(!this.hass)return this._renderFallback();const a=(async(e,t,i)=>{var a;const n=null===(a=e.entities)||void 0===a?void 0:a[t.entity_id];if(null!=n&&n.icon)return n.icon;const s=ne(t);return me(e,s,t,i,n)})(this.hass,this.stateObj,this.stateValue).then((e=>e?l.qy`<ha-icon .icon=${e}></ha-icon>`:this._renderFallback()));return l.qy`${T(a)}`}},{kind:"method",key:"_renderFallback",value:function(){const e=ne(this.stateObj);return l.qy`
      <ha-svg-icon
        .path=${ae[e]||ie}
      ></ha-svg-icon>
    `}}]}}),l.WF);var Ce=i(7424);(0,a.A)([(0,h.EM)("ha-domain-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.MZ)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,h.MZ)()],key:"deviceClass",value:void 0},{kind:"field",decorators:[(0,h.MZ)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,h.MZ)({type:Boolean})],key:"brandFallback",value:void 0},{kind:"method",key:"render",value:function(){if(this.icon)return l.qy`<ha-icon .icon=${this.icon}></ha-icon>`;if(!this.domain)return l.s6;if(!this.hass)return this._renderFallback();const e=ye(this.hass,this.domain,this.deviceClass).then((e=>e?l.qy`<ha-icon .icon=${e}></ha-icon>`:this._renderFallback()));return l.qy`${T(e)}`}},{kind:"method",key:"_renderFallback",value:function(){if(this.domain in ae)return l.qy`
        <ha-svg-icon .path=${ae[this.domain]}></ha-svg-icon>
      `;if(this.brandFallback){var e;const t=(0,Ce.MR)({domain:this.domain,type:"icon",darkOptimized:null===(e=this.hass.themes)||void 0===e?void 0:e.darkMode});return l.qy`
        <img
          alt=""
          src=${t}
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      `}return l.qy`<ha-svg-icon .path=${ie}></ha-svg-icon>`}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`
      img {
        width: var(--mdc-icon-size, 24px);
      }
    `}}]}}),l.WF);i(7661);var be=i(10),ge=i(3407),_e=i(7700),ke=i(4933),Ae=i(5355),He=i(1445);const Me=()=>Promise.all([i.e(432),i.e(233),i.e(640),i.e(236),i.e(862)]).then(i.bind(i,8862));i(1433);var Ve=i(5787);const xe="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";(0,a.A)([(0,h.EM)("ha-expansion-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,h.MZ)({type:Boolean,reflect:!0})],key:"expanded",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean,reflect:!0})],key:"outlined",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean,reflect:!0})],key:"leftChevron",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean,reflect:!0})],key:"noCollapse",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)()],key:"header",value:void 0},{kind:"field",decorators:[(0,h.MZ)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[(0,h.P)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return l.qy`
      <div class="top ${(0,p.H)({expanded:this.expanded})}">
        <div
          id="summary"
          class=${(0,p.H)({noCollapse:this.noCollapse})}
          @click=${this._toggleContainer}
          @keydown=${this._toggleContainer}
          @focus=${this._focusChanged}
          @blur=${this._focusChanged}
          role="button"
          tabindex=${this.noCollapse?-1:0}
          aria-expanded=${this.expanded}
          aria-controls="sect1"
        >
          ${this.leftChevron&&!this.noCollapse?l.qy`
                <ha-svg-icon
                  .path=${xe}
                  class="summary-icon ${(0,p.H)({expanded:this.expanded})}"
                ></ha-svg-icon>
              `:""}
          <slot name="header">
            <div class="header">
              ${this.header}
              <slot class="secondary" name="secondary">${this.secondary}</slot>
            </div>
          </slot>
          ${this.leftChevron||this.noCollapse?"":l.qy`
                <ha-svg-icon
                  .path=${xe}
                  class="summary-icon ${(0,p.H)({expanded:this.expanded})}"
                ></ha-svg-icon>
              `}
          <slot name="icons"></slot>
        </div>
      </div>
      <div
        class="container ${(0,p.H)({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?l.qy`<slot></slot>`:""}
      </div>
    `}},{kind:"method",key:"willUpdate",value:function(e){(0,n.A)(i,"willUpdate",this,3)([e]),e.has("expanded")&&(this._showContent=this.expanded,setTimeout((()=>{this._container.style.overflow=this.expanded?"initial":"hidden"}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;if(e.preventDefault(),this.noCollapse)return;const t=!this.expanded;(0,m.r)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await(0,Ve.E)());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,(0,m.r)(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.noCollapse||this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`
      :host {
        display: block;
      }

      .top {
        display: flex;
        align-items: center;
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .top.expanded {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      .top.focused {
        background: var(--input-fill-color);
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(--outline-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
        margin-left: 8px;
        margin-inline-start: 8px;
        margin-inline-end: initial;
      }

      :host([leftchevron]) .summary-icon {
        margin-left: 0;
        margin-right: 8px;
        margin-inline-start: 0;
        margin-inline-end: 8px;
      }

      #summary {
        flex: 1;
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }
      #summary.noCollapse {
        cursor: default;
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .header,
      ::slotted([slot="header"]) {
        flex: 1;
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        height: auto;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}]}}),l.WF);var $e=i(6513),we=i(1497),Le=i(8678);let Ze=class extends we.L{};Ze.styles=[Le.R],Ze=(0,$e.Cg)([(0,h.EM)("mwc-checkbox")],Ze);var qe=i(6175);class Ee extends qe.J{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():l.qy``,a=this.hasMeta&&this.left?this.renderMeta():l.qy``,n=this.renderRipple();return l.qy`
      ${n}
      ${i}
      ${this.left?"":t}
      <span class=${(0,p.H)(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${a}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}(0,$e.Cg)([(0,h.P)("slot")],Ee.prototype,"slotElement",void 0),(0,$e.Cg)([(0,h.P)("mwc-checkbox")],Ee.prototype,"checkboxElement",void 0),(0,$e.Cg)([(0,h.MZ)({type:Boolean})],Ee.prototype,"left",void 0),(0,$e.Cg)([(0,h.MZ)({type:String,reflect:!0})],Ee.prototype,"graphic",void 0);const Fe=l.AH`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;var Se=i(5592);(0,a.A)([(0,h.EM)("ha-check-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"onChange",value:async function(e){(0,n.A)(i,"onChange",this,3)([e]),(0,m.r)(this,e.type)}},{kind:"field",static:!0,key:"styles",value(){return[Se.R,Fe,l.AH`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }

      :host([graphic="avatar"]) .mdc-deprecated-list-item__graphic,
      :host([graphic="medium"]) .mdc-deprecated-list-item__graphic,
      :host([graphic="large"]) .mdc-deprecated-list-item__graphic,
      :host([graphic="control"]) .mdc-deprecated-list-item__graphic {
        margin-inline-end: var(--mdc-list-item-graphic-margin, 16px);
        margin-inline-start: 0px;
        direction: var(--direction);
      }
      .mdc-deprecated-list-item__meta {
        flex-shrink: 0;
        direction: var(--direction);
        margin-inline-start: auto;
        margin-inline-end: 0;
      }
      .mdc-deprecated-list-item__graphic {
        margin-top: var(--check-list-item-graphic-margin-top);
      }
      :host([graphic="icon"]) .mdc-deprecated-list-item__graphic {
        margin-inline-start: 0;
        margin-inline-end: var(--mdc-list-item-graphic-margin, 32px);
      }
    `]}}]}}),Ee);(0,a.A)([(0,h.EM)("lcn-filter-address")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"lcn",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"deviceConfigs",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,h.MZ)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,h.MZ)({type:Boolean,reflect:!0})],key:"expanded",value(){return!1}},{kind:"field",decorators:[(0,h.wk)()],key:"_shouldRender",value(){return!1}},{kind:"field",decorators:[(0,h.wk)()],key:"_filter",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return l.qy`
      <ha-expansion-panel
        leftChevron
        .expanded=${this.expanded}
        @expanded-will-change=${this._expandedWillChange}
        @expanded-changed=${this._expandedChanged}
      >
        <div slot="header" class="header">
          ${this.lcn.localize("devices")}/${this.lcn.localize("addresses")}
          ${null!==(e=this.value)&&void 0!==e&&e.length?l.qy`<div class="badge">${null===(t=this.value)||void 0===t?void 0:t.length}</div>
                <ha-icon-button
                  .path=${"M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M21.12 15.46L19 17.59L16.88 15.46L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88L21.12 15.46Z"}
                  @click=${this._clearFilter}
                ></ha-icon-button>`:l.s6}
        </div>
        ${this._shouldRender?l.qy`<search-input-outlined
                .hass=${this.hass}
                .filter=${this._filter}
                @value-changed=${this._handleSearchChange}
              ></search-input-outlined>

              <mwc-list class="ha-scrollbar" multi @click=${this._handleItemClick}>
                ${this._addresses(this.deviceConfigs,this._filter).map((e=>l.qy`<ha-check-list-item
                      .value=${e}
                      .selected=${(this.value||[]).includes(e)}
                    >
                      ${this._address_repr(e)}
                    </ha-check-list-item>`))}
              </mwc-list>`:l.s6}
      </ha-expansion-panel>
    `}},{kind:"field",key:"_addresses",value(){return(0,f.A)(((e,t)=>{const i=new Set;return e.forEach((e=>{i.add((0,ke.p)(e.address))})),Array.from(i.values()).map((e=>({address_str:e,name:this._address_repr(e)}))).filter((e=>!t||e.address_str.toLowerCase().includes(t)||e.name.toLowerCase().includes(t))).sort(((e,t)=>(0,se.x)(e.name,t.name,this.hass.locale.language))).map((e=>e.address_str))}))}},{kind:"method",key:"_address_repr",value:function(e){const t=(0,ke.d)(e);return`${t[2]?this.lcn.localize("group"):this.lcn.localize("module")} (${t[0]}, ${t[1]})`}},{kind:"method",key:"updated",value:function(e){e.has("expanded")&&this.expanded&&setTimeout((()=>{this.expanded&&(this.renderRoot.querySelector("mwc-list").style.height=this.clientHeight-49-32+"px")}),300)}},{kind:"method",key:"_expandedWillChange",value:function(e){this._shouldRender=e.detail.expanded}},{kind:"method",key:"_expandedChanged",value:function(e){this.expanded=e.detail.expanded}},{kind:"method",key:"_handleItemClick",value:function(e){var t;const i=e.target.closest("ha-check-list-item"),a=null==i?void 0:i.value;if(a){var n;if(null!==(t=this.value)&&void 0!==t&&t.includes(a))this.value=null===(n=this.value)||void 0===n?void 0:n.filter((e=>e!==a));else this.value=[...this.value||[],a];i.selected=this.value.includes(a),(0,m.r)(this,"data-table-filter-changed",{value:this.value,items:void 0})}}},{kind:"method",key:"_clearFilter",value:function(e){e.preventDefault(),this.value=void 0,(0,m.r)(this,"data-table-filter-changed",{value:void 0,items:void 0})}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value.toLowerCase()}},{kind:"get",static:!0,key:"styles",value:function(){return[d.dp,l.AH`
        :host {
          border-bottom: 1px solid var(--divider-color);
        }
        :host([expanded]) {
          flex: 1;
          height: 0;
        }
        ha-expansion-panel {
          --ha-card-border-radius: 0;
          --expansion-panel-content-padding: 0;
        }
        .header {
          display: flex;
          align-items: center;
        }
        .header ha-icon-button {
          margin-inline-start: initial;
          margin-inline-end: 8px;
        }
        .badge {
          display: inline-block;
          margin-left: 8px;
          margin-inline-start: 8px;
          margin-inline-end: initial;
          min-width: 16px;
          box-sizing: border-box;
          border-radius: 50%;
          font-weight: 400;
          font-size: 11px;
          background-color: var(--primary-color);
          line-height: 16px;
          text-align: center;
          padding: 0px 2px;
          color: var(--text-primary-color);
        }
        search-input-outlined {
          display: block;
          padding: 0 8px;
        }
      `]}}]}}),l.WF);const ze="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";function Ie(e,t=!0){let i=`${(0,ke.p)(e.address)}-${e.resource}`;return t&&(i=`${e.domain}-`+i),i}let Pe=(0,a.A)([(0,h.EM)("lcn-entities-page")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"lcn",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,h.wk)()],key:"_deviceConfig",value:void 0},{kind:"field",decorators:[(0,h.wk)(),(0,s.Fg)({context:r.h,subscribe:!0})],key:"_deviceConfigs",value:void 0},{kind:"field",decorators:[(0,h.wk)(),(0,s.Fg)({context:r.e,subscribe:!0})],key:"_entityConfigs",value:void 0},{kind:"field",decorators:[(0,h.wk)(),(0,s.Fg)({context:o.ih,subscribe:!0})],key:"_entityRegistryEntries",value:void 0},{kind:"field",decorators:[(0,v.I)({storage:"sessionStorage",key:"entities-table-filters",state:!0,subscribe:!1})],key:"_filters",value(){return{}}},{kind:"field",decorators:[(0,h.wk)()],key:"_filteredItems",value(){return{}}},{kind:"field",decorators:[(0,h.wk)()],key:"_selected",value(){return[]}},{kind:"field",decorators:[(0,h.wk)()],key:"_expandedFilter",value:void 0},{kind:"field",decorators:[(0,v.I)({storage:"sessionStorage",key:"lcn-entities-table-search",state:!0,subscribe:!1})],key:"_filter",value(){var e;return(null===(e=history.state)||void 0===e?void 0:e.filter)||""}},{kind:"field",decorators:[(0,h.wk)()],key:"_searchParms",value(){return new URLSearchParams(be.G.location.search)}},{kind:"field",decorators:[(0,v.I)({storage:"sessionStorage",key:"lcn-entities-table-sort",state:!1,subscribe:!1})],key:"_activeSorting",value:void 0},{kind:"field",decorators:[(0,v.I)({key:"lcn-entities-table-column-order",state:!1,subscribe:!1})],key:"_activeColumnOrder",value:void 0},{kind:"field",decorators:[(0,v.I)({key:"lcn-entities-table-hidden-columns",state:!1,subscribe:!1})],key:"_activeHiddenColumns",value:void 0},{kind:"field",decorators:[(0,h.nJ)("hass-tabs-subpage-data-table")],key:"_dataTable",value:void 0},{kind:"get",key:"_extEntityConfigs",value:function(){return(0,f.A)(((e=this._entityConfigs,t=this._entityRegistryEntries)=>e.map((e=>({...e,unique_id:Ie(e),address_str:(0,ke.p)(e.address),entityRegistryEntry:t.find((t=>u(t.entity_id)===e.domain&&Ie(e,!1)===t.unique_id.split("-").slice(1).join("-")))})))))()}},{kind:"field",key:"_columns",value(){return(0,f.A)((()=>({icon:{title:"",label:"Icon",type:"icon",showNarrow:!0,moveable:!1,template:e=>e.entityRegistryEntry?e.entityRegistryEntry.icon?l.qy`<ha-icon .icon=${e.entityRegistryEntry.icon}></ha-icon>`:this.hass.states[e.entityRegistryEntry.entity_id]?l.qy`
                    <ha-state-icon
                      title=${(0,c.J)(this.hass.states[e.entityRegistryEntry.entity_id].state)}
                      slot="item-icon"
                      .hass=${this.hass}
                      .stateObj=${this.hass.states[e.entityRegistryEntry.entity_id]}
                    ></ha-state-icon>
                  `:l.qy`<ha-domain-icon
                    .domain=${u(e.entityRegistryEntry.entity_id)}
                  ></ha-domain-icon>`:l.s6},name:{main:!0,title:this.lcn.localize("name"),sortable:!0,filterable:!0,direction:"asc",flex:2,template:e=>e.entityRegistryEntry?e.entityRegistryEntry.name||e.entityRegistryEntry.original_name:e.name},address_str:{title:this.lcn.localize("address"),sortable:!0,filterable:!0,direction:"asc"},domain:{title:this.lcn.localize("domain"),sortable:!0,filterable:!0},resource:{title:this.lcn.localize("resource"),sortable:!0,filterable:!0},delete:{title:this.lcn.localize("delete"),showNarrow:!0,moveable:!1,type:"icon-button",template:e=>l.qy`
            <ha-icon-button
              id=${"delete-entity-"+e.unique_id.replace(".","-")}
              .label=${this.lcn.localize("dashboard-entities-table-delete")}
              .path=${ze}
              @click=${t=>this._deleteEntities([e])}
            ></ha-icon-button>
            <simple-tooltip
              animation-delay="0"
              offset="0"
              for=${"delete-entity-"+e.unique_id.replace(".","-")}
            >
              ${this.lcn.localize("dashboard-entities-table-delete")}
            </simple-tooltip>
          `}})))}},{kind:"field",key:"_filteredEntities",value(){return(0,f.A)(((e,t,i)=>{let a=i;return Object.entries(e).forEach((([e,t])=>{"lcn-filter-address"===e&&Array.isArray(t)&&t.length&&(a=a.filter((e=>t.includes(e.address_str))))})),Object.values(t).forEach((e=>{e&&(a=a.filter((t=>e.has(t.unique_id))))})),a}))}},{kind:"method",key:"_filterExpanded",value:function(e){e.detail.expanded?this._expandedFilter=e.target.localName:this._expandedFilter===e.target.localName&&(this._expandedFilter=void 0)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.target.localName;this._filters={...this._filters,[t]:e.detail.value},this._filteredItems={...this._filteredItems,[t]:e.detail.items},this.updateFilteredDevice()}},{kind:"method",key:"updateFilteredDevice",value:function(){let e;if("lcn-filter-address"in this._filters&&this._filters["lcn-filter-address"]&&this._filters["lcn-filter-address"][0])e=(0,ke.d)(this._filters["lcn-filter-address"][0]);else{const t=this._filteredEntities(this._filters,this._filteredItems,this._extEntityConfigs);if(0===t.length)return void(this._deviceConfig=void 0);e=t[0].address}this._deviceConfig=this._deviceConfigs.find((t=>t.address[0]===e[0]&&t.address[1]===e[1]&&t.address[2]===e[2]))}},{kind:"method",key:"firstUpdated",value:async function(e){(0,n.A)(i,"firstUpdated",this,3)([e]),Me(),(0,_e.u)(this),this._setFiltersFromUrl()}},{kind:"method",key:"updated",value:async function(e){(0,n.A)(i,"updated",this,3)([e]),this._dataTable.then(He.z)}},{kind:"method",key:"_setFiltersFromUrl",value:function(){var e;const t=this._searchParms.get("address");t||!this._filters?(this._filter=(null===(e=history.state)||void 0===e?void 0:e.filter)||"",this._filters={"lcn-filter-address":t?[t]:[]},this.updateFilteredDevice()):this._filters={}}},{kind:"method",key:"render",value:function(){if(!(this.hass&&this.lcn&&this._deviceConfigs&&this._entityConfigs))return l.s6;const e=this._filteredEntities(this._filters,this._filteredItems,this._extEntityConfigs),t=this._deviceConfigs.length>0;return l.qy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/lcn/devices"
        noDataText=${0===this._deviceConfigs.length?this.lcn.localize("dashboard-entities-no-data-text-devices"):this.lcn.localize("dashboard-entities-no-data-text-entities")}
        .route=${this.route}
        .tabs=${Ae.p}
        .localizeFunc=${this.lcn.localize}
        .columns=${this._columns()}
        .data=${e}
        hasFilters
        .filters=${Object.values(this._filters).filter((e=>Array.isArray(e)?e.length:e&&Object.values(e).some((e=>Array.isArray(e)?e.length:e)))).length}
        selectable
        .selected=${this._selected.length}
        .initialSorting=${this._activeSorting}
        .columnOrder=${this._activeColumnOrder}
        .hiddenColumns=${this._activeHiddenColumns}
        @columns-changed=${this._handleColumnsChanged}
        @sorting-changed=${this._handleSortingChanged}
        @selection-changed=${this._handleSelectionChanged}
        clickable
        @clear-filter=${this._clearFilter}
        .filter=${this._filter}
        @search-changed=${this._handleSearchChange}
        @row-click=${this._openEditEntry}
        id="unique_id"
        .hasfab=${t}
        class=${this.narrow?"narrow":""}
      >
        <div class="header-btns" slot="selection-bar">
          ${this.narrow?l.qy`
                <ha-icon-button
                  class="warning"
                  id="remove-btn"
                  @click=${this._deleteSelected}
                  .path=${ze}
                  .label=${this.lcn.localize("delete-selected")}
                ></ha-icon-button>
                <ha-help-tooltip .label=${this.lcn.localize("delete-selected")} )}>
                </ha-help-tooltip>
              `:l.qy`
                <mwc-button @click=${this._deleteSelected} class="warning">
                  ${this.lcn.localize("delete-selected")}
                </mwc-button>
              `}
        </div>

        <lcn-filter-address
          .hass=${this.hass}
          .lcn=${this.lcn}
          .value=${this._filters["lcn-filter-address"]}
          .deviceConfigs=${this._deviceConfigs}
          @data-table-filter-changed=${this._filterChanged}
          slot="filter-pane"
          .expanded=${"lcn-filter-address"===this._expandedFilter}
          .narrow=${this.narrow}
          @expanded-changed=${this._filterExpanded}
        ></lcn-filter-address>

        ${t?l.qy`
              <ha-fab
                slot="fab"
                @click=${this._addEntity}
                .label=${this.lcn.localize("dashboard-entities-add")}
                extended
              >
                <ha-svg-icon slot="icon" path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
              </ha-fab>
            `:l.s6}
      </hass-tabs-subpage-data-table>
    `}},{kind:"method",key:"getEntityConfigByUniqueId",value:function(e){const{address:t,domain:i,resource:a}=function(e){const t=e.split("-"),i=t.pop(),a=t.pop(),n=t.pop();return{address:(0,ke.d)(a),domain:n,resource:i}}(e);return this._entityConfigs.find((e=>e.address[0]===t[0]&&e.address[1]===t[1]&&e.address[2]===t[2]&&e.domain===i&&e.resource===a))}},{kind:"method",key:"_openEditEntry",value:async function(e){const t=e.detail.id,i=this.getEntityConfigByUniqueId(t),a=this._entityRegistryEntries.find((e=>u(e.entity_id)===i.domain&&Ie(i,!1)===e.unique_id.split("-").slice(1).join("-")));(0,m.r)(be.G.document.querySelector("home-assistant"),"hass-more-info",{entityId:a.entity_id})}},{kind:"method",key:"_addEntity",value:async function(){var e,t;e=this,t={lcn:this.lcn,deviceConfig:this._deviceConfig,createEntity:async e=>!!(await(0,ge.d$)(this.hass,this.lcn.config_entry,e))&&((0,_e.u)(this),!0)},(0,m.r)(e,"show-dialog",{dialogTag:"lcn-create-entity-dialog",dialogImport:Me,dialogParams:t})}},{kind:"method",key:"_deleteSelected",value:async function(){const e=this._selected.map((e=>this.getEntityConfigByUniqueId(e)));this._deleteEntities(e),this._clearSelection()}},{kind:"method",key:"_deleteEntities",value:async function(e){if(0!==e.length){for await(const t of e)await(0,ge.$b)(this.hass,this.lcn.config_entry,t);(0,_e.u)(this)}}},{kind:"method",key:"_clearSelection",value:async function(){(await this._dataTable).clearSelection()}},{kind:"method",key:"_clearFilter",value:function(){this._filters={},this._filteredItems={},this.updateFilteredDevice()}},{kind:"method",key:"_handleSortingChanged",value:function(e){this._activeSorting=e.detail}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value,history.replaceState({filter:this._filter},"")}},{kind:"method",key:"_handleColumnsChanged",value:function(e){this._activeColumnOrder=e.detail.columnOrder,this._activeHiddenColumns=e.detail.hiddenColumns}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[d.RF,l.AH`
        hass-tabs-subpage-data-table {
          --data-table-row-height: 60px;
        }
        hass-tabs-subpage-data-table.narrow {
          --data-table-row-height: 72px;
        }
      `]}}]}}),l.WF)},3267:(e,t,i)=>{i.d(t,{Kq:()=>h});var a=i(3982),n=i(2154);const s=(e,t)=>{var i,a;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(a=(i=r)._$AO)||void 0===a||a.call(i,t,!1),s(r,t);return!0},r=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},o=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),c(t)}};function d(e){void 0!==this._$AN?(r(this),this._$AM=e,o(this)):this._$AM=e}function l(e,t=!1,i=0){const a=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(a))for(let o=i;o<a.length;o++)s(a[o],!1),r(a[o]);else null!=a&&(s(a,!1),r(a));else s(this,e)}const c=e=>{var t,i,a,s;e.type==n.OA.CHILD&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=l),null!==(i=(s=e)._$AQ)&&void 0!==i||(s._$AQ=d))};class h extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),o(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,a;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),t&&(s(this,e),r(this))}setValue(e){if((0,a.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}};
//# sourceMappingURL=jf_Ad_to.js.map