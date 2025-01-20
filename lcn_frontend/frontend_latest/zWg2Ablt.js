export const id=950;export const ids=[950];export const modules={4517:(e,t,i)=>{i.d(t,{d:()=>a});const a=e=>e.stopPropagation()},2694:(e,t,i)=>{var a=i(2659),n=i(487),o=i(4258),r=i(8597),l=i(196),s=i(9760),d=i(3167);(0,a.A)([(0,l.EM)("ha-formfield")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"method",key:"render",value:function(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return r.qy` <div class="mdc-form-field ${(0,s.H)(e)}">
      <slot></slot>
      <label class="mdc-label" @click=${this._labelClick}>
        <slot name="label">${this.label}</slot>
      </label>
    </div>`}},{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,d.r)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,d.r)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value(){return[o.R,r.AH`
      :host(:not([alignEnd])) ::slotted(ha-switch) {
        margin-right: 10px;
        margin-inline-end: 10px;
        margin-inline-start: inline;
      }
      .mdc-form-field {
        align-items: var(--ha-formfield-align-items, center);
        gap: 4px;
      }
      .mdc-form-field > label {
        direction: var(--direction);
        margin-inline-start: 0;
        margin-inline-end: auto;
        padding: 0;
      }
      :host([disabled]) label {
        color: var(--disabled-text-color);
      }
    `]}}]}}),n.M)},9484:(e,t,i)=>{i.d(t,{$:()=>d});var a=i(2659),n=i(9534),o=i(6175),r=i(5592),l=i(8597),s=i(196);let d=(0,a.A)([(0,s.EM)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,n.A)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[r.R,l.AH`
        :host {
          padding-left: var(
            --mdc-list-side-padding-left,
            var(--mdc-list-side-padding, 20px)
          );
          padding-inline-start: var(
            --mdc-list-side-padding-left,
            var(--mdc-list-side-padding, 20px)
          );
          padding-right: var(
            --mdc-list-side-padding-right,
            var(--mdc-list-side-padding, 20px)
          );
          padding-inline-end: var(
            --mdc-list-side-padding-right,
            var(--mdc-list-side-padding, 20px)
          );
        }
        :host([graphic="avatar"]:not([twoLine])),
        :host([graphic="icon"]:not([twoLine])) {
          height: 48px;
        }
        span.material-icons:first-of-type {
          margin-inline-start: 0px !important;
          margin-inline-end: var(
            --mdc-list-item-graphic-margin,
            16px
          ) !important;
          direction: var(--direction) !important;
        }
        span.material-icons:last-of-type {
          margin-inline-start: auto !important;
          margin-inline-end: 0px !important;
          direction: var(--direction) !important;
        }
        .mdc-deprecated-list-item__meta {
          display: var(--mdc-list-item-meta-display);
          align-items: center;
          flex-shrink: 0;
        }
        :host([graphic="icon"]:not([twoline]))
          .mdc-deprecated-list-item__graphic {
          margin-inline-end: var(
            --mdc-list-item-graphic-margin,
            20px
          ) !important;
        }
        :host([multiline-secondary]) {
          height: auto;
        }
        :host([multiline-secondary]) .mdc-deprecated-list-item__text {
          padding: 8px 0;
        }
        :host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text {
          text-overflow: initial;
          white-space: normal;
          overflow: auto;
          display: inline-block;
          margin-top: 10px;
        }
        :host([multiline-secondary]) .mdc-deprecated-list-item__primary-text {
          margin-top: 10px;
        }
        :host([multiline-secondary])
          .mdc-deprecated-list-item__secondary-text::before {
          display: none;
        }
        :host([multiline-secondary])
          .mdc-deprecated-list-item__primary-text::before {
          display: none;
        }
        :host([disabled]) {
          color: var(--disabled-text-color);
        }
        :host([noninteractive]) {
          pointer-events: unset;
        }
      `,"rtl"===document.dir?l.AH`
            span.material-icons:first-of-type,
            span.material-icons:last-of-type {
              direction: rtl !important;
              --direction: rtl;
            }
          `:l.AH``]}}]}}),o.J)},1447:(e,t,i)=>{i.d(t,{K$:()=>r,dk:()=>l});var a=i(3167);const n=()=>i.e(568).then(i.bind(i,7568)),o=(e,t,i)=>new Promise((o=>{const r=t.cancel,l=t.confirm;(0,a.r)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:n,dialogParams:{...t,...i,cancel:()=>{o(!(null==i||!i.prompt)&&null),r&&r()},confirm:e=>{o(null==i||!i.prompt||e),l&&l(e)}}})})),r=(e,t)=>o(e,t),l=(e,t)=>o(e,t,{confirmation:!0})},3688:(e,t,i)=>{i.d(t,{F:()=>r,W:()=>o});var a=i(3167);const n=()=>document.querySelector("lcn-frontend").shadowRoot.querySelector("progress-dialog"),o=()=>i.e(548).then(i.bind(i,8548)),r=(e,t)=>((0,a.r)(e,"show-dialog",{dialogTag:"progress-dialog",dialogImport:o,dialogParams:t}),n)},4950:(e,t,i)=>{i.r(t),i.d(t,{LCNConfigDashboard:()=>q});var a=i(2659),n=i(9534),o=i(6349),r=i(9182),l=i(3799),s=(i(7777),i(8068),i(8597)),d=i(196),c=i(9484);(0,a.A)([(0,d.EM)("ha-clickable-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.MZ)()],key:"href",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disableHref",value(){return!1}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean,reflect:!0})],key:"openNewTab",value(){return!1}},{kind:"field",decorators:[(0,d.P)("a")],key:"_anchor",value:void 0},{kind:"method",key:"render",value:function(){const e=(0,n.A)(i,"render",this,3)([]),t=this.href||"";return s.qy`${this.disableHref?s.qy`<a>${e}</a>`:s.qy`<a target=${this.openNewTab?"_blank":""} href=${t}
          >${e}</a
        >`}`}},{kind:"method",key:"firstUpdated",value:function(){(0,n.A)(i,"firstUpdated",this,3)([]),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||this._anchor.click()}))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.A)(i,"styles",this),s.AH`
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
      `]}}]}}),c.$);i(7661),i(6038);var h=i(10),u=i(2994);(0,a.A)([(0,d.EM)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:u.Xr,value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"corner",value(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,d.MZ)()],key:"menuCorner",value(){return"START"}},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"x",value(){return null}},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"y",value(){return null}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"multi",value(){return!1}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"activatable",value(){return!1}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"fixed",value(){return!1}},{kind:"field",decorators:[(0,d.MZ)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value(){return!1}},{kind:"field",decorators:[(0,d.P)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return s.qy`
      <div @click=${this._handleClick}>
        <slot name="trigger" @slotchange=${this._setTriggerAria}></slot>
      </div>
      <mwc-menu
        .corner=${this.corner}
        .menuCorner=${this.menuCorner}
        .fixed=${this.fixed}
        .multi=${this.multi}
        .activatable=${this.activatable}
        .y=${this.y}
        .x=${this.x}
      >
        <slot></slot>
      </mwc-menu>
    `}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.A)(i,"firstUpdated",this,3)([e]),"rtl"===h.G.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
    `}}]}}),s.WF);i(8347),i(9222);(0,a.A)([(0,d.EM)("ha-help-tooltip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"position",value(){return"top"}},{kind:"method",key:"render",value:function(){return s.qy`
      <ha-svg-icon .path=${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}></ha-svg-icon>
      <simple-tooltip
        offset="4"
        .position=${this.position}
        .fitToVisibleBounds=${!0}
        >${this.label}</simple-tooltip
      >
    `}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`
      ha-svg-icon {
        --mdc-icon-size: var(--ha-help-tooltip-size, 14px);
        color: var(--ha-help-tooltip-color, var(--disabled-text-color));
      }
    `}}]}}),s.WF);i(6396),i(9887),i(2694);var p=i(4517),m=(i(5989),i(7905)),f=i(5355),g=i(1447),v=i(5081),y=i(3407),b=i(4933);/^((?!chrome|android).)*safari/i.test(navigator.userAgent);async function k(e,t){t.log.debug("Exporting config");const i={devices:[],entities:[]};i.devices=(await(0,y.Uc)(e,t.config_entry)).map((e=>({address:e.address})));for await(const o of i.devices){const a=await(0,y.U3)(e,t.config_entry,o.address);i.entities.push(...a)}const a=JSON.stringify(i,null,2),n=new Blob([a],{type:"application/json"});((e,t="")=>{const i=document.createElement("a");i.target="_blank",i.href=e,i.download=t,document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click")),document.body.removeChild(i)})(window.URL.createObjectURL(n),"lcn_config.json"),t.log.debug(`Exported ${i.devices.length} devices`),t.log.debug(`Exported ${i.entities.length} entities`)}async function _(e,t){const i=await new Promise(((e,t)=>{const i=document.createElement("input");i.type="file",i.accept=".json",i.onchange=t=>{const i=t.target.files[0];e(i)},i.click()})),a=await async function(e){return new Promise(((t,i)=>{const a=new FileReader;a.readAsText(e,"UTF-8"),a.onload=e=>{const i=JSON.parse(a.result.toString());t(i)}}))}(i);t.log.debug("Importing configuration");let n=0,o=0;for await(const r of a.devices)await(0,y.Im)(e,t.config_entry,r)?n++:t.log.debug(`Skipping device ${(0,b.p)(r.address)}. Already present.`);for await(const r of a.entities)await(0,y.d$)(e,t.config_entry,r)?o++:t.log.debug(`Skipping entity ${(0,b.p)(r.address)}-${r.name}. Already present.`);t.log.debug(`Sucessfully imported ${n} out of ${a.devices.length} devices.`),t.log.debug(`Sucessfully imported ${o} out of ${a.entities.length} entities.`)}var w=i(3314),C=i(7700),$=i(1445),x=i(7234);function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function A(){A=function(e,t){return new i(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function i(e,a,n){var o=RegExp(e,a);return t.set(o,n||t.get(e)),L(o,i.prototype)}function a(e,i){var a=t.get(i);return Object.keys(a).reduce((function(t,i){var n=a[i];if("number"==typeof n)t[i]=e[n];else{for(var o=0;void 0===e[n[o]]&&o+1<n.length;)o++;t[i]=e[n[o]]}return t}),Object.create(null))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(i,RegExp),i.prototype.exec=function(t){var i=e.exec.call(this,t);if(i){i.groups=a(i,this);var n=i.indices;n&&(n.groups=a(n,this))}return i},i.prototype[Symbol.replace]=function(i,n){if("string"==typeof n){var o=t.get(this);return e[Symbol.replace].call(this,i,n.replace(/\$<([^>]+)>/g,(function(e,t){var i=o[t];return"$"+(Array.isArray(i)?i.join("$"):i)})))}if("function"==typeof n){var r=this;return e[Symbol.replace].call(this,i,(function(){var e=arguments;return"object"!=(0,x.A)(e[e.length-1])&&(e=[].slice.call(e)).push(a(e,r)),n.apply(this,e)}))}return e[Symbol.replace].call(this,i,n)},A.apply(this,arguments)}const S=A(/([A-F0-9]{2}).([A-F0-9])([A-F0-9]{2})([A-F0-9]{4})?/,{year:1,month:2,day:3,serial:4});function H(e){const t=S.exec(e.toString(16).toUpperCase());if(!t)throw new Error("Wrong serial number");const i=void 0===t[4];return{year:Number("0x"+t[1])+1990,month:Number("0x"+t[2]),day:Number("0x"+t[3]),serial:i?void 0:Number("0x"+t[4])}}var M=i(3167);const z=()=>Promise.all([i.e(640),i.e(67)]).then(i.bind(i,3024));var N=i(3688);const E="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";let q=(0,a.A)([(0,d.EM)("lcn-devices-page")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"lcn",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,d.wk)(),(0,o.Fg)({context:r.h,subscribe:!0})],key:"_deviceConfigs",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_selected",value(){return[]}},{kind:"field",decorators:[(0,m.I)({storage:"sessionStorage",key:"lcn-devices-dev-options",state:!0,subscribe:!1})],key:"_devOptionsEnabled",value(){return!1}},{kind:"field",decorators:[(0,m.I)({storage:"sessionStorage",key:"lcn-devices-table-search",state:!0,subscribe:!1})],key:"_filter",value(){return""}},{kind:"field",decorators:[(0,m.I)({storage:"sessionStorage",key:"lcn-devices-table-sort",state:!1,subscribe:!1})],key:"_activeSorting",value:void 0},{kind:"field",decorators:[(0,m.I)({key:"lcn-devices-table-column-order",state:!1,subscribe:!1})],key:"_activeColumnOrder",value:void 0},{kind:"field",decorators:[(0,m.I)({key:"lcn-devices-table-hidden-columns",state:!1,subscribe:!1})],key:"_activeHiddenColumns",value:void 0},{kind:"field",decorators:[(0,d.nJ)("hass-tabs-subpage-data-table")],key:"_dataTable",value:void 0},{kind:"get",key:"_extDeviceConfigs",value:function(){return(0,v.A)(((e=this._deviceConfigs)=>e.map((e=>({...e,unique_id:(0,b.p)(e.address),address_id:e.address[1],segment_id:e.address[0],type:e.address[2]?this.lcn.localize("group"):this.lcn.localize("module")})))))()}},{kind:"field",key:"_columns",value(){return(0,v.A)((()=>({icon:{title:"",label:"Icon",type:"icon",showNarrow:!0,moveable:!1,template:e=>s.qy` <ha-svg-icon
            .path=${e.address[2]?"M10.25,2C10.44,2 10.61,2.11 10.69,2.26L12.91,6.22L13,6.5L12.91,6.78L10.69,10.74C10.61,10.89 10.44,11 10.25,11H5.75C5.56,11 5.39,10.89 5.31,10.74L3.09,6.78L3,6.5L3.09,6.22L5.31,2.26C5.39,2.11 5.56,2 5.75,2H10.25M10.25,13C10.44,13 10.61,13.11 10.69,13.26L12.91,17.22L13,17.5L12.91,17.78L10.69,21.74C10.61,21.89 10.44,22 10.25,22H5.75C5.56,22 5.39,21.89 5.31,21.74L3.09,17.78L3,17.5L3.09,17.22L5.31,13.26C5.39,13.11 5.56,13 5.75,13H10.25M19.5,7.5C19.69,7.5 19.86,7.61 19.94,7.76L22.16,11.72L22.25,12L22.16,12.28L19.94,16.24C19.86,16.39 19.69,16.5 19.5,16.5H15C14.81,16.5 14.64,16.39 14.56,16.24L12.34,12.28L12.25,12L12.34,11.72L14.56,7.76C14.64,7.61 14.81,7.5 15,7.5H19.5Z":"M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z"}
          ></ha-svg-icon>`},name:{main:!0,title:this.lcn.localize("name"),sortable:!0,filterable:!0,direction:"asc",flex:2},segment_id:{title:this.lcn.localize("segment"),sortable:!0,filterable:!0},address_id:{title:this.lcn.localize("id"),sortable:!0,filterable:!0},type:{title:this.lcn.localize("type"),sortable:!0,filterable:!0},hardware_serial:{title:this.lcn.localize("hardware-serial"),sortable:!0,filterable:!0,defaultHidden:!0,template:e=>this.renderHardwareSerial(e.hardware_serial)},software_serial:{title:this.lcn.localize("software-serial"),sortable:!0,filterable:!0,defaultHidden:!0,template:e=>this.renderSoftwareSerial(e.software_serial)},hardware_type:{title:this.lcn.localize("hardware-type"),sortable:!0,filterable:!0,defaultHidden:!0,template:e=>{const t=function(e){switch(e){case 1:return"LCN-SW1.0";case 2:return"LCN-SW1.1";case 3:return"LCN-UP1.0";case 4:case 10:return"LCN-UP2";case 5:return"LCN-SW2";case 6:return"LCN-UP-Profi1-Plus";case 7:return"LCN-DI12";case 8:return"LCN-HU";case 9:return"LCN-SH";case 11:return"LCN-UPP";case 12:return"LCN-SK";case 14:return"LCN-LD";case 15:return"LCN-SH-Plus";case 17:return"LCN-UPS";case 18:return"LCN_UPS24V";case 19:return"LCN-GTM";case 20:return"LCN-SHS";case 21:return"LCN-ESD";case 22:return"LCN-EB2";case 23:return"LCN-MRS";case 24:return"LCN-EB11";case 25:return"LCN-UMR";case 26:return"LCN-UPU";case 27:return"LCN-UMR24V";case 28:return"LCN-SHD";case 29:return"LCN-SHU";case 30:return"LCN-SR6";case 31:return"LCN-UMF";case 32:return"LCN-WBH"}}(e.hardware_type);return t||"-"}},delete:{title:this.lcn.localize("delete"),showNarrow:!0,type:"icon-button",template:e=>s.qy`
            <ha-icon-button
              id=${"delete-device-"+e.unique_id}
              .label=${this.lcn.localize("dashboard-devices-table-delete")}
              .path=${E}
              @click=${t=>this._deleteDevices([e])}
            ></ha-icon-button>
            <simple-tooltip
              animation-delay="0"
              offset="0"
              for=${"delete-device-"+e.unique_id}
            >
              ${this.lcn.localize("dashboard-devices-table-delete")}
            </simple-tooltip>
          `}})))}},{kind:"method",key:"firstUpdated",value:async function(e){(0,n.A)(i,"firstUpdated",this,3)([e]),(0,N.W)(),z()}},{kind:"method",key:"updated",value:async function(e){(0,n.A)(i,"updated",this,3)([e]),this._dataTable.then($.z)}},{kind:"method",key:"renderSoftwareSerial",value:function(e){let t;try{t=H(e)}catch(i){return s.qy`-`}return s.qy`
      ${e.toString(16).toUpperCase()}
      <simple-tooltip animation-delay="0">
        ${this.lcn.localize("firmware-date",{year:t.year,month:t.month,day:t.day})}
      </simple-tooltip>
    `}},{kind:"method",key:"renderHardwareSerial",value:function(e){let t;try{t=H(e)}catch(i){return s.qy`-`}return s.qy`
      ${e.toString(16).toUpperCase()}
      <simple-tooltip animation-delay="0">
        ${this.lcn.localize("hardware-date",{year:t.year,month:t.month,day:t.day})}
        <br />
        ${this.lcn.localize("hardware-number",{serial:t.serial})}
      </simple-tooltip>
    `}},{kind:"method",key:"render",value:function(){return this.hass&&this.lcn&&this._deviceConfigs?s.qy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        back-path="/config/integrations/integration/lcn"
        noDataText=${this.lcn.localize("dashboard-devices-no-data-text")}
        .route=${this.route}
        .tabs=${f.p}
        .localizeFunc=${this.lcn.localize}
        .columns=${this._columns()}
        .data=${this._extDeviceConfigs}
        selectable
        .selected=${this._selected.length}
        .initialSorting=${this._activeSorting}
        .columnOrder=${this._activeColumnOrder}
        .hiddenColumns=${this._activeHiddenColumns}
        @columns-changed=${this._handleColumnsChanged}
        @sorting-changed=${this._handleSortingChanged}
        @selection-changed=${this._handleSelectionChanged}
        clickable
        .filter=${this._filter}
        @search-changed=${this._handleSearchChange}
        @row-click=${this._rowClicked}
        id="unique_id"
        .hasfab
        class=${this.narrow?"narrow":""}
      >
        <ha-button-menu slot="toolbar-icon">
          <ha-icon-button .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"} .label="Actions" slot="trigger"></ha-icon-button>
          <ha-list-item @click=${this._scanDevices}>
            ${this.lcn.localize("dashboard-devices-scan")}
          </ha-list-item>

          <li divider role="separator"></li>

          <ha-list-item>
            <ha-formfield
              alignEnd
              spaceBetween
              .label=${this.lcn.localize("dev-options")}
              @click=${p.d}
            >
              <ha-checkbox
                name="dev-switch"
                .checked=${this._devOptionsEnabled}
                @change=${this._toggleDevOptions}
              ></ha-checkbox>
              <span slot="label" class="form-label"> ${this.lcn.localize("dev-options")} </span>
            </ha-formfield>
          </ha-list-item>

          ${this._devOptionsEnabled?s.qy` <ha-list-item @click=${this._importConfig}>
                  <span class="dev-item"> ${this.lcn.localize("import-config")} </span>
                </ha-list-item>
                <ha-list-item @click=${this._exportConfig}>
                  <span class="dev-item"> ${this.lcn.localize("export-config")} </span>
                </ha-list-item>`:s.s6}
        </ha-button-menu>

        <div class="header-btns" slot="selection-bar">
          ${this.narrow?s.qy`
                <ha-icon-button
                  class="warning"
                  id="remove-btn"
                  @click=${this._deleteSelected}
                  .path=${E}
                  .label=${this.lcn.localize("delete-selected")}
                ></ha-icon-button>
                <ha-help-tooltip .label=${this.lcn.localize("delete-selected")} )}>
                </ha-help-tooltip>
              `:s.qy`
                <mwc-button @click=${this._deleteSelected} class="warning">
                  ${this.lcn.localize("delete-selected")}
                </mwc-button>
              `}
        </div>

        <ha-fab
          slot="fab"
          .label=${this.lcn.localize("dashboard-devices-add")}
          extended
          @click=${this._addDevice}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage-data-table>
    `:s.s6}},{kind:"method",key:"getDeviceConfigByUniqueId",value:function(e){const t=(0,b.d)(e);return this._deviceConfigs.find((e=>e.address[0]===t[0]&&e.address[1]===t[1]&&e.address[2]===t[2]))}},{kind:"method",key:"_rowClicked",value:function(e){const t=e.detail.id;(0,w.o)(`/lcn/entities?address=${t}`,{replace:!0})}},{kind:"method",key:"_toggleDevOptions",value:function(e){this._devOptionsEnabled=!this._devOptionsEnabled}},{kind:"method",key:"_scanDevices",value:async function(){const e=(0,N.F)(this,{title:this.lcn.localize("dashboard-dialog-scan-devices-title"),text:this.lcn.localize("dashboard-dialog-scan-devices-text")});await(0,y.$E)(this.hass,this.lcn.config_entry),(0,C.R)(this),await e().closeDialog()}},{kind:"method",key:"_addDevice",value:function(){var e,t;e=this,t={lcn:this.lcn,createDevice:e=>this._createDevice(e)},(0,M.r)(e,"show-dialog",{dialogTag:"lcn-create-device-dialog",dialogImport:z,dialogParams:t})}},{kind:"method",key:"_createDevice",value:async function(e){const t=(0,N.F)(this,{title:this.lcn.localize("dashboard-devices-dialog-request-info-title"),text:s.qy`
        ${this.lcn.localize("dashboard-devices-dialog-request-info-text")}
        <br />
        ${this.lcn.localize("dashboard-devices-dialog-request-info-hint")}
      `});if(!(await(0,y.Im)(this.hass,this.lcn.config_entry,e)))return t().closeDialog(),void(await(0,g.K$)(this,{title:this.lcn.localize("dashboard-devices-dialog-add-alert-title"),text:s.qy`${this.lcn.localize("dashboard-devices-dialog-add-alert-text")}
          (${e.address[2]?this.lcn.localize("group"):this.lcn.localize("module")}:
          ${this.lcn.localize("segment")} ${e.address[0]}, ${this.lcn.localize("id")}
          ${e.address[1]})
          <br />
          ${this.lcn.localize("dashboard-devices-dialog-add-alert-hint")}`}));(0,C.R)(this),t().closeDialog()}},{kind:"method",key:"_deleteSelected",value:async function(){const e=this._selected.map((e=>this.getDeviceConfigByUniqueId(e)));await this._deleteDevices(e),await this._clearSelection()}},{kind:"method",key:"_deleteDevices",value:async function(e){if(!(e.length>0)||await(0,g.dk)(this,{title:this.lcn.localize("dashboard-devices-dialog-delete-devices-title"),text:s.qy`
          ${this.lcn.localize("dashboard-devices-dialog-delete-text",{count:e.length})}
          <br />
          ${this.lcn.localize("dashboard-devices-dialog-delete-warning")}
        `})){for await(const t of e)await(0,y.Yl)(this.hass,this.lcn.config_entry,t);(0,C.R)(this),(0,C.u)(this)}}},{kind:"method",key:"_importConfig",value:async function(){await _(this.hass,this.lcn),(0,C.R)(this),(0,C.u)(this),window.location.reload()}},{kind:"method",key:"_exportConfig",value:async function(){k(this.hass,this.lcn)}},{kind:"method",key:"_clearSelection",value:async function(){(await this._dataTable).clearSelection()}},{kind:"method",key:"_handleSortingChanged",value:function(e){this._activeSorting=e.detail}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value}},{kind:"method",key:"_handleColumnsChanged",value:function(e){this._activeColumnOrder=e.detail.columnOrder,this._activeHiddenColumns=e.detail.hiddenColumns}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[l.RF,s.AH`
        hass-tabs-subpage-data-table {
          --data-table-row-height: 60px;
        }
        hass-tabs-subpage-data-table.narrow {
          --data-table-row-height: 72px;
        }
        .form-label {
          font-size: 1rem;
          cursor: pointer;
        }
        .dev-item {
          margin-left: 20px;
        }
      `]}}]}}),s.WF)}};
//# sourceMappingURL=zWg2Ablt.js.map