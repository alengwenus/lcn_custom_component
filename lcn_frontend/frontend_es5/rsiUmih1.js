"use strict";(self.webpackChunklcn_frontend=self.webpackChunklcn_frontend||[]).push([[424],{73279:function(n,e,r){var t,o=r(6238),a=r(95803),i=r(36683),s=r(89231),c=r(29864),d=r(83647),l=r(3516),u=r(27526),h=(r(77052),r(57305)),p=r(98597),y=r(196);(0,l.A)([(0,y.EM)("ha-circular-progress")],(function(n,e){var r=function(e){function r(){var e;(0,s.A)(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=(0,c.A)(this,r,[].concat(o)),n(e),e}return(0,d.A)(r,e),(0,i.A)(r)}(e);return{F:r,d:[{kind:"field",decorators:[(0,y.MZ)({attribute:"aria-label",type:String})],key:"ariaLabel",value:function(){return"Loading"}},{kind:"field",decorators:[(0,y.MZ)()],key:"size",value:function(){return"medium"}},{kind:"method",key:"updated",value:function(n){if((0,u.A)(r,"updated",this,3)([n]),n.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"field",static:!0,key:"styles",value:function(){return[].concat((0,a.A)((0,u.A)(r,"styles",this)),[(0,p.AH)(t||(t=(0,o.A)(["\n      :host {\n        --md-sys-color-primary: var(--primary-color);\n        --md-circular-progress-size: 48px;\n      }\n    "])))])}}]}}),h.U)},61424:function(n,e,r){r.r(e);var t,o,a,i,s,c,d=r(6238),l=r(36683),u=r(89231),h=r(29864),p=r(83647),y=r(3516),v=(r(77052),r(98597)),k=r(196),f=(r(73279),r(92312),r(32010),r(43799));(0,y.A)([(0,k.EM)("hass-loading-screen")],(function(n,e){var r=function(e){function r(){var e;(0,u.A)(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=(0,h.A)(this,r,[].concat(o)),n(e),e}return(0,p.A)(r,e),(0,l.A)(r)}(e);return{F:r,d:[{kind:"field",decorators:[(0,k.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.MZ)({type:Boolean,attribute:"no-toolbar"})],key:"noToolbar",value:function(){return!1}},{kind:"field",decorators:[(0,k.MZ)({type:Boolean})],key:"rootnav",value:function(){return!1}},{kind:"field",decorators:[(0,k.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,k.MZ)()],key:"message",value:void 0},{kind:"method",key:"render",value:function(){var n;return(0,v.qy)(t||(t=(0,d.A)(["\n      ",'\n      <div class="content">\n        <ha-circular-progress indeterminate></ha-circular-progress>\n        ',"\n      </div>\n    "])),this.noToolbar?"":(0,v.qy)(o||(o=(0,d.A)(['<div class="toolbar">\n            ',"\n          </div>"])),this.rootnav||null!==(n=history.state)&&void 0!==n&&n.root?(0,v.qy)(a||(a=(0,d.A)(["\n                  <ha-menu-button\n                    .hass=","\n                    .narrow=","\n                  ></ha-menu-button>\n                "])),this.hass,this.narrow):(0,v.qy)(i||(i=(0,d.A)(["\n                  <ha-icon-button-arrow-prev\n                    .hass=","\n                    @click=","\n                  ></ha-icon-button-arrow-prev>\n                "])),this.hass,this._handleBack)),this.message?(0,v.qy)(s||(s=(0,d.A)(['<div id="loading-text">',"</div>"])),this.message):v.s6)}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[f.RF,(0,v.AH)(c||(c=(0,d.A)(["\n        :host {\n          display: block;\n          height: 100%;\n          background-color: var(--primary-background-color);\n        }\n        .toolbar {\n          display: flex;\n          align-items: center;\n          font-size: 20px;\n          height: var(--header-height);\n          padding: 8px 12px;\n          pointer-events: none;\n          background-color: var(--app-header-background-color);\n          font-weight: 400;\n          color: var(--app-header-text-color, white);\n          border-bottom: var(--app-header-border-bottom, none);\n          box-sizing: border-box;\n        }\n        @media (max-width: 599px) {\n          .toolbar {\n            padding: 4px;\n          }\n        }\n        ha-menu-button,\n        ha-icon-button-arrow-prev {\n          pointer-events: auto;\n        }\n        .content {\n          height: calc(100% - var(--header-height));\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n        }\n        #loading-text {\n          max-width: 350px;\n          margin-top: 16px;\n        }\n      "])))]}}]}}),v.WF)}}]);