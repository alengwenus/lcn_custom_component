export const __webpack_id__="915";export const __webpack_ids__=["915"];export const __webpack_modules__={6271:function(t,i,a){var e=a(9868),o=a(3596),s=a(6667),n=a(5195),l=a(4922),r=a(1991);let d;o.l.addInitializer((async t=>{await t.updateComplete;const i=t;i.dialog.prepend(i.scrim),i.scrim.style.inset=0,i.scrim.style.zIndex=0;const{getOpenAnimation:a,getCloseAnimation:e}=i;i.getOpenAnimation=()=>{const t=a.call(void 0);return t.container=[...t.container??[],...t.dialog??[]],t.dialog=[],t},i.getCloseAnimation=()=>{const t=e.call(void 0);return t.container=[...t.container??[],...t.dialog??[]],t.dialog=[],t}}));class c extends o.l{async _handleOpen(t){if(t.preventDefault(),this._polyfillDialogRegistered)return;this._polyfillDialogRegistered=!0,this._loadPolyfillStylesheet("/static/polyfills/dialog-polyfill.css");const i=this.shadowRoot?.querySelector("dialog");(await d).default.registerDialog(i),this.removeEventListener("open",this._handleOpen),this.show()}async _loadPolyfillStylesheet(t){const i=document.createElement("link");return i.rel="stylesheet",i.href=t,new Promise(((a,e)=>{i.onload=()=>a(),i.onerror=()=>e(new Error(`Stylesheet failed to load: ${t}`)),this.shadowRoot?.appendChild(i)}))}_handleCancel(t){if(this.disableCancelAction){t.preventDefault();const i=this.shadowRoot?.querySelector("dialog .container");void 0!==this.animate&&i?.animate([{transform:"rotate(-1deg)","animation-timing-function":"ease-in"},{transform:"rotate(1.5deg)","animation-timing-function":"ease-out"},{transform:"rotate(0deg)","animation-timing-function":"ease-in"}],{duration:200,iterations:2})}}constructor(){super(),this.disableCancelAction=!1,this._polyfillDialogRegistered=!1,this.addEventListener("cancel",this._handleCancel),"function"!=typeof HTMLDialogElement&&(this.addEventListener("open",this._handleOpen),d||(d=a.e("175").then(a.bind(a,6770)))),void 0===this.animate&&(this.quick=!0),void 0===this.animate&&(this.quick=!0)}}c.styles=[s.R,l.AH`
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
    `],(0,e.__decorate)([(0,r.MZ)({attribute:"disable-cancel-action",type:Boolean})],c.prototype,"disableCancelAction",void 0),c=(0,e.__decorate)([(0,r.EM)("ha-md-dialog")],c);n.T,n.N},478:function(t,i,a){a.a(t,(async function(t,e){try{a.r(i);var o=a(9868),s=a(4922),n=a(1991),l=a(3802),r=a(3120),d=a(6943),c=(a(6997),a(6271),a(5635),a(1934),t([d]));d=(c.then?(await c)():c)[0];const h="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16";class p extends s.WF{async showDialog(t){this._closePromise&&await this._closePromise,this._params=t}closeDialog(){return!this._params?.confirmation&&!this._params?.prompt&&(!this._params||(this._dismiss(),!0))}render(){if(!this._params)return s.s6;const t=this._params.confirmation||!!this._params.prompt,i=this._params.title||this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title");return s.qy`
      <ha-md-dialog
        open
        .disableCancelAction=${t}
        @closed=${this._dialogClosed}
        type="alert"
        aria-labelledby="dialog-box-title"
        aria-describedby="dialog-box-description"
      >
        <div slot="headline">
          <span .title=${i} id="dialog-box-title">
            ${this._params.warning?s.qy`<ha-svg-icon
                  .path=${h}
                  style="color: var(--warning-color)"
                ></ha-svg-icon> `:s.s6}
            ${i}
          </span>
        </div>
        <div slot="content" id="dialog-box-description">
          ${this._params.text?s.qy` <p>${this._params.text}</p> `:""}
          ${this._params.prompt?s.qy`
                <ha-textfield
                  dialogInitialFocus
                  value=${(0,l.J)(this._params.defaultValue)}
                  .placeholder=${this._params.placeholder}
                  .label=${this._params.inputLabel?this._params.inputLabel:""}
                  .type=${this._params.inputType?this._params.inputType:"text"}
                  .min=${this._params.inputMin}
                  .max=${this._params.inputMax}
                ></ha-textfield>
              `:""}
        </div>
        <div slot="actions">
          ${t?s.qy`
                <ha-button
                  @click=${this._dismiss}
                  ?autofocus=${!this._params.prompt&&this._params.destructive}
                  appearance="plain"
                >
                  ${this._params.dismissText?this._params.dismissText:this.hass.localize("ui.common.cancel")}
                </ha-button>
              `:s.s6}
          <ha-button
            @click=${this._confirm}
            ?autofocus=${!this._params.prompt&&!this._params.destructive}
            variant=${this._params.destructive?"danger":"brand"}
          >
            ${this._params.confirmText?this._params.confirmText:this.hass.localize("ui.common.ok")}
          </ha-button>
        </div>
      </ha-md-dialog>
    `}_cancel(){this._params?.cancel&&this._params.cancel()}_dismiss(){this._closeState="canceled",this._cancel(),this._closeDialog()}_confirm(){this._closeState="confirmed",this._params.confirm&&this._params.confirm(this._textField?.value),this._closeDialog()}_closeDialog(){(0,r.r)(this,"dialog-closed",{dialog:this.localName}),this._dialog?.close(),this._closePromise=new Promise((t=>{this._closeResolve=t}))}_dialogClosed(){this._closeState||((0,r.r)(this,"dialog-closed",{dialog:this.localName}),this._cancel()),this._closeState=void 0,this._params=void 0,this._closeResolve?.(),this._closeResolve=void 0}}p.styles=s.AH`
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
  `,(0,o.__decorate)([(0,n.MZ)({attribute:!1})],p.prototype,"hass",void 0),(0,o.__decorate)([(0,n.wk)()],p.prototype,"_params",void 0),(0,o.__decorate)([(0,n.wk)()],p.prototype,"_closeState",void 0),(0,o.__decorate)([(0,n.P)("ha-textfield")],p.prototype,"_textField",void 0),(0,o.__decorate)([(0,n.P)("ha-md-dialog")],p.prototype,"_dialog",void 0),p=(0,o.__decorate)([(0,n.EM)("dialog-box")],p),e()}catch(h){e(h)}}))}};
//# sourceMappingURL=915.33a6d69c83908176.js.map