"use strict";(self.webpackChunklcn_frontend=self.webpackChunklcn_frontend||[]).push([["915"],{76271:function(t,a,i){i(46852),i(35748),i(5934),i(95013);var e=i(69868),o=i(33596),s=i(26667),n=i(25195),l=i(84922),r=i(11991);let d,c;o.l.addInitializer((async t=>{await t.updateComplete;const a=t;a.dialog.prepend(a.scrim),a.scrim.style.inset=0,a.scrim.style.zIndex=0;const{getOpenAnimation:i,getCloseAnimation:e}=a;a.getOpenAnimation=()=>{var t,a;const e=i.call(void 0);return e.container=[...null!==(t=e.container)&&void 0!==t?t:[],...null!==(a=e.dialog)&&void 0!==a?a:[]],e.dialog=[],e},a.getCloseAnimation=()=>{var t,a;const i=e.call(void 0);return i.container=[...null!==(t=i.container)&&void 0!==t?t:[],...null!==(a=i.dialog)&&void 0!==a?a:[]],i.dialog=[],i}}));class h extends o.l{async _handleOpen(t){var a;if(t.preventDefault(),this._polyfillDialogRegistered)return;this._polyfillDialogRegistered=!0,this._loadPolyfillStylesheet("/static/polyfills/dialog-polyfill.css");const i=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("dialog");(await c).default.registerDialog(i),this.removeEventListener("open",this._handleOpen),this.show()}async _loadPolyfillStylesheet(t){const a=document.createElement("link");return a.rel="stylesheet",a.href=t,new Promise(((i,e)=>{var o;a.onload=()=>i(),a.onerror=()=>e(new Error(`Stylesheet failed to load: ${t}`)),null===(o=this.shadowRoot)||void 0===o||o.appendChild(a)}))}_handleCancel(t){if(this.disableCancelAction){var a;t.preventDefault();const i=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("dialog .container");void 0!==this.animate&&(null==i||i.animate([{transform:"rotate(-1deg)","animation-timing-function":"ease-in"},{transform:"rotate(1.5deg)","animation-timing-function":"ease-out"},{transform:"rotate(0deg)","animation-timing-function":"ease-in"}],{duration:200,iterations:2}))}}constructor(){super(),this.disableCancelAction=!1,this._polyfillDialogRegistered=!1,this.addEventListener("cancel",this._handleCancel),"function"!=typeof HTMLDialogElement&&(this.addEventListener("open",this._handleOpen),c||(c=i.e("175").then(i.bind(i,16770)))),void 0===this.animate&&(this.quick=!0),void 0===this.animate&&(this.quick=!0)}}h.styles=[s.R,(0,l.AH)(d||(d=(t=>t)`
      :host {
        --md-dialog-container-color: var(--card-background-color);
        --md-dialog-headline-color: var(--primary-text-color);
        --md-dialog-supporting-text-color: var(--primary-text-color);
        --md-sys-color-scrim: #000000;

        --md-dialog-headline-weight: var(--ha-font-weight-normal);
        --md-dialog-headline-size: var(--ha-font-size-xl);
        --md-dialog-supporting-text-size: var(--ha-font-size-m);
        --md-dialog-supporting-text-line-height: var(--ha-line-height-normal);
        --md-divider-color: var(--divider-color);
      }

      :host([type="alert"]) {
        min-width: 320px;
      }

      @media all and (max-width: 450px), all and (max-height: 500px) {
        :host(:not([type="alert"])) {
          min-width: var(--mdc-dialog-min-width, 100vw);
          min-height: 100%;
          max-height: 100%;
          --md-dialog-container-shape: 0;
        }

        .container {
          padding-top: var(--safe-area-inset-top);
          padding-bottom: var(--safe-area-inset-bottom);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
        }
      }

      ::slotted(ha-dialog-header[slot="headline"]) {
        display: contents;
      }

      slot[name="actions"]::slotted(*) {
        padding: 16px;
      }

      .scroller {
        overflow: var(--dialog-content-overflow, auto);
      }

      slot[name="content"]::slotted(*) {
        padding: var(--dialog-content-padding, 24px);
      }
      .scrim {
        z-index: 10; /* overlay navigation */
      }
    `))],(0,e.__decorate)([(0,r.MZ)({attribute:"disable-cancel-action",type:Boolean})],h.prototype,"disableCancelAction",void 0),h=(0,e.__decorate)([(0,r.EM)("ha-md-dialog")],h);Object.assign(Object.assign({},n.T),{},{dialog:[[[{transform:"translateY(50px)"},{transform:"translateY(0)"}],{duration:500,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}]]}),Object.assign(Object.assign({},n.N),{},{dialog:[[[{transform:"translateY(0)"},{transform:"translateY(50px)"}],{duration:150,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]]})},30478:function(t,a,i){i.a(t,(async function(t,e){try{i.r(a);i(5934);var o=i(69868),s=i(84922),n=i(11991),l=i(13802),r=i(73120),d=i(76943),c=(i(96997),i(76271),i(95635),i(11934),t([d]));d=(c.then?(await c)():c)[0];let h,p,m,g,_,v,u=t=>t;const f="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16";class y extends s.WF{async showDialog(t){this._closePromise&&await this._closePromise,this._params=t}closeDialog(){var t,a;return!(null!==(t=this._params)&&void 0!==t&&t.confirmation||null!==(a=this._params)&&void 0!==a&&a.prompt)&&(!this._params||(this._dismiss(),!0))}render(){if(!this._params)return s.s6;const t=this._params.confirmation||!!this._params.prompt,a=this._params.title||this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title");return(0,s.qy)(h||(h=u`
      <ha-md-dialog
        open
        .disableCancelAction=${0}
        @closed=${0}
        type="alert"
        aria-labelledby="dialog-box-title"
        aria-describedby="dialog-box-description"
      >
        <div slot="headline">
          <span .title=${0} id="dialog-box-title">
            ${0}
            ${0}
          </span>
        </div>
        <div slot="content" id="dialog-box-description">
          ${0}
          ${0}
        </div>
        <div slot="actions">
          ${0}
          <ha-button
            @click=${0}
            ?autofocus=${0}
            variant=${0}
          >
            ${0}
          </ha-button>
        </div>
      </ha-md-dialog>
    `),t,this._dialogClosed,a,this._params.warning?(0,s.qy)(p||(p=u`<ha-svg-icon
                  .path=${0}
                  style="color: var(--warning-color)"
                ></ha-svg-icon> `),f):s.s6,a,this._params.text?(0,s.qy)(m||(m=u` <p>${0}</p> `),this._params.text):"",this._params.prompt?(0,s.qy)(g||(g=u`
                <ha-textfield
                  dialogInitialFocus
                  value=${0}
                  .placeholder=${0}
                  .label=${0}
                  .type=${0}
                  .min=${0}
                  .max=${0}
                ></ha-textfield>
              `),(0,l.J)(this._params.defaultValue),this._params.placeholder,this._params.inputLabel?this._params.inputLabel:"",this._params.inputType?this._params.inputType:"text",this._params.inputMin,this._params.inputMax):"",t?(0,s.qy)(_||(_=u`
                <ha-button
                  @click=${0}
                  ?autofocus=${0}
                  appearance="plain"
                >
                  ${0}
                </ha-button>
              `),this._dismiss,!this._params.prompt&&this._params.destructive,this._params.dismissText?this._params.dismissText:this.hass.localize("ui.common.cancel")):s.s6,this._confirm,!this._params.prompt&&!this._params.destructive,this._params.destructive?"danger":"brand",this._params.confirmText?this._params.confirmText:this.hass.localize("ui.common.ok"))}_cancel(){var t;null!==(t=this._params)&&void 0!==t&&t.cancel&&this._params.cancel()}_dismiss(){this._closeState="canceled",this._cancel(),this._closeDialog()}_confirm(){var t;(this._closeState="confirmed",this._params.confirm)&&this._params.confirm(null===(t=this._textField)||void 0===t?void 0:t.value);this._closeDialog()}_closeDialog(){var t;(0,r.r)(this,"dialog-closed",{dialog:this.localName}),null===(t=this._dialog)||void 0===t||t.close(),this._closePromise=new Promise((t=>{this._closeResolve=t}))}_dialogClosed(){var t;this._closeState||((0,r.r)(this,"dialog-closed",{dialog:this.localName}),this._cancel()),this._closeState=void 0,this._params=void 0,null===(t=this._closeResolve)||void 0===t||t.call(this),this._closeResolve=void 0}}y.styles=(0,s.AH)(v||(v=u`
    :host([inert]) {
      pointer-events: initial !important;
      cursor: initial !important;
    }
    a {
      color: var(--primary-color);
    }
    p {
      margin: 0;
      color: var(--primary-text-color);
    }
    .no-bottom-padding {
      padding-bottom: 0;
    }
    .secondary {
      color: var(--secondary-text-color);
    }
    ha-textfield {
      width: 100%;
    }
  `)),(0,o.__decorate)([(0,n.MZ)({attribute:!1})],y.prototype,"hass",void 0),(0,o.__decorate)([(0,n.wk)()],y.prototype,"_params",void 0),(0,o.__decorate)([(0,n.wk)()],y.prototype,"_closeState",void 0),(0,o.__decorate)([(0,n.P)("ha-textfield")],y.prototype,"_textField",void 0),(0,o.__decorate)([(0,n.P)("ha-md-dialog")],y.prototype,"_dialog",void 0),y=(0,o.__decorate)([(0,n.EM)("dialog-box")],y),e()}catch(h){e(h)}}))}}]);
//# sourceMappingURL=915.a1e30fa2d8bb1247.js.map