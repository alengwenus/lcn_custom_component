export const __webpack_id__="810";export const __webpack_ids__=["810"];export const __webpack_modules__={763:function(t,e,o){o.d(e,{x:()=>a});const a=(t,e)=>t&&t.config.components.includes(e)},3490:function(t,e,o){o.d(e,{I:()=>r});class a{addFromStorage(t){if(!this._storage[t]){const e=this.storage.getItem(t);e&&(this._storage[t]=JSON.parse(e))}}subscribeChanges(t,e){return this._listeners[t]?this._listeners[t].push(e):this._listeners[t]=[e],()=>{this.unsubscribeChanges(t,e)}}unsubscribeChanges(t,e){if(!(t in this._listeners))return;const o=this._listeners[t].indexOf(e);-1!==o&&this._listeners[t].splice(o,1)}hasKey(t){return t in this._storage}getValue(t){return this._storage[t]}setValue(t,e){const o=this._storage[t];this._storage[t]=e;try{void 0===e?this.storage.removeItem(t):this.storage.setItem(t,JSON.stringify(e))}catch(a){}finally{this._listeners[t]&&this._listeners[t].forEach((t=>t(o,e)))}}constructor(t=window.localStorage){this._storage={},this._listeners={},this.storage=t,this.storage===window.localStorage&&window.addEventListener("storage",(t=>{t.key&&this.hasKey(t.key)&&(this._storage[t.key]=t.newValue?JSON.parse(t.newValue):t.newValue,this._listeners[t.key]&&this._listeners[t.key].forEach((e=>e(t.oldValue?JSON.parse(t.oldValue):t.oldValue,this._storage[t.key]))))}))}}const i={};function r(t){return(e,o)=>{if("object"==typeof o)throw new Error("This decorator does not support this compilation type.");const r=t.storage||"localStorage";let l;r&&r in i?l=i[r]:(l=new a(window[r]),i[r]=l);const n=t.key||String(o);l.addFromStorage(n);const s=!1!==t.subscribe?t=>l.subscribeChanges(n,((e,a)=>{t.requestUpdate(o,e)})):void 0,d=()=>l.hasKey(n)?t.deserializer?t.deserializer(l.getValue(n)):l.getValue(n):void 0,c=(e,a)=>{let i;t.state&&(i=d()),l.setValue(n,t.serializer?t.serializer(a):a),t.state&&e.requestUpdate(o,i)},h=e.performUpdate;if(e.performUpdate=function(){this.__initialized=!0,h.call(this)},t.subscribe){const t=e.connectedCallback,o=e.disconnectedCallback;e.connectedCallback=function(){t.call(this);const e=this;e.__unbsubLocalStorage||(e.__unbsubLocalStorage=s?.(this))},e.disconnectedCallback=function(){o.call(this);this.__unbsubLocalStorage?.(),this.__unbsubLocalStorage=void 0}}const p=Object.getOwnPropertyDescriptor(e,o);let u;if(void 0===p)u={get(){return d()},set(t){(this.__initialized||void 0===d())&&c(this,t)},configurable:!0,enumerable:!0};else{const t=p.set;u={...p,get(){return d()},set(e){(this.__initialized||void 0===d())&&c(this,e),t?.call(this,e)}}}Object.defineProperty(e,o,u)}}},6943:function(t,e,o){o.a(t,(async function(t,e){try{var a=o(9868),i=o(498),r=o(4922),l=o(1991),n=t([i]);i=(n.then?(await n)():n)[0];class s extends i.A{static get styles(){return[i.A.styles,r.AH`
        :host {
          --wa-form-control-padding-inline: 16px;
          --wa-font-weight-action: var(--ha-font-weight-medium);
          --wa-form-control-border-radius: var(
            --ha-button-border-radius,
            var(--ha-border-radius-pill)
          );

          --wa-form-control-height: var(
            --ha-button-height,
            var(--button-height, 40px)
          );
        }
        .button {
          font-size: var(--ha-font-size-m);
          line-height: 1;

          transition: background-color 0.15s ease-in-out;
        }

        :host([size="small"]) .button {
          --wa-form-control-height: var(
            --ha-button-height,
            var(--button-height, 32px)
          );
          font-size: var(--wa-font-size-s, var(--ha-font-size-m));
          --wa-form-control-padding-inline: 12px;
        }

        :host([variant="brand"]) {
          --button-color-fill-normal-active: var(
            --ha-color-fill-primary-normal-active
          );
          --button-color-fill-normal-hover: var(
            --ha-color-fill-primary-normal-hover
          );
          --button-color-fill-loud-active: var(
            --ha-color-fill-primary-loud-active
          );
          --button-color-fill-loud-hover: var(
            --ha-color-fill-primary-loud-hover
          );
        }

        :host([variant="neutral"]) {
          --button-color-fill-normal-active: var(
            --ha-color-fill-neutral-normal-active
          );
          --button-color-fill-normal-hover: var(
            --ha-color-fill-neutral-normal-hover
          );
          --button-color-fill-loud-active: var(
            --ha-color-fill-neutral-loud-active
          );
          --button-color-fill-loud-hover: var(
            --ha-color-fill-neutral-loud-hover
          );
        }

        :host([variant="success"]) {
          --button-color-fill-normal-active: var(
            --ha-color-fill-success-normal-active
          );
          --button-color-fill-normal-hover: var(
            --ha-color-fill-success-normal-hover
          );
          --button-color-fill-loud-active: var(
            --ha-color-fill-success-loud-active
          );
          --button-color-fill-loud-hover: var(
            --ha-color-fill-success-loud-hover
          );
        }

        :host([variant="warning"]) {
          --button-color-fill-normal-active: var(
            --ha-color-fill-warning-normal-active
          );
          --button-color-fill-normal-hover: var(
            --ha-color-fill-warning-normal-hover
          );
          --button-color-fill-loud-active: var(
            --ha-color-fill-warning-loud-active
          );
          --button-color-fill-loud-hover: var(
            --ha-color-fill-warning-loud-hover
          );
        }

        :host([variant="danger"]) {
          --button-color-fill-normal-active: var(
            --ha-color-fill-danger-normal-active
          );
          --button-color-fill-normal-hover: var(
            --ha-color-fill-danger-normal-hover
          );
          --button-color-fill-loud-active: var(
            --ha-color-fill-danger-loud-active
          );
          --button-color-fill-loud-hover: var(
            --ha-color-fill-danger-loud-hover
          );
        }

        :host([appearance~="plain"]) .button {
          color: var(--wa-color-on-normal);
          background-color: transparent;
        }
        :host([appearance~="plain"]) .button.disabled {
          background-color: transparent;
          color: var(--ha-color-on-disabled-quiet);
        }

        :host([appearance~="outlined"]) .button.disabled {
          background-color: transparent;
          color: var(--ha-color-on-disabled-quiet);
        }

        @media (hover: hover) {
          :host([appearance~="filled"])
            .button:not(.disabled):not(.loading):hover {
            background-color: var(--button-color-fill-normal-hover);
          }
          :host([appearance~="accent"])
            .button:not(.disabled):not(.loading):hover {
            background-color: var(--button-color-fill-loud-hover);
          }
          :host([appearance~="plain"])
            .button:not(.disabled):not(.loading):hover {
            color: var(--wa-color-on-normal);
          }
        }
        :host([appearance~="filled"]) .button {
          color: var(--wa-color-on-normal);
          background-color: var(--wa-color-fill-normal);
          border-color: transparent;
        }
        :host([appearance~="filled"])
          .button:not(.disabled):not(.loading):active {
          background-color: var(--button-color-fill-normal-active);
        }
        :host([appearance~="filled"]) .button.disabled {
          background-color: var(--ha-color-fill-disabled-normal-resting);
          color: var(--ha-color-on-disabled-normal);
        }

        :host([appearance~="accent"]) .button {
          background-color: var(
            --wa-color-fill-loud,
            var(--wa-color-neutral-fill-loud)
          );
        }
        :host([appearance~="accent"])
          .button:not(.disabled):not(.loading):active {
          background-color: var(--button-color-fill-loud-active);
        }
        :host([appearance~="accent"]) .button.disabled {
          background-color: var(--ha-color-fill-disabled-loud-resting);
          color: var(--ha-color-on-disabled-loud);
        }

        :host([loading]) {
          pointer-events: none;
        }

        .button.disabled {
          opacity: 1;
        }

        slot[name="start"]::slotted(*) {
          margin-inline-end: 4px;
        }
        slot[name="end"]::slotted(*) {
          margin-inline-start: 4px;
        }

        .button.has-start {
          padding-inline-start: 8px;
        }
        .button.has-end {
          padding-inline-end: 8px;
        }
      `]}constructor(...t){super(...t),this.variant="brand"}}s=(0,a.__decorate)([(0,l.EM)("ha-button")],s),e()}catch(s){e(s)}}))},1978:function(t,e,o){var a=o(9868),i=o(9332),r=o(7485),l=o(4922),n=o(1991);class s extends i.L{}s.styles=[r.R,l.AH`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `],s=(0,a.__decorate)([(0,n.EM)("ha-checkbox")],s)},6997:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991);class l extends i.WF{render(){return i.qy`
      <header class="header">
        <div class="header-bar">
          <section class="header-navigation-icon">
            <slot name="navigationIcon"></slot>
          </section>
          <section class="header-content">
            <div class="header-title">
              <slot name="title"></slot>
            </div>
            <div class="header-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </section>
          <section class="header-action-items">
            <slot name="actionItems"></slot>
          </section>
        </div>
        <slot></slot>
      </header>
    `}static get styles(){return[i.AH`
        :host {
          display: block;
        }
        :host([show-border]) {
          border-bottom: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .header-bar {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 4px;
          box-sizing: border-box;
        }
        .header-content {
          flex: 1;
          padding: 10px 4px;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .header-title {
          font-size: var(--ha-font-size-xl);
          line-height: var(--ha-line-height-condensed);
          font-weight: var(--ha-font-weight-normal);
        }
        .header-subtitle {
          font-size: var(--ha-font-size-m);
          line-height: 20px;
          color: var(--secondary-text-color);
        }
        @media all and (min-width: 450px) and (min-height: 500px) {
          .header-bar {
            padding: 16px;
          }
        }
        .header-navigation-icon {
          flex: none;
          min-width: 8px;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .header-action-items {
          flex: none;
          min-width: 8px;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
      `]}}l=(0,a.__decorate)([(0,r.EM)("ha-dialog-header")],l)},2847:function(t,e,o){o.d(e,{l:()=>d});var a=o(9868),i=o(6630),r=o(4119),l=o(4922),n=o(1991);o(9974),o(1291);const s=["button","ha-list-item"],d=(t,e)=>l.qy`
  <div class="header_title">
    <ha-icon-button
      .label=${t?.localize("ui.common.close")??"Close"}
      .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${e}</span>
  </div>
`;class c extends i.u{scrollToPos(t,e){this.contentElement?.scrollTo(t,e)}renderHeading(){return l.qy`<slot name="heading"> ${super.renderHeading()} </slot>`}firstUpdated(){super.firstUpdated(),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,s].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.contentElement.removeEventListener("scroll",this._onScroll)}_updateScrolledAttribute(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}constructor(...t){super(...t),this._onScroll=()=>{this._updateScrolledAttribute()}}}c.styles=[r.R,l.AH`
      :host([scrolled]) ::slotted(ha-dialog-header) {
        border-bottom: 1px solid
          var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
      }
      .mdc-dialog {
        --mdc-dialog-scroll-divider-color: var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );
        z-index: var(--dialog-z-index, 8);
        -webkit-backdrop-filter: var(
          --ha-dialog-scrim-backdrop-filter,
          var(--dialog-backdrop-filter, none)
        );
        backdrop-filter: var(
          --ha-dialog-scrim-backdrop-filter,
          var(--dialog-backdrop-filter, none)
        );
        --mdc-dialog-box-shadow: var(--dialog-box-shadow, none);
        --mdc-typography-headline6-font-weight: var(--ha-font-weight-normal);
        --mdc-typography-headline6-font-size: 1.574rem;
      }
      .mdc-dialog__actions {
        justify-content: var(--justify-action-buttons, flex-end);
        padding: 12px 16px 16px 16px;
      }
      .mdc-dialog__actions span:nth-child(1) {
        flex: var(--secondary-action-button-flex, unset);
      }
      .mdc-dialog__actions span:nth-child(2) {
        flex: var(--primary-action-button-flex, unset);
      }
      .mdc-dialog__container {
        align-items: var(--vertical-align-dialog, center);
      }
      .mdc-dialog__title {
        padding: 16px 16px 0 16px;
      }
      .mdc-dialog__title:has(span) {
        padding: 12px 12px 0;
      }
      .mdc-dialog__title::before {
        content: unset;
      }
      .mdc-dialog .mdc-dialog__content {
        position: var(--dialog-content-position, relative);
        padding: var(--dialog-content-padding, 24px);
      }
      :host([hideactions]) .mdc-dialog .mdc-dialog__content {
        padding-bottom: var(--dialog-content-padding, 24px);
      }
      .mdc-dialog .mdc-dialog__surface {
        position: var(--dialog-surface-position, relative);
        top: var(--dialog-surface-top);
        margin-top: var(--dialog-surface-margin-top);
        min-width: var(--mdc-dialog-min-width, auto);
        min-height: var(--mdc-dialog-min-height, auto);
        border-radius: var(--ha-dialog-border-radius, 24px);
        -webkit-backdrop-filter: var(--ha-dialog-surface-backdrop-filter, none);
        backdrop-filter: var(--ha-dialog-surface-backdrop-filter, none);
        background: var(
          --ha-dialog-surface-background,
          var(--mdc-theme-surface, #fff)
        );
        padding: var(--dialog-surface-padding);
      }
      :host([flexContent]) .mdc-dialog .mdc-dialog__content {
        display: flex;
        flex-direction: column;
      }

      .header_title {
        display: flex;
        align-items: center;
        direction: var(--direction);
      }
      .header_title span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        padding-left: 4px;
        padding-right: 4px;
        margin-right: 12px;
        margin-inline-end: 12px;
        margin-inline-start: initial;
      }
      .header_button {
        text-decoration: none;
        color: inherit;
        inset-inline-start: initial;
        inset-inline-end: -12px;
        direction: var(--direction);
      }
      .dialog-actions {
        inset-inline-start: initial !important;
        inset-inline-end: 0px !important;
        direction: var(--direction);
      }
    `],c=(0,a.__decorate)([(0,n.EM)("ha-dialog")],c)},6730:function(t,e,o){var a=o(9868),i=o(4500),r=o(2909),l=o(1991),n=o(4922),s=o(933);class d extends i.n{firstUpdated(t){super.firstUpdated(t),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}}d.styles=[r.R,n.AH`
      :host {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-size: var(--ha-font-size-l);
        --mdc-typography-button-font-family: var(--ha-font-family-body);
        --mdc-typography-button-font-weight: var(--ha-font-weight-medium);
      }
      :host .mdc-fab--extended {
        border-radius: var(
          --ha-button-border-radius,
          var(--ha-border-radius-pill)
        );
      }
      :host .mdc-fab.mdc-fab--extended .ripple {
        border-radius: var(
          --ha-button-border-radius,
          var(--ha-border-radius-pill)
        );
      }
      :host .mdc-fab--extended .mdc-fab__icon {
        margin-inline-start: -8px;
        margin-inline-end: 12px;
        direction: var(--direction);
      }
      :disabled {
        --mdc-theme-secondary: var(--disabled-text-color);
        pointer-events: none;
      }
    `,"rtl"===s.G.document.dir?n.AH`
          :host .mdc-fab--extended .mdc-fab__icon {
            direction: rtl;
          }
        `:n.AH``],d=(0,a.__decorate)([(0,l.EM)("ha-fab")],d)},8101:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991),l=o(933);o(1291);class n extends i.WF{render(){return i.qy`
      <ha-icon-button
        .disabled=${this.disabled}
        .label=${this.label||this.hass?.localize("ui.common.back")||"Back"}
        .path=${this._icon}
      ></ha-icon-button>
    `}constructor(...t){super(...t),this.disabled=!1,this._icon="rtl"===l.G.document.dir?"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}}(0,a.__decorate)([(0,r.MZ)({attribute:!1})],n.prototype,"hass",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean})],n.prototype,"disabled",void 0),(0,a.__decorate)([(0,r.MZ)()],n.prototype,"label",void 0),(0,a.__decorate)([(0,r.wk)()],n.prototype,"_icon",void 0),n=(0,a.__decorate)([(0,r.EM)("ha-icon-button-arrow-prev")],n)},1291:function(t,e,o){var a=o(9868),i=(o(1807),o(4922)),r=o(1991),l=o(3802);o(5635);class n extends i.WF{focus(){this._button?.focus()}render(){return i.qy`
      <mwc-icon-button
        aria-label=${(0,l.J)(this.label)}
        title=${(0,l.J)(this.hideTitle?void 0:this.label)}
        aria-haspopup=${(0,l.J)(this.ariaHasPopup)}
        .disabled=${this.disabled}
      >
        ${this.path?i.qy`<ha-svg-icon .path=${this.path}></ha-svg-icon>`:i.qy`<slot></slot>`}
      </mwc-icon-button>
    `}constructor(...t){super(...t),this.disabled=!1,this.hideTitle=!1}}n.shadowRootOptions={mode:"open",delegatesFocus:!0},n.styles=i.AH`
    :host {
      display: inline-block;
      outline: none;
    }
    :host([disabled]) {
      pointer-events: none;
    }
    mwc-icon-button {
      --mdc-theme-on-primary: currentColor;
      --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
    }
  `,(0,a.__decorate)([(0,r.MZ)({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),(0,a.__decorate)([(0,r.MZ)({type:String})],n.prototype,"path",void 0),(0,a.__decorate)([(0,r.MZ)({type:String})],n.prototype,"label",void 0),(0,a.__decorate)([(0,r.MZ)({type:String,attribute:"aria-haspopup"})],n.prototype,"ariaHasPopup",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:"hide-title",type:Boolean})],n.prototype,"hideTitle",void 0),(0,a.__decorate)([(0,r.P)("mwc-icon-button",!0)],n.prototype,"_button",void 0),n=(0,a.__decorate)([(0,r.EM)("ha-icon-button")],n)},1647:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991),l=o(3120),n=(o(9974),o(2275)),s=o(1972),d=o(8396);class c extends n.W1{connectedCallback(){super.connectedCallback(),this.addEventListener("close-menu",this._handleCloseMenu)}_handleCloseMenu(t){t.detail.reason.kind===d.fi.KEYDOWN&&t.detail.reason.key===d.NV.ESCAPE||t.detail.initiator.clickAction?.(t.detail.initiator)}}c.styles=[s.R,i.AH`
      :host {
        --md-sys-color-surface-container: var(--card-background-color);
      }
    `],c=(0,a.__decorate)([(0,r.EM)("ha-md-menu")],c);class h extends i.WF{get items(){return this._menu.items}focus(){this._menu.open?this._menu.focus():this._triggerButton?.focus()}render(){return i.qy`
      <div @click=${this._handleClick}>
        <slot name="trigger" @slotchange=${this._setTriggerAria}></slot>
      </div>
      <ha-md-menu
        .quick=${this.quick}
        .positioning=${this.positioning}
        .hasOverflow=${this.hasOverflow}
        .anchorCorner=${this.anchorCorner}
        .menuCorner=${this.menuCorner}
        @opening=${this._handleOpening}
        @closing=${this._handleClosing}
      >
        <slot></slot>
      </ha-md-menu>
    `}_handleOpening(){(0,l.r)(this,"opening",void 0,{composed:!1})}_handleClosing(){(0,l.r)(this,"closing",void 0,{composed:!1})}_handleClick(){this.disabled||(this._menu.anchorElement=this,this._menu.open?this._menu.close():this._menu.show())}get _triggerButton(){return this.querySelector('ha-icon-button[slot="trigger"], ha-button[slot="trigger"], ha-assist-chip[slot="trigger"]')}_setTriggerAria(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}constructor(...t){super(...t),this.disabled=!1,this.anchorCorner="end-start",this.menuCorner="start-start",this.hasOverflow=!1,this.quick=!1}}h.styles=i.AH`
    :host {
      display: inline-block;
      position: relative;
    }
    ::slotted([disabled]) {
      color: var(--disabled-text-color);
    }
  `,(0,a.__decorate)([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),(0,a.__decorate)([(0,r.MZ)()],h.prototype,"positioning",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:"anchor-corner"})],h.prototype,"anchorCorner",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:"menu-corner"})],h.prototype,"menuCorner",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean,attribute:"has-overflow"})],h.prototype,"hasOverflow",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean})],h.prototype,"quick",void 0),(0,a.__decorate)([(0,r.P)("ha-md-menu",!0)],h.prototype,"_menu",void 0),h=(0,a.__decorate)([(0,r.EM)("ha-md-button-menu")],h)},154:function(t,e,o){var a=o(9868),i=o(5369),r=o(808),l=o(4922),n=o(1991);class s extends i.K{}s.styles=[r.R,l.AH`
      :host {
        --ha-icon-display: block;
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-on-primary: var(--primary-text-color);
        --md-sys-color-secondary: var(--secondary-text-color);
        --md-sys-color-surface: var(--card-background-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);
        --md-sys-color-secondary-container: rgba(
          var(--rgb-primary-color),
          0.15
        );
        --md-sys-color-on-secondary-container: var(--text-primary-color);
        --mdc-icon-size: 16px;

        --md-sys-color-on-primary-container: var(--primary-text-color);
        --md-sys-color-on-secondary-container: var(--primary-text-color);
        --md-menu-item-label-text-font: Roboto, sans-serif;
      }
      :host(.warning) {
        --md-menu-item-label-text-color: var(--error-color);
        --md-menu-item-leading-icon-color: var(--error-color);
      }
      ::slotted([slot="headline"]) {
        text-wrap: nowrap;
      }
    `],(0,a.__decorate)([(0,n.MZ)({attribute:!1})],s.prototype,"clickAction",void 0),s=(0,a.__decorate)([(0,n.EM)("ha-md-menu-item")],s)},3433:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991),l=o(3120);class n{processMessage(t){if("removed"===t.type)for(const e of Object.keys(t.notifications))delete this.notifications[e];else this.notifications={...this.notifications,...t.notifications};return Object.values(this.notifications)}constructor(){this.notifications={}}}o(1291);class s extends i.WF{connectedCallback(){super.connectedCallback(),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}disconnectedCallback(){super.disconnectedCallback(),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}render(){if(!this._show)return i.s6;const t=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return i.qy`
      <ha-icon-button
        .label=${this.hass.localize("ui.sidebar.sidebar_toggle")}
        .path=${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}
        @click=${this._toggleMenu}
      ></ha-icon-button>
      ${t?i.qy`<div class="dot"></div>`:""}
    `}firstUpdated(t){super.firstUpdated(t),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}willUpdate(t){if(super.willUpdate(t),!t.has("narrow")&&!t.has("hass"))return;const e=t.has("hass")?t.get("hass"):this.hass,o=(t.has("narrow")?t.get("narrow"):this.narrow)||"always_hidden"===e?.dockedSidebar,a=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&o===a||(this._show=a||this._alwaysVisible,a?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}_subscribeNotifications(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=((t,e)=>{const o=new n,a=t.subscribeMessage((t=>e(o.processMessage(t))),{type:"persistent_notification/subscribe"});return()=>{a.then((t=>t?.()))}})(this.hass.connection,(t=>{this._hasNotifications=t.length>0}))}_toggleMenu(){(0,l.r)(this,"hass-toggle-menu")}constructor(...t){super(...t),this.hassio=!1,this.narrow=!1,this._hasNotifications=!1,this._show=!1,this._alwaysVisible=!1,this._attachNotifOnConnect=!1}}s.styles=i.AH`
    :host {
      position: relative;
    }
    .dot {
      pointer-events: none;
      position: absolute;
      background-color: var(--accent-color);
      width: 12px;
      height: 12px;
      top: 9px;
      right: 7px;
      inset-inline-end: 7px;
      inset-inline-start: initial;
      border-radius: 50%;
      border: 2px solid var(--app-header-background-color);
    }
  `,(0,a.__decorate)([(0,r.MZ)({type:Boolean})],s.prototype,"hassio",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean})],s.prototype,"narrow",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:!1})],s.prototype,"hass",void 0),(0,a.__decorate)([(0,r.wk)()],s.prototype,"_hasNotifications",void 0),(0,a.__decorate)([(0,r.wk)()],s.prototype,"_show",void 0),s=(0,a.__decorate)([(0,r.EM)("ha-menu-button")],s)},5635:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991);class l extends i.WF{render(){return i.JW`
    <svg
      viewBox=${this.viewBox||"0 0 24 24"}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <g>
        ${this.path?i.JW`<path class="primary-path" d=${this.path}></path>`:i.s6}
        ${this.secondaryPath?i.JW`<path class="secondary-path" d=${this.secondaryPath}></path>`:i.s6}
      </g>
    </svg>`}}l.styles=i.AH`
    :host {
      display: var(--ha-icon-display, inline-flex);
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: var(--icon-primary-color, currentcolor);
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
    }
    path.primary-path {
      opacity: var(--icon-primary-opactity, 1);
    }
    path.secondary-path {
      fill: var(--icon-secondary-color, currentcolor);
      opacity: var(--icon-secondary-opactity, 0.5);
    }
  `,(0,a.__decorate)([(0,r.MZ)()],l.prototype,"path",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:!1})],l.prototype,"secondaryPath",void 0),(0,a.__decorate)([(0,r.MZ)({attribute:!1})],l.prototype,"viewBox",void 0),l=(0,a.__decorate)([(0,r.EM)("ha-svg-icon")],l)},1934:function(t,e,o){var a=o(9868),i=o(4144),r=o(7705),l=o(4922),n=o(1991),s=o(933);class d extends i.J{updated(t){super.updated(t),(t.has("invalid")||t.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||this.validationMessage||"Invalid":""),(this.invalid||this.validateOnInitialRender||t.has("invalid")&&void 0!==t.get("invalid"))&&this.reportValidity()),t.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),t.has("autocorrect")&&(!1===this.autocorrect?this.formElement.setAttribute("autocorrect","off"):this.formElement.removeAttribute("autocorrect")),t.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}renderIcon(t,e=!1){const o=e?"trailing":"leading";return l.qy`
      <span
        class="mdc-text-field__icon mdc-text-field__icon--${o}"
        tabindex=${e?1:-1}
      >
        <slot name="${o}Icon"></slot>
      </span>
    `}constructor(...t){super(...t),this.icon=!1,this.iconTrailing=!1,this.autocorrect=!0}}d.styles=[r.R,l.AH`
      .mdc-text-field__input {
        width: var(--ha-textfield-input-width, 100%);
      }
      .mdc-text-field:not(.mdc-text-field--with-leading-icon) {
        padding: var(--text-field-padding, 0px 16px);
      }
      .mdc-text-field__affix--suffix {
        padding-left: var(--text-field-suffix-padding-left, 12px);
        padding-right: var(--text-field-suffix-padding-right, 0px);
        padding-inline-start: var(--text-field-suffix-padding-left, 12px);
        padding-inline-end: var(--text-field-suffix-padding-right, 0px);
        direction: ltr;
      }
      .mdc-text-field--with-leading-icon {
        padding-inline-start: var(--text-field-suffix-padding-left, 0px);
        padding-inline-end: var(--text-field-suffix-padding-right, 16px);
        direction: var(--direction);
      }

      .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
        padding-left: var(--text-field-suffix-padding-left, 0px);
        padding-right: var(--text-field-suffix-padding-right, 0px);
        padding-inline-start: var(--text-field-suffix-padding-left, 0px);
        padding-inline-end: var(--text-field-suffix-padding-right, 0px);
      }
      .mdc-text-field:not(.mdc-text-field--disabled)
        .mdc-text-field__affix--suffix {
        color: var(--secondary-text-color);
      }

      .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {
        color: var(--secondary-text-color);
      }

      .mdc-text-field__icon--leading {
        margin-inline-start: 16px;
        margin-inline-end: 8px;
        direction: var(--direction);
      }

      .mdc-text-field__icon--trailing {
        padding: var(--textfield-icon-trailing-padding, 12px);
      }

      .mdc-floating-label:not(.mdc-floating-label--float-above) {
        max-width: calc(100% - 16px);
      }

      .mdc-floating-label--float-above {
        max-width: calc((100% - 16px) / 0.75);
        transition: none;
      }

      input {
        text-align: var(--text-field-text-align, start);
      }

      input[type="color"] {
        height: 20px;
      }

      /* Edge, hide reveal password icon */
      ::-ms-reveal {
        display: none;
      }

      /* Chrome, Safari, Edge, Opera */
      :host([no-spinner]) input::-webkit-outer-spin-button,
      :host([no-spinner]) input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      /* Firefox */
      :host([no-spinner]) input[type="number"] {
        -moz-appearance: textfield;
      }

      .mdc-text-field__ripple {
        overflow: hidden;
      }

      .mdc-text-field {
        overflow: var(--text-field-overflow);
      }

      .mdc-floating-label {
        padding-inline-end: 16px;
        padding-inline-start: initial;
        inset-inline-start: 16px !important;
        inset-inline-end: initial !important;
        transform-origin: var(--float-start);
        direction: var(--direction);
        text-align: var(--float-start);
        box-sizing: border-box;
        text-overflow: ellipsis;
      }

      .mdc-text-field--with-leading-icon.mdc-text-field--filled
        .mdc-floating-label {
        max-width: calc(
          100% - 48px - var(--text-field-suffix-padding-left, 0px)
        );
        inset-inline-start: calc(
          48px + var(--text-field-suffix-padding-left, 0px)
        ) !important;
        inset-inline-end: initial !important;
        direction: var(--direction);
      }

      .mdc-text-field__input[type="number"] {
        direction: var(--direction);
      }
      .mdc-text-field__affix--prefix {
        padding-right: var(--text-field-prefix-padding-right, 2px);
        padding-inline-end: var(--text-field-prefix-padding-right, 2px);
        padding-inline-start: initial;
      }

      .mdc-text-field:not(.mdc-text-field--disabled)
        .mdc-text-field__affix--prefix {
        color: var(--mdc-text-field-label-ink-color);
      }
      #helper-text ha-markdown {
        display: inline-block;
      }
    `,"rtl"===s.G.document.dir?l.AH`
          .mdc-text-field--with-leading-icon,
          .mdc-text-field__icon--leading,
          .mdc-floating-label,
          .mdc-text-field--with-leading-icon.mdc-text-field--filled
            .mdc-floating-label,
          .mdc-text-field__input[type="number"] {
            direction: rtl;
            --direction: rtl;
          }
        `:l.AH``],(0,a.__decorate)([(0,n.MZ)({type:Boolean})],d.prototype,"invalid",void 0),(0,a.__decorate)([(0,n.MZ)({attribute:"error-message"})],d.prototype,"errorMessage",void 0),(0,a.__decorate)([(0,n.MZ)({type:Boolean})],d.prototype,"icon",void 0),(0,a.__decorate)([(0,n.MZ)({type:Boolean})],d.prototype,"iconTrailing",void 0),(0,a.__decorate)([(0,n.MZ)()],d.prototype,"autocomplete",void 0),(0,a.__decorate)([(0,n.MZ)({type:Boolean})],d.prototype,"autocorrect",void 0),(0,a.__decorate)([(0,n.MZ)({attribute:"input-spellcheck"})],d.prototype,"inputSpellcheck",void 0),(0,a.__decorate)([(0,n.P)("input")],d.prototype,"formElement",void 0),d=(0,a.__decorate)([(0,n.EM)("ha-textfield")],d)},9652:function(t,e,o){o.a(t,(async function(t,e){try{var a=o(9868),i=o(8784),r=o(4922),l=o(1991),n=t([i]);i=(n.then?(await n)():n)[0];class s extends i.A{static get styles(){return[i.A.styles,r.AH`
        :host {
          --wa-tooltip-background-color: var(--secondary-background-color);
          --wa-tooltip-content-color: var(--primary-text-color);
          --wa-tooltip-font-family: var(
            --ha-tooltip-font-family,
            var(--ha-font-family-body)
          );
          --wa-tooltip-font-size: var(
            --ha-tooltip-font-size,
            var(--ha-font-size-s)
          );
          --wa-tooltip-font-weight: var(
            --ha-tooltip-font-weight,
            var(--ha-font-weight-normal)
          );
          --wa-tooltip-line-height: var(
            --ha-tooltip-line-height,
            var(--ha-line-height-condensed)
          );
          --wa-tooltip-padding: 8px;
          --wa-tooltip-border-radius: var(--ha-tooltip-border-radius, 4px);
          --wa-tooltip-arrow-size: var(--ha-tooltip-arrow-size, 8px);
          --wa-z-index-tooltip: var(--ha-tooltip-z-index, 1000);
        }
      `]}constructor(...t){super(...t),this.showDelay=150,this.hideDelay=400}}(0,a.__decorate)([(0,l.MZ)({attribute:"show-delay",type:Number})],s.prototype,"showDelay",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"hide-delay",type:Number})],s.prototype,"hideDelay",void 0),s=(0,a.__decorate)([(0,l.EM)("ha-tooltip")],s),e()}catch(s){e(s)}}))},2298:function(t,e,o){var a=o(9868),i=o(4922),r=o(1991),l=o(3120),n=(o(1291),o(2049)),s=o(8914),d=o(1287),c=o(7523),h=o(9303),p=o(4457),u=o(6780);class m extends h.X{constructor(...t){super(...t),this.fieldTag=c.eu`ha-outlined-field`}}m.styles=[u.R,p.R,i.AH`
      .container::before {
        display: block;
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--ha-outlined-field-container-color, transparent);
        opacity: var(--ha-outlined-field-container-opacity, 1);
        border-start-start-radius: var(--_container-shape-start-start);
        border-start-end-radius: var(--_container-shape-start-end);
        border-end-start-radius: var(--_container-shape-end-start);
        border-end-end-radius: var(--_container-shape-end-end);
      }
    `],m=(0,a.__decorate)([(0,r.EM)("ha-outlined-field")],m);class b extends n.g{constructor(...t){super(...t),this.fieldTag=c.eu`ha-outlined-field`}}b.styles=[d.R,s.R,i.AH`
      :host {
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-primary: var(--primary-text-color);
        --md-outlined-text-field-input-text-color: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);
        --md-outlined-field-outline-color: var(--outline-color);
        --md-outlined-field-focus-outline-color: var(--primary-color);
        --md-outlined-field-hover-outline-color: var(--outline-hover-color);
      }
      :host([dense]) {
        --md-outlined-field-top-space: 5.5px;
        --md-outlined-field-bottom-space: 5.5px;
        --md-outlined-field-container-shape-start-start: 10px;
        --md-outlined-field-container-shape-start-end: 10px;
        --md-outlined-field-container-shape-end-end: 10px;
        --md-outlined-field-container-shape-end-start: 10px;
        --md-outlined-field-focus-outline-width: 1px;
        --md-outlined-field-with-leading-content-leading-space: 8px;
        --md-outlined-field-with-trailing-content-trailing-space: 8px;
        --md-outlined-field-content-space: 8px;
        --mdc-icon-size: var(--md-input-chip-icon-size, 18px);
      }
      .input {
        font-family: var(--ha-font-family-body);
      }
    `],b=(0,a.__decorate)([(0,r.EM)("ha-outlined-text-field")],b);o(5635);class v extends i.WF{focus(){this._input?.focus()}render(){const t=this.placeholder||this.hass.localize("ui.common.search");return i.qy`
      <ha-outlined-text-field
        .autofocus=${this.autofocus}
        .aria-label=${this.label||this.hass.localize("ui.common.search")}
        .placeholder=${t}
        .value=${this.filter||""}
        icon
        .iconTrailing=${this.filter||this.suffix}
        @input=${this._filterInputChanged}
        dense
      >
        <slot name="prefix" slot="leading-icon">
          <ha-svg-icon
            tabindex="-1"
            class="prefix"
            .path=${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}
          ></ha-svg-icon>
        </slot>
        ${this.filter?i.qy`<ha-icon-button
              aria-label="Clear input"
              slot="trailing-icon"
              @click=${this._clearSearch}
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
            >
            </ha-icon-button>`:i.s6}
      </ha-outlined-text-field>
    `}async _filterChanged(t){(0,l.r)(this,"value-changed",{value:String(t)})}async _filterInputChanged(t){this._filterChanged(t.target.value)}async _clearSearch(){this._filterChanged("")}constructor(...t){super(...t),this.suffix=!1,this.autofocus=!1}}v.styles=i.AH`
    :host {
      display: inline-flex;
      /* For iOS */
      z-index: 0;
    }
    ha-outlined-text-field {
      display: block;
      width: 100%;
      --ha-outlined-field-container-color: var(--card-background-color);
    }
    ha-svg-icon,
    ha-icon-button {
      --mdc-icon-button-size: 24px;
      height: var(--mdc-icon-button-size);
      display: flex;
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      outline: none;
    }
  `,(0,a.__decorate)([(0,r.MZ)({attribute:!1})],v.prototype,"hass",void 0),(0,a.__decorate)([(0,r.MZ)()],v.prototype,"filter",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean})],v.prototype,"suffix",void 0),(0,a.__decorate)([(0,r.MZ)({type:Boolean})],v.prototype,"autofocus",void 0),(0,a.__decorate)([(0,r.MZ)({type:String})],v.prototype,"label",void 0),(0,a.__decorate)([(0,r.MZ)({type:String})],v.prototype,"placeholder",void 0),(0,a.__decorate)([(0,r.P)("ha-outlined-text-field",!0)],v.prototype,"_input",void 0),v=(0,a.__decorate)([(0,r.EM)("search-input-outlined")],v)},881:function(t,e,o){var a=o(9868),i=o(8006),r=o(4922),l=o(1991),n=o(5907),s=o(3120),d=o(103),c=o(6811),h=o(9377),p=o(4800);class u extends d.k{renderOutline(){return this.filled?r.qy`<span class="filled"></span>`:super.renderOutline()}getContainerClasses(){return{...super.getContainerClasses(),active:this.active}}renderPrimaryContent(){return r.qy`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
      <span class="trailing leading icon" aria-hidden="true">
        ${this.renderTrailingIcon()}
      </span>
    `}renderTrailingIcon(){return r.qy`<slot name="trailing-icon"></slot>`}constructor(...t){super(...t),this.filled=!1,this.active=!1}}u.styles=[h.R,p.R,c.R,r.AH`
      :host {
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-assist-chip-container-shape: var(
          --ha-assist-chip-container-shape,
          16px
        );
        --md-assist-chip-outline-color: var(--outline-color);
        --md-assist-chip-label-text-weight: 400;
      }
      /** Material 3 doesn't have a filled chip, so we have to make our own **/
      .filled {
        display: flex;
        pointer-events: none;
        border-radius: inherit;
        inset: 0;
        position: absolute;
        background-color: var(--ha-assist-chip-filled-container-color);
      }
      /** Set the size of mdc icons **/
      ::slotted([slot="icon"]),
      ::slotted([slot="trailing-icon"]) {
        display: flex;
        --mdc-icon-size: var(--md-input-chip-icon-size, 18px);
        font-size: var(--_label-text-size) !important;
      }

      .trailing.icon ::slotted(*),
      .trailing.icon svg {
        margin-inline-end: unset;
        margin-inline-start: var(--_icon-label-space);
      }
      ::before {
        background: var(--ha-assist-chip-container-color, transparent);
        opacity: var(--ha-assist-chip-container-opacity, 1);
      }
      :where(.active)::before {
        background: var(--ha-assist-chip-active-container-color);
        opacity: var(--ha-assist-chip-active-container-opacity);
      }
      .label {
        font-family: var(--ha-font-family-body);
      }
    `],(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0})],u.prototype,"filled",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],u.prototype,"active",void 0),u=(0,a.__decorate)([(0,l.EM)("ha-assist-chip")],u);var m=o(1459),b=o(3808),v=o(8998),_=o(8336);class g extends m.${renderLeadingIcon(){return this.noLeadingIcon?r.qy``:super.renderLeadingIcon()}constructor(...t){super(...t),this.noLeadingIcon=!1}}g.styles=[h.R,p.R,_.R,v.R,b.R,r.AH`
      :host {
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--primary-text-color);
        --md-sys-color-on-secondary-container: var(--primary-text-color);
        --md-filter-chip-container-shape: 16px;
        --md-filter-chip-outline-color: var(--outline-color);
        --md-filter-chip-selected-container-color: rgba(
          var(--rgb-primary-text-color),
          0.15
        );
      }
    `],(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0,attribute:"no-leading-icon"})],g.prototype,"noLeadingIcon",void 0),g=(0,a.__decorate)([(0,l.EM)("ha-filter-chip")],g);var f=o(7481),y=o(3802),x=o(7577),w=o(5940);const k=((t,e,o=!0,a=!0)=>{let i,r=0;const l=(...l)=>{const n=()=>{r=!1===o?0:Date.now(),i=void 0,t(...l)},s=Date.now();r||!1!==o||(r=s);const d=e-(s-r);d<=0||d>e?(i&&(clearTimeout(i),i=void 0),r=s,t(...l)):i||!1===a||(i=window.setTimeout(n,d))};return l.cancel=()=>{clearTimeout(i),i=void 0,r=0},l})((t=>{history.replaceState({scrollPosition:t},"")}),300);function $(t){return(e,o)=>{if("object"==typeof o)throw new Error("This decorator does not support this compilation type.");const a=e.connectedCallback;e.connectedCallback=function(){a.call(this);const e=this[o];e&&this.updateComplete.then((()=>{const o=this.renderRoot.querySelector(t);o&&setTimeout((()=>{o.scrollTop=e}),0)}))};const i=Object.getOwnPropertyDescriptor(e,o);let r;if(void 0===i)r={get(){return this[`__${String(o)}`]||history.state?.scrollPosition},set(t){k(t),this[`__${String(o)}`]=t},configurable:!0,enumerable:!0};else{const t=i.set;r={...i,set(e){k(e),this[`__${String(o)}`]=e,t?.call(this,e)}}}Object.defineProperty(e,o,r)}}var C=o(963),M=o(4802);const L=(t,e)=>{const o={};for(const a of t){const t=e(a);t in o?o[t].push(a):o[t]=[a]}return o};var S=o(3566);o(1978),o(5635),o(1291),o(1934);class z extends r.WF{focus(){this._input?.focus()}render(){return r.qy`
      <ha-textfield
        .autofocus=${this.autofocus}
        .label=${this.label||this.hass.localize("ui.common.search")}
        .value=${this.filter||""}
        icon
        .iconTrailing=${this.filter||this.suffix}
        @input=${this._filterInputChanged}
      >
        <slot name="prefix" slot="leadingIcon">
          <ha-svg-icon
            tabindex="-1"
            class="prefix"
            .path=${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}
          ></ha-svg-icon>
        </slot>
        <div class="trailing" slot="trailingIcon">
          ${this.filter&&r.qy`
            <ha-icon-button
              @click=${this._clearSearch}
              .label=${this.hass.localize("ui.common.clear")}
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
              class="clear-button"
            ></ha-icon-button>
          `}
          <slot name="suffix"></slot>
        </div>
      </ha-textfield>
    `}async _filterChanged(t){(0,s.r)(this,"value-changed",{value:String(t)})}async _filterInputChanged(t){this._filterChanged(t.target.value)}async _clearSearch(){this._filterChanged("")}constructor(...t){super(...t),this.suffix=!1,this.autofocus=!1}}z.styles=r.AH`
    :host {
      display: inline-flex;
    }
    ha-svg-icon,
    ha-icon-button {
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      outline: none;
    }
    .clear-button {
      --mdc-icon-size: 20px;
    }
    ha-textfield {
      display: inherit;
    }
    .trailing {
      display: flex;
      align-items: center;
    }
  `,(0,a.__decorate)([(0,l.MZ)({attribute:!1})],z.prototype,"hass",void 0),(0,a.__decorate)([(0,l.MZ)()],z.prototype,"filter",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],z.prototype,"suffix",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],z.prototype,"autofocus",void 0),(0,a.__decorate)([(0,l.MZ)({type:String})],z.prototype,"label",void 0),(0,a.__decorate)([(0,l.P)("ha-textfield",!0)],z.prototype,"_input",void 0),z=(0,a.__decorate)([(0,l.EM)("search-input")],z);var Z=o(7971);let H;const R=()=>(H||(H=(0,Z.LV)(new Worker(new URL(o.p+o.u("346"),o.b)))),H);var A=o(3360);const q="zzzzz_undefined";class D extends r.WF{clearSelection(){this._checkedRows=[],this._lastSelectedRowId=null,this._checkedRowsChanged()}selectAll(){this._checkedRows=this._filteredData.filter((t=>!1!==t.selectable)).map((t=>t[this.id])),this._lastSelectedRowId=null,this._checkedRowsChanged()}select(t,e){e&&(this._checkedRows=[]),t.forEach((t=>{const e=this._filteredData.find((e=>e[this.id]===t));!1===e?.selectable||this._checkedRows.includes(t)||this._checkedRows.push(t)})),this._lastSelectedRowId=null,this._checkedRowsChanged()}unselect(t){t.forEach((t=>{const e=this._checkedRows.indexOf(t);e>-1&&this._checkedRows.splice(e,1)})),this._lastSelectedRowId=null,this._checkedRowsChanged()}connectedCallback(){super.connectedCallback(),this._filteredData.length&&(this._filteredData=[...this._filteredData])}firstUpdated(){this.updateComplete.then((()=>this._calcTableHeight()))}updated(){const t=this.renderRoot.querySelector(".mdc-data-table__header-row");t&&(t.scrollWidth>t.clientWidth?this.style.setProperty("--table-row-width",`${t.scrollWidth}px`):this.style.removeProperty("--table-row-width"))}willUpdate(t){if(super.willUpdate(t),this.hasUpdated||(async()=>{await o.e("52").then(o.bind(o,2183))})(),t.has("columns")){if(this._filterable=Object.values(this.columns).some((t=>t.filterable)),!this.sortColumn)for(const e in this.columns)if(this.columns[e].direction){this.sortDirection=this.columns[e].direction,this.sortColumn=e,this._lastSelectedRowId=null,(0,s.r)(this,"sorting-changed",{column:e,direction:this.sortDirection});break}const t=(0,f.A)(this.columns);Object.values(t).forEach((t=>{delete t.title,delete t.template,delete t.extraTemplate})),this._sortColumns=t}t.has("filter")&&(this._debounceSearch(this.filter),this._lastSelectedRowId=null),t.has("data")&&(this._checkableRowsCount=this.data.filter((t=>!1!==t.selectable)).length),!this.hasUpdated&&this.initialCollapsedGroups?(this._collapsedGroups=this.initialCollapsedGroups,this._lastSelectedRowId=null,(0,s.r)(this,"collapsed-changed",{value:this._collapsedGroups})):t.has("groupColumn")&&(this._collapsedGroups=[],this._lastSelectedRowId=null,(0,s.r)(this,"collapsed-changed",{value:this._collapsedGroups})),(t.has("data")||t.has("columns")||t.has("_filter")||t.has("sortColumn")||t.has("sortDirection"))&&this._sortFilterData(),(t.has("_filter")||t.has("sortColumn")||t.has("sortDirection"))&&(this._lastSelectedRowId=null),(t.has("selectable")||t.has("hiddenColumns"))&&(this._filteredData=[...this._filteredData])}render(){const t=this.localizeFunc||this.hass.localize,e=this._sortedColumns(this.columns,this.columnOrder);return r.qy`
      <div class="mdc-data-table">
        <slot name="header" @slotchange=${this._calcTableHeight}>
          ${this._filterable?r.qy`
                <div class="table-header">
                  <search-input
                    .hass=${this.hass}
                    @value-changed=${this._handleSearchChange}
                    .label=${this.searchLabel}
                    .noLabelFloat=${this.noLabelFloat}
                  ></search-input>
                </div>
              `:""}
        </slot>
        <div
          class="mdc-data-table__table ${(0,n.H)({"auto-height":this.autoHeight})}"
          role="table"
          aria-rowcount=${this._filteredData.length+1}
          style=${(0,x.W)({height:this.autoHeight?53*(this._filteredData.length||1)+53+"px":`calc(100% - ${this._headerHeight}px)`})}
        >
          <div
            class="mdc-data-table__header-row"
            role="row"
            aria-rowindex="1"
            @scroll=${this._scrollContent}
          >
            <slot name="header-row">
              ${this.selectable?r.qy`
                    <div
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                      role="columnheader"
                    >
                      <ha-checkbox
                        class="mdc-data-table__row-checkbox"
                        @change=${this._handleHeaderRowCheckboxClick}
                        .indeterminate=${this._checkedRows.length&&this._checkedRows.length!==this._checkableRowsCount}
                        .checked=${this._checkedRows.length&&this._checkedRows.length===this._checkableRowsCount}
                      >
                      </ha-checkbox>
                    </div>
                  `:""}
              ${Object.entries(e).map((([t,e])=>{if(e.hidden||(this.columnOrder&&this.columnOrder.includes(t)?this.hiddenColumns?.includes(t)??e.defaultHidden:e.defaultHidden))return r.s6;const o=t===this.sortColumn,a={"mdc-data-table__header-cell--numeric":"numeric"===e.type,"mdc-data-table__header-cell--icon":"icon"===e.type,"mdc-data-table__header-cell--icon-button":"icon-button"===e.type,"mdc-data-table__header-cell--overflow-menu":"overflow-menu"===e.type,"mdc-data-table__header-cell--overflow":"overflow"===e.type,sortable:Boolean(e.sortable),"not-sorted":Boolean(e.sortable&&!o)};return r.qy`
                  <div
                    aria-label=${(0,y.J)(e.label)}
                    class="mdc-data-table__header-cell ${(0,n.H)(a)}"
                    style=${(0,x.W)({minWidth:e.minWidth,maxWidth:e.maxWidth,flex:e.flex||1})}
                    role="columnheader"
                    aria-sort=${(0,y.J)(o?"desc"===this.sortDirection?"descending":"ascending":void 0)}
                    @click=${this._handleHeaderClick}
                    .columnId=${t}
                    title=${(0,y.J)(e.title)}
                  >
                    ${e.sortable?r.qy`
                          <ha-svg-icon
                            .path=${o&&"desc"===this.sortDirection?"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z":"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                          ></ha-svg-icon>
                        `:""}
                    <span>${e.title}</span>
                  </div>
                `}))}
            </slot>
          </div>
          ${this._filteredData.length?r.qy`
                <lit-virtualizer
                  scroller
                  class="mdc-data-table__content scroller ha-scrollbar"
                  @scroll=${this._saveScrollPos}
                  .items=${this._groupData(this._filteredData,t,this.appendRow,this.hasFab,this.groupColumn,this.groupOrder,this._collapsedGroups,this.sortColumn,this.sortDirection)}
                  .keyFunction=${this._keyFunction}
                  .renderItem=${(t,o)=>this._renderRow(e,this.narrow,t,o)}
                ></lit-virtualizer>
              `:r.qy`
                <div class="mdc-data-table__content">
                  <div class="mdc-data-table__row" role="row">
                    <div class="mdc-data-table__cell grows center" role="cell">
                      ${this.noDataText||t("ui.components.data-table.no-data")}
                    </div>
                  </div>
                </div>
              `}
        </div>
      </div>
    `}async _sortFilterData(){const t=(new Date).getTime(),e=t-this._lastUpdate,o=t-this._curRequest;this._curRequest=t;const a=!this._lastUpdate||e>500&&o<500;let i=this.data;if(this._filter&&(i=await this._memFilterData(this.data,this._sortColumns,this._filter.trim())),!a&&this._curRequest!==t)return;const r=this.sortColumn&&this._sortColumns[this.sortColumn]?((t,e,o,a,i)=>R().sortData(t,e,o,a,i))(i,this._sortColumns[this.sortColumn],this.sortDirection,this.sortColumn,this.hass.locale.language):i,[l]=await Promise.all([r,A.E]),n=(new Date).getTime()-t;n<100&&await new Promise((t=>{setTimeout(t,100-n)})),(a||this._curRequest===t)&&(this._lastUpdate=t,this._filteredData=l)}_handleHeaderClick(t){const e=t.currentTarget.columnId;this.columns[e].sortable&&(this.sortDirection&&this.sortColumn===e?"asc"===this.sortDirection?this.sortDirection="desc":this.sortDirection=null:this.sortDirection="asc",this.sortColumn=null===this.sortDirection?void 0:e,(0,s.r)(this,"sorting-changed",{column:e,direction:this.sortDirection}))}_handleHeaderRowCheckboxClick(t){t.target.checked?this.selectAll():(this._checkedRows=[],this._checkedRowsChanged()),this._lastSelectedRowId=null}_selectRange(t,e,o){const a=Math.min(e,o),i=Math.max(e,o),r=[];for(let l=a;l<=i;l++){const e=t[l];e&&!1!==e.selectable&&!this._checkedRows.includes(e[this.id])&&r.push(e[this.id])}return r}_setTitle(t){const e=t.currentTarget;e.scrollWidth>e.offsetWidth&&e.setAttribute("title",e.innerText)}_checkedRowsChanged(){this._filteredData.length&&(this._filteredData=[...this._filteredData]),(0,s.r)(this,"selection-changed",{value:this._checkedRows})}_handleSearchChange(t){this.filter||(this._lastSelectedRowId=null,this._debounceSearch(t.detail.value))}async _calcTableHeight(){this.autoHeight||(await this.updateComplete,this._headerHeight=this._header.clientHeight)}_saveScrollPos(t){this._savedScrollPos=t.target.scrollTop,this.renderRoot.querySelector(".mdc-data-table__header-row").scrollLeft=t.target.scrollLeft}_scrollContent(t){this.renderRoot.querySelector("lit-virtualizer").scrollLeft=t.target.scrollLeft}expandAllGroups(){this._collapsedGroups=[],this._lastSelectedRowId=null,(0,s.r)(this,"collapsed-changed",{value:this._collapsedGroups})}collapseAllGroups(){if(!this.groupColumn||!this.data.some((t=>t[this.groupColumn])))return;const t=L(this.data,(t=>t[this.groupColumn]));t.undefined&&(t[q]=t.undefined,delete t.undefined),this._collapsedGroups=Object.keys(t),this._lastSelectedRowId=null,(0,s.r)(this,"collapsed-changed",{value:this._collapsedGroups})}static get styles(){return[S.dp,r.AH`
        /* default mdc styles, colors changed, without checkbox styles */
        :host {
          height: 100%;
        }
        .mdc-data-table__content {
          font-family: var(--ha-font-family-body);
          -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
          -webkit-font-smoothing: var(--ha-font-smoothing);
          font-size: 0.875rem;
          line-height: var(--ha-line-height-condensed);
          font-weight: var(--ha-font-weight-normal);
          letter-spacing: 0.0178571429em;
          text-decoration: inherit;
          text-transform: inherit;
        }

        .mdc-data-table {
          background-color: var(--data-table-background-color);
          border-radius: 4px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--divider-color);
          display: inline-flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
        }

        .mdc-data-table__row--selected {
          background-color: rgba(var(--rgb-primary-color), 0.04);
        }

        .mdc-data-table__row {
          display: flex;
          height: var(--data-table-row-height, 52px);
          width: var(--table-row-width, 100%);
        }

        .mdc-data-table__row.empty-row {
          height: var(
            --data-table-empty-row-height,
            var(--data-table-row-height, 52px)
          );
        }

        .mdc-data-table__row ~ .mdc-data-table__row {
          border-top: 1px solid var(--divider-color);
        }

        .mdc-data-table__row.clickable:not(
            .mdc-data-table__row--selected
          ):hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.04);
        }

        .mdc-data-table__header-cell {
          color: var(--primary-text-color);
        }

        .mdc-data-table__cell {
          color: var(--primary-text-color);
        }

        .mdc-data-table__header-row {
          height: 56px;
          display: flex;
          border-bottom: 1px solid var(--divider-color);
          overflow: auto;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .mdc-data-table__header-row::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .mdc-data-table__header-row {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .mdc-data-table__cell,
        .mdc-data-table__header-cell {
          padding-right: 16px;
          padding-left: 16px;
          min-width: 150px;
          align-self: center;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .mdc-data-table__cell.mdc-data-table__cell--flex {
          display: flex;
          overflow: initial;
        }

        .mdc-data-table__cell.mdc-data-table__cell--icon {
          overflow: initial;
        }

        .mdc-data-table__header-cell--checkbox,
        .mdc-data-table__cell--checkbox {
          /* @noflip */
          padding-left: 16px;
          /* @noflip */
          padding-right: 0;
          /* @noflip */
          padding-inline-start: 16px;
          /* @noflip */
          padding-inline-end: initial;
          width: 60px;
          min-width: 60px;
        }

        .mdc-data-table__table {
          height: 100%;
          width: 100%;
          border: 0;
          white-space: nowrap;
          position: relative;
        }

        .mdc-data-table__cell {
          font-family: var(--ha-font-family-body);
          -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
          -webkit-font-smoothing: var(--ha-font-smoothing);
          font-size: 0.875rem;
          line-height: var(--ha-line-height-condensed);
          font-weight: var(--ha-font-weight-normal);
          letter-spacing: 0.0178571429em;
          text-decoration: inherit;
          text-transform: inherit;
          flex-grow: 0;
          flex-shrink: 0;
        }

        .mdc-data-table__cell a {
          color: inherit;
          text-decoration: none;
        }

        .mdc-data-table__cell--numeric {
          text-align: var(--float-end);
        }

        .mdc-data-table__cell--icon {
          color: var(--secondary-text-color);
          text-align: center;
        }

        .mdc-data-table__header-cell--icon,
        .mdc-data-table__cell--icon {
          min-width: 64px;
          flex: 0 0 64px !important;
        }

        .mdc-data-table__cell--icon img {
          width: 24px;
          height: 24px;
        }

        .mdc-data-table__header-cell.mdc-data-table__header-cell--icon {
          text-align: center;
        }

        .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:hover,
        .mdc-data-table__header-cell.sortable.mdc-data-table__header-cell--icon:not(
            .not-sorted
          ) {
          text-align: var(--float-start);
        }

        .mdc-data-table__cell--icon:first-child img,
        .mdc-data-table__cell--icon:first-child ha-icon,
        .mdc-data-table__cell--icon:first-child ha-svg-icon,
        .mdc-data-table__cell--icon:first-child ha-state-icon,
        .mdc-data-table__cell--icon:first-child ha-domain-icon,
        .mdc-data-table__cell--icon:first-child ha-service-icon {
          margin-left: 8px;
          margin-inline-start: 8px;
          margin-inline-end: initial;
        }

        .mdc-data-table__cell--icon:first-child state-badge {
          margin-right: -8px;
          margin-inline-end: -8px;
          margin-inline-start: initial;
        }

        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__header-cell--overflow-menu,
        .mdc-data-table__header-cell--icon-button,
        .mdc-data-table__cell--icon-button {
          min-width: 64px;
          flex: 0 0 64px !important;
          padding: 8px;
        }

        .mdc-data-table__header-cell--icon-button,
        .mdc-data-table__cell--icon-button {
          min-width: 56px;
          width: 56px;
        }

        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__cell--icon-button {
          color: var(--secondary-text-color);
          text-overflow: clip;
        }

        .mdc-data-table__header-cell--icon-button:first-child,
        .mdc-data-table__cell--icon-button:first-child,
        .mdc-data-table__header-cell--icon-button:last-child,
        .mdc-data-table__cell--icon-button:last-child {
          width: 64px;
        }

        .mdc-data-table__cell--overflow-menu:first-child,
        .mdc-data-table__header-cell--overflow-menu:first-child,
        .mdc-data-table__header-cell--icon-button:first-child,
        .mdc-data-table__cell--icon-button:first-child {
          padding-left: 16px;
          padding-inline-start: 16px;
          padding-inline-end: initial;
        }

        .mdc-data-table__cell--overflow-menu:last-child,
        .mdc-data-table__header-cell--overflow-menu:last-child,
        .mdc-data-table__header-cell--icon-button:last-child,
        .mdc-data-table__cell--icon-button:last-child {
          padding-right: 16px;
          padding-inline-end: 16px;
          padding-inline-start: initial;
        }
        .mdc-data-table__cell--overflow-menu,
        .mdc-data-table__cell--overflow,
        .mdc-data-table__header-cell--overflow-menu,
        .mdc-data-table__header-cell--overflow {
          overflow: initial;
        }
        .mdc-data-table__cell--icon-button a {
          color: var(--secondary-text-color);
        }

        .mdc-data-table__header-cell {
          font-family: var(--ha-font-family-body);
          -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
          -webkit-font-smoothing: var(--ha-font-smoothing);
          font-size: var(--ha-font-size-s);
          line-height: var(--ha-line-height-normal);
          font-weight: var(--ha-font-weight-medium);
          letter-spacing: 0.0071428571em;
          text-decoration: inherit;
          text-transform: inherit;
          text-align: var(--float-start);
        }

        .mdc-data-table__header-cell--numeric {
          text-align: var(--float-end);
        }
        .mdc-data-table__header-cell--numeric.sortable:hover,
        .mdc-data-table__header-cell--numeric.sortable:not(.not-sorted) {
          text-align: var(--float-start);
        }

        /* custom from here */

        .group-header {
          padding-top: 12px;
          height: var(--data-table-row-height, 52px);
          padding-left: 12px;
          padding-inline-start: 12px;
          padding-inline-end: initial;
          width: 100%;
          font-weight: var(--ha-font-weight-medium);
          display: flex;
          align-items: center;
          cursor: pointer;
          background-color: var(--primary-background-color);
        }

        .group-header ha-icon-button {
          transition: transform 0.2s ease;
        }

        .group-header ha-icon-button.collapsed {
          transform: rotate(180deg);
        }

        :host {
          display: block;
        }

        .mdc-data-table {
          display: block;
          border-width: var(--data-table-border-width, 1px);
          height: 100%;
        }
        .mdc-data-table__header-cell {
          overflow: hidden;
          position: relative;
        }
        .mdc-data-table__header-cell span {
          position: relative;
          left: 0px;
          inset-inline-start: 0px;
          inset-inline-end: initial;
        }

        .mdc-data-table__header-cell.sortable {
          cursor: pointer;
        }
        .mdc-data-table__header-cell > * {
          transition: var(--float-start) 0.2s ease;
        }
        .mdc-data-table__header-cell ha-svg-icon {
          top: -3px;
          position: absolute;
        }
        .mdc-data-table__header-cell.not-sorted ha-svg-icon {
          left: -20px;
          inset-inline-start: -20px;
          inset-inline-end: initial;
        }
        .mdc-data-table__header-cell.sortable:not(.not-sorted) span,
        .mdc-data-table__header-cell.sortable.not-sorted:hover span {
          left: 24px;
          inset-inline-start: 24px;
          inset-inline-end: initial;
        }
        .mdc-data-table__header-cell.sortable:not(.not-sorted) ha-svg-icon,
        .mdc-data-table__header-cell.sortable:hover.not-sorted ha-svg-icon {
          left: 12px;
          inset-inline-start: 12px;
          inset-inline-end: initial;
        }
        .table-header {
          border-bottom: 1px solid var(--divider-color);
        }
        search-input {
          display: block;
          flex: 1;
          --mdc-text-field-fill-color: var(--sidebar-background-color);
          --mdc-text-field-idle-line-color: transparent;
        }
        slot[name="header"] {
          display: block;
        }
        .center {
          text-align: center;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
        .scroller {
          height: calc(100% - 57px);
          overflow: overlay !important;
        }

        .mdc-data-table__table.auto-height .scroller {
          overflow-y: hidden !important;
        }
        .grows {
          flex-grow: 1;
          flex-shrink: 1;
        }
        .forceLTR {
          direction: ltr;
        }
        .clickable {
          cursor: pointer;
        }
        lit-virtualizer {
          contain: size layout !important;
          overscroll-behavior: contain;
        }
      `]}constructor(...t){super(...t),this.narrow=!1,this.columns={},this.data=[],this.selectable=!1,this.clickable=!1,this.hasFab=!1,this.autoHeight=!1,this.id="id",this.noLabelFloat=!1,this.filter="",this.sortDirection=null,this._filterable=!1,this._filter="",this._filteredData=[],this._headerHeight=0,this._collapsedGroups=[],this._lastSelectedRowId=null,this._checkedRows=[],this._sortColumns={},this._curRequest=0,this._lastUpdate=0,this._debounceSearch=(0,M.s)((t=>{this._filter=t}),100,!1),this._sortedColumns=(0,w.A)(((t,e)=>e&&e.length?Object.keys(t).sort(((t,o)=>{const a=e.indexOf(t),i=e.indexOf(o);if(a!==i){if(-1===a)return 1;if(-1===i)return-1}return a-i})).reduce(((e,o)=>(e[o]=t[o],e)),{}):t)),this._keyFunction=t=>t?.[this.id]||t,this._renderRow=(t,e,o,a)=>o?o.append?r.qy`<div class="mdc-data-table__row">${o.content}</div>`:o.empty?r.qy`<div class="mdc-data-table__row empty-row"></div>`:r.qy`
      <div
        aria-rowindex=${a+2}
        role="row"
        .rowId=${o[this.id]}
        @click=${this._handleRowClick}
        class="mdc-data-table__row ${(0,n.H)({"mdc-data-table__row--selected":this._checkedRows.includes(String(o[this.id])),clickable:this.clickable})}"
        aria-selected=${(0,y.J)(!!this._checkedRows.includes(String(o[this.id]))||void 0)}
        .selectable=${!1!==o.selectable}
      >
        ${this.selectable?r.qy`
              <div
                class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                role="cell"
              >
                <ha-checkbox
                  class="mdc-data-table__row-checkbox"
                  @click=${this._handleRowCheckboxClicked}
                  .rowId=${o[this.id]}
                  .disabled=${!1===o.selectable}
                  .checked=${this._checkedRows.includes(String(o[this.id]))}
                >
                </ha-checkbox>
              </div>
            `:""}
        ${Object.entries(t).map((([a,i])=>e&&!i.main&&!i.showNarrow||i.hidden||(this.columnOrder&&this.columnOrder.includes(a)?this.hiddenColumns?.includes(a)??i.defaultHidden:i.defaultHidden)?r.s6:r.qy`
            <div
              @mouseover=${this._setTitle}
              @focus=${this._setTitle}
              role=${i.main?"rowheader":"cell"}
              class="mdc-data-table__cell ${(0,n.H)({"mdc-data-table__cell--flex":"flex"===i.type,"mdc-data-table__cell--numeric":"numeric"===i.type,"mdc-data-table__cell--icon":"icon"===i.type,"mdc-data-table__cell--icon-button":"icon-button"===i.type,"mdc-data-table__cell--overflow-menu":"overflow-menu"===i.type,"mdc-data-table__cell--overflow":"overflow"===i.type,forceLTR:Boolean(i.forceLTR)})}"
              style=${(0,x.W)({minWidth:i.minWidth,maxWidth:i.maxWidth,flex:i.flex||1})}
            >
              ${i.template?i.template(o):e&&i.main?r.qy`<div class="primary">${o[a]}</div>
                      <div class="secondary">
                        ${Object.entries(t).filter((([t,e])=>!(e.hidden||e.main||e.showNarrow||(this.columnOrder&&this.columnOrder.includes(t)?this.hiddenColumns?.includes(t)??e.defaultHidden:e.defaultHidden)))).map((([t,e],a)=>r.qy`${0!==a?" · ":r.s6}${e.template?e.template(o):o[t]}`))}
                      </div>
                      ${i.extraTemplate?i.extraTemplate(o):r.s6}`:r.qy`${o[a]}${i.extraTemplate?i.extraTemplate(o):r.s6}`}
            </div>
          `))}
      </div>
    `:r.s6,this._groupData=(0,w.A)(((t,e,o,a,i,l,n,s,d)=>{if(o||a||i){let c=[...t];if(i){const t=s===i,o=L(c,(t=>t[i]));o.undefined&&(o[q]=o.undefined,delete o.undefined);const a=Object.keys(o).sort(((e,o)=>{if(!l&&t){const t=(0,C.xL)(e,o,this.hass.locale.language);return"asc"===d?t:-1*t}const a=l?.indexOf(e)??-1,i=l?.indexOf(o)??-1;return a!==i?-1===a?1:-1===i?-1:a-i:(0,C.xL)(["","-","—"].includes(e)?"zzz":e,["","-","—"].includes(o)?"zzz":o,this.hass.locale.language)})).reduce(((t,e)=>{const a=[e,o[e]];return t.push(a),t}),[]),h=[];a.forEach((([t,o])=>{const a=n.includes(t);h.push({append:!0,selectable:!1,content:r.qy`<div
                class="mdc-data-table__cell group-header"
                role="cell"
                .group=${t}
                @click=${this._collapseGroup}
              >
                <ha-icon-button
                  .path=${"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}
                  .label=${this.hass.localize("ui.components.data-table."+(a?"expand":"collapse"))}
                  class=${a?"collapsed":""}
                >
                </ha-icon-button>
                ${t===q?e("ui.components.data-table.ungrouped"):t||""}
              </div>`}),n.includes(t)||h.push(...o)})),c=h}return o&&c.push({append:!0,selectable:!1,content:o}),a&&c.push({empty:!0}),c}return t})),this._memFilterData=(0,w.A)(((t,e,o)=>((t,e,o)=>R().filterData(t,e,o))(t,e,o))),this._handleRowCheckboxClicked=t=>{const e=t.currentTarget,o=e.rowId,a=this._groupData(this._filteredData,this.localizeFunc||this.hass.localize,this.appendRow,this.hasFab,this.groupColumn,this.groupOrder,this._collapsedGroups,this.sortColumn,this.sortDirection);if(!1===a.find((t=>t[this.id]===o))?.selectable)return;const i=a.findIndex((t=>t[this.id]===o));if(t instanceof MouseEvent&&t.shiftKey&&null!==this._lastSelectedRowId){const t=a.findIndex((t=>t[this.id]===this._lastSelectedRowId));t>-1&&i>-1&&(this._checkedRows=[...this._checkedRows,...this._selectRange(a,t,i)])}else e.checked?this._checkedRows=this._checkedRows.filter((t=>t!==o)):this._checkedRows.includes(o)||(this._checkedRows=[...this._checkedRows,o]);i>-1&&(this._lastSelectedRowId=o),this._checkedRowsChanged()},this._handleRowClick=t=>{if(t.composedPath().find((t=>["ha-checkbox","ha-button","ha-button","ha-icon-button","ha-assist-chip"].includes(t.localName))))return;const e=t.currentTarget.rowId;(0,s.r)(this,"row-click",{id:e},{bubbles:!1})},this._collapseGroup=t=>{const e=t.currentTarget.group;this._collapsedGroups.includes(e)?this._collapsedGroups=this._collapsedGroups.filter((t=>t!==e)):this._collapsedGroups=[...this._collapsedGroups,e],this._lastSelectedRowId=null,(0,s.r)(this,"collapsed-changed",{value:this._collapsedGroups})}}}(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"hass",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"localizeFunc",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],D.prototype,"narrow",void 0),(0,a.__decorate)([(0,l.MZ)({type:Object})],D.prototype,"columns",void 0),(0,a.__decorate)([(0,l.MZ)({type:Array})],D.prototype,"data",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],D.prototype,"selectable",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],D.prototype,"clickable",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"has-fab",type:Boolean})],D.prototype,"hasFab",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"appendRow",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,attribute:"auto-height"})],D.prototype,"autoHeight",void 0),(0,a.__decorate)([(0,l.MZ)({type:String})],D.prototype,"id",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1,type:String})],D.prototype,"noDataText",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1,type:String})],D.prototype,"searchLabel",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,attribute:"no-label-float"})],D.prototype,"noLabelFloat",void 0),(0,a.__decorate)([(0,l.MZ)({type:String})],D.prototype,"filter",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"groupColumn",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"groupOrder",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"sortColumn",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"sortDirection",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"initialCollapsedGroups",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"hiddenColumns",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],D.prototype,"columnOrder",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_filterable",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_filter",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_filteredData",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_headerHeight",void 0),(0,a.__decorate)([(0,l.P)("slot[name='header']")],D.prototype,"_header",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_collapsedGroups",void 0),(0,a.__decorate)([(0,l.wk)()],D.prototype,"_lastSelectedRowId",void 0),(0,a.__decorate)([$(".scroller")],D.prototype,"_savedScrollPos",void 0),(0,a.__decorate)([(0,l.Ls)({passive:!0})],D.prototype,"_saveScrollPos",null),(0,a.__decorate)([(0,l.Ls)({passive:!0})],D.prototype,"_scrollContent",null),D=(0,a.__decorate)([(0,l.EM)("ha-data-table")],D);const E=()=>Promise.all([o.e("695"),o.e("568")]).then(o.bind(o,9587));o(2847),o(6997),o(1647);var T=o(1320),F=o(1715);class O extends T.c{}O.styles=[F.R,r.AH`
      :host {
        --md-divider-color: var(--divider-color);
      }
    `],O=(0,a.__decorate)([(0,l.EM)("ha-md-divider")],O);o(154),o(2298);const P=t=>class extends t{connectedCallback(){super.connectedCallback(),this.addKeyboardShortcuts()}disconnectedCallback(){this.removeKeyboardShortcuts(),super.disconnectedCallback()}addKeyboardShortcuts(){this._listenersAdded||(this._listenersAdded=!0,window.addEventListener("keydown",this._keydownEvent))}removeKeyboardShortcuts(){this._listenersAdded=!1,window.removeEventListener("keydown",this._keydownEvent)}supportedShortcuts(){return{}}supportedSingleKeyShortcuts(){return{}}constructor(...t){super(...t),this._keydownEvent=t=>{const e=this.supportedShortcuts(),o=t.shiftKey?t.key.toUpperCase():t.key;if((t.ctrlKey||t.metaKey)&&!t.altKey&&o in e){if(!(t=>{if(t.some((t=>"tagName"in t&&("HA-MENU"===t.tagName||"HA-CODE-EDITOR"===t.tagName))))return!1;const e=t[0];if("TEXTAREA"===e.tagName)return!1;if("HA-SELECT"===e.parentElement?.tagName)return!1;if("INPUT"!==e.tagName)return!0;switch(e.type){case"button":case"checkbox":case"hidden":case"radio":case"range":return!0;default:return!1}})(t.composedPath()))return;if(window.getSelection()?.toString())return;return t.preventDefault(),void e[o]()}const a=this.supportedSingleKeyShortcuts();o in a&&(t.preventDefault(),a[o]())},this._listenersAdded=!1}};function V(t){return null==t||Array.isArray(t)?t:[t]}var B=o(763);const I=(t,e)=>!e.component||V(e.component).some((e=>(0,B.x)(t,e))),G=(t,e)=>!e.not_component||!V(e.not_component).some((e=>(0,B.x)(t,e))),N=t=>t.core,j=(t,e)=>(t=>t.advancedOnly)(e)&&!(t=>t.userData?.showAdvanced)(t);var W=o(8985),U=(o(8101),o(3433),o(1616)),K=o(2208),J=o(7051);class X extends K.n{attach(t){super.attach(t),this.attachableTouchController.attach(t)}disconnectedCallback(){super.disconnectedCallback(),this.hovered=!1,this.pressed=!1}detach(){super.detach(),this.attachableTouchController.detach()}_onTouchControlChange(t,e){t?.removeEventListener("touchend",this._handleTouchEnd),e?.addEventListener("touchend",this._handleTouchEnd)}constructor(...t){super(...t),this.attachableTouchController=new U.i(this,this._onTouchControlChange.bind(this)),this._handleTouchEnd=()=>{this.disabled||super.endPressAnimation()}}}X.styles=[J.R,r.AH`
      :host {
        --md-ripple-hover-opacity: var(--ha-ripple-hover-opacity, 0.08);
        --md-ripple-pressed-opacity: var(--ha-ripple-pressed-opacity, 0.12);
        --md-ripple-hover-color: var(
          --ha-ripple-hover-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );
        --md-ripple-pressed-color: var(
          --ha-ripple-pressed-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );
      }
    `],X=(0,a.__decorate)([(0,l.EM)("ha-ripple")],X);class Y extends r.WF{render(){return r.qy`
      <div
        tabindex="0"
        role="tab"
        aria-selected=${this.active}
        aria-label=${(0,y.J)(this.name)}
        @keydown=${this._handleKeyDown}
      >
        ${this.narrow?r.qy`<slot name="icon"></slot>`:""}
        <span class="name">${this.name}</span>
        <ha-ripple></ha-ripple>
      </div>
    `}_handleKeyDown(t){"Enter"===t.key&&t.target.click()}constructor(...t){super(...t),this.active=!1,this.narrow=!1}}Y.styles=r.AH`
    div {
      padding: 0 32px;
      display: flex;
      flex-direction: column;
      text-align: center;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: var(--header-height);
      cursor: pointer;
      position: relative;
      outline: none;
    }

    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    :host([active]) {
      color: var(--primary-color);
    }

    :host(:not([narrow])[active]) div {
      border-bottom: 2px solid var(--primary-color);
    }

    :host([narrow]) {
      min-width: 0;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    :host([narrow]) div {
      padding: 0 4px;
    }

    div:focus-visible:before {
      position: absolute;
      display: block;
      content: "";
      inset: 0;
      background-color: var(--secondary-text-color);
      opacity: 0.08;
    }
  `,(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0})],Y.prototype,"active",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0})],Y.prototype,"narrow",void 0),(0,a.__decorate)([(0,l.MZ)()],Y.prototype,"name",void 0),Y=(0,a.__decorate)([(0,l.EM)("ha-tab")],Y);class Q extends r.WF{willUpdate(t){t.has("route")&&(this._activeTab=this.tabs.find((t=>`${this.route.prefix}${this.route.path}`.includes(t.path)))),super.willUpdate(t)}render(){const t=this._getTabs(this.tabs,this._activeTab,this.hass.config.components,this.hass.language,this.hass.userData,this.narrow,this.localizeFunc||this.hass.localize),e=t.length>1;return r.qy`
      <div class="toolbar">
        <slot name="toolbar">
          <div class="toolbar-content">
            ${this.mainPage||!this.backPath&&history.state?.root?r.qy`
                  <ha-menu-button
                    .hassio=${this.supervisor}
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                  ></ha-menu-button>
                `:this.backPath?r.qy`
                    <a href=${this.backPath}>
                      <ha-icon-button-arrow-prev
                        .hass=${this.hass}
                      ></ha-icon-button-arrow-prev>
                    </a>
                  `:r.qy`
                    <ha-icon-button-arrow-prev
                      .hass=${this.hass}
                      @click=${this._backTapped}
                    ></ha-icon-button-arrow-prev>
                  `}
            ${this.narrow||!e?r.qy`<div class="main-title">
                  <slot name="header">${e?"":t[0]}</slot>
                </div>`:""}
            ${e&&!this.narrow?r.qy`<div id="tabbar">${t}</div>`:""}
            <div id="toolbar-icon">
              <slot name="toolbar-icon"></slot>
            </div>
          </div>
        </slot>
        ${e&&this.narrow?r.qy`<div id="tabbar" class="bottom-bar">${t}</div>`:""}
      </div>
      <div
        class=${(0,n.H)({container:!0,tabs:e&&this.narrow})}
      >
        ${this.pane?r.qy`<div class="pane">
              <div class="shadow-container"></div>
              <div class="ha-scrollbar">
                <slot name="pane"></slot>
              </div>
            </div>`:r.s6}
        <div
          class="content ha-scrollbar ${(0,n.H)({tabs:e})}"
          @scroll=${this._saveScrollPos}
        >
          <slot></slot>
          ${this.hasFab?r.qy`<div class="fab-bottom-space"></div>`:r.s6}
        </div>
      </div>
      <div id="fab" class=${(0,n.H)({tabs:e})}>
        <slot name="fab"></slot>
      </div>
    `}_saveScrollPos(t){this._savedScrollPos=t.target.scrollTop}_backTapped(){this.backCallback?this.backCallback():(0,W.O)()}static get styles(){return[S.dp,r.AH`
        :host {
          display: block;
          height: 100%;
          background-color: var(--primary-background-color);
        }

        :host([narrow]) {
          width: 100%;
          position: fixed;
        }

        .container {
          display: flex;
          height: calc(
            100% - var(--header-height, 0px) - var(--safe-area-inset-top, 0px)
          );
        }

        ha-menu-button {
          margin-right: 24px;
          margin-inline-end: 24px;
          margin-inline-start: initial;
        }

        .toolbar {
          font-size: var(--ha-font-size-xl);
          height: calc(
            var(--header-height, 0px) + var(--safe-area-inset-top, 0px)
          );
          padding-top: var(--safe-area-inset-top);
          padding-right: var(--safe-area-inset-right);
          background-color: var(--sidebar-background-color);
          font-weight: var(--ha-font-weight-normal);
          border-bottom: 1px solid var(--divider-color);
          box-sizing: border-box;
        }
        :host([narrow]) .toolbar {
          padding-left: var(--safe-area-inset-left);
        }
        .toolbar-content {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          height: 100%;
          box-sizing: border-box;
        }
        :host([narrow]) .toolbar-content {
          padding: 4px;
        }
        .toolbar a {
          color: var(--sidebar-text-color);
          text-decoration: none;
        }
        .bottom-bar a {
          width: 25%;
        }

        #tabbar {
          display: flex;
          font-size: var(--ha-font-size-m);
          overflow: hidden;
        }

        #tabbar > a {
          overflow: hidden;
          max-width: 45%;
        }

        #tabbar.bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0 16px;
          box-sizing: border-box;
          background-color: var(--sidebar-background-color);
          border-top: 1px solid var(--divider-color);
          justify-content: space-around;
          z-index: 2;
          font-size: var(--ha-font-size-s);
          width: 100%;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        #tabbar:not(.bottom-bar) {
          flex: 1;
          justify-content: center;
        }

        :host(:not([narrow])) #toolbar-icon {
          min-width: 40px;
        }

        ha-menu-button,
        ha-icon-button-arrow-prev,
        ::slotted([slot="toolbar-icon"]) {
          display: flex;
          flex-shrink: 0;
          pointer-events: auto;
          color: var(--sidebar-icon-color);
        }

        .main-title {
          flex: 1;
          max-height: var(--header-height);
          line-height: var(--ha-line-height-normal);
          color: var(--sidebar-text-color);
          margin: var(--main-title-margin, var(--margin-title));
        }

        .content {
          position: relative;
          width: 100%;
          margin-right: var(--safe-area-inset-right);
          margin-inline-end: var(--safe-area-inset-right);
          margin-bottom: var(--safe-area-inset-bottom);
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
        :host([narrow]) .content {
          margin-left: var(--safe-area-inset-left);
          margin-inline-start: var(--safe-area-inset-left);
        }
        :host([narrow]) .content.tabs {
          /* Bottom bar reuses header height */
          margin-bottom: calc(
            var(--header-height, 0px) + var(--safe-area-inset-bottom, 0px)
          );
        }

        .content .fab-bottom-space {
          height: calc(64px + var(--safe-area-inset-bottom, 0px));
        }

        :host([narrow]) .content.tabs .fab-bottom-space {
          height: calc(80px + var(--safe-area-inset-bottom, 0px));
        }

        #fab {
          position: fixed;
          right: calc(16px + var(--safe-area-inset-right, 0px));
          inset-inline-end: calc(16px + var(--safe-area-inset-right));
          inset-inline-start: initial;
          bottom: calc(16px + var(--safe-area-inset-bottom, 0px));
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px;
        }
        :host([narrow]) #fab.tabs {
          bottom: calc(84px + var(--safe-area-inset-bottom, 0px));
        }
        #fab[is-wide] {
          bottom: 24px;
          right: 24px;
          inset-inline-end: 24px;
          inset-inline-start: initial;
        }

        .pane {
          border-right: 1px solid var(--divider-color);
          border-inline-end: 1px solid var(--divider-color);
          border-inline-start: initial;
          box-sizing: border-box;
          display: flex;
          flex: 0 0 var(--sidepane-width, 250px);
          width: var(--sidepane-width, 250px);
          flex-direction: column;
          position: relative;
        }
        .pane .ha-scrollbar {
          flex: 1;
        }
      `]}constructor(...t){super(...t),this.supervisor=!1,this.mainPage=!1,this.narrow=!1,this.isWide=!1,this.pane=!1,this.hasFab=!1,this._getTabs=(0,w.A)(((t,e,o,a,i,l,n)=>{const s=t.filter((t=>((t,e)=>(N(e)||I(t,e))&&!j(t,e)&&G(t,e))(this.hass,t)));if(s.length<2){if(1===s.length){const t=s[0];return[t.translationKey?n(t.translationKey):t.name]}return[""]}return s.map((t=>r.qy`
          <a href=${t.path}>
            <ha-tab
              .hass=${this.hass}
              .active=${t.path===e?.path}
              .narrow=${this.narrow}
              .name=${t.translationKey?n(t.translationKey):t.name}
            >
              ${t.iconPath?r.qy`<ha-svg-icon
                    slot="icon"
                    .path=${t.iconPath}
                  ></ha-svg-icon>`:""}
            </ha-tab>
          </a>
        `))}))}}(0,a.__decorate)([(0,l.MZ)({attribute:!1})],Q.prototype,"hass",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],Q.prototype,"supervisor",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],Q.prototype,"localizeFunc",void 0),(0,a.__decorate)([(0,l.MZ)({type:String,attribute:"back-path"})],Q.prototype,"backPath",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],Q.prototype,"backCallback",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,attribute:"main-page"})],Q.prototype,"mainPage",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],Q.prototype,"route",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],Q.prototype,"tabs",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0})],Q.prototype,"narrow",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0,attribute:"is-wide"})],Q.prototype,"isWide",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],Q.prototype,"pane",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,attribute:"has-fab"})],Q.prototype,"hasFab",void 0),(0,a.__decorate)([(0,l.wk)()],Q.prototype,"_activeTab",void 0),(0,a.__decorate)([$(".content")],Q.prototype,"_savedScrollPos",void 0),(0,a.__decorate)([(0,l.Ls)({passive:!0})],Q.prototype,"_saveScrollPos",null),Q=(0,a.__decorate)([(0,l.EM)("hass-tabs-subpage")],Q);const tt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",et="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z",ot="M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M21.12 15.46L19 17.59L16.88 15.46L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88L21.12 15.46Z",at="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",it="M7,10L12,15L17,10H7Z";class rt extends(P(r.WF)){supportedShortcuts(){return{f:()=>this._searchInput.focus()}}clearSelection(){this._dataTable.clearSelection()}willUpdate(){this.hasUpdated||(this.initialGroupColumn&&this.columns[this.initialGroupColumn]&&this._setGroupColumn(this.initialGroupColumn),this.initialSorting&&this.columns[this.initialSorting.column]&&(this._sortColumn=this.initialSorting.column,this._sortDirection=this.initialSorting.direction))}render(){const t=this.localizeFunc||this.hass.localize,e=this._showPaneController.value??!this.narrow,o=this.hasFilters?r.qy`<div class="relative">
          <ha-assist-chip
            .label=${t("ui.components.subpage-data-table.filters")}
            .active=${this.filters}
            @click=${this._toggleFilters}
          >
            <ha-svg-icon slot="icon" .path=${et}></ha-svg-icon>
          </ha-assist-chip>
          ${this.filters?r.qy`<div class="badge">${this.filters}</div>`:r.s6}
        </div>`:r.s6,a=this.selectable&&!this._selectMode?r.qy`<ha-assist-chip
            class="has-dropdown select-mode-chip"
            .active=${this._selectMode}
            @click=${this._enableSelectMode}
            .title=${t("ui.components.subpage-data-table.enter_selection_mode")}
          >
            <ha-svg-icon slot="icon" .path=${at}></ha-svg-icon>
          </ha-assist-chip>`:r.s6,i=r.qy`<search-input-outlined
      .hass=${this.hass}
      .filter=${this.filter}
      @value-changed=${this._handleSearchChange}
      .label=${this.searchLabel}
      .placeholder=${this.searchLabel}
    >
    </search-input-outlined>`,l=Object.values(this.columns).find((t=>t.sortable))?r.qy`
          <ha-md-button-menu positioning="popover">
            <ha-assist-chip
              slot="trigger"
              .label=${t("ui.components.subpage-data-table.sort_by",{sortColumn:this._sortColumn&&this.columns[this._sortColumn]&&` ${this.columns[this._sortColumn].title||this.columns[this._sortColumn].label}`||""})}
            >
              <ha-svg-icon
                slot="trailing-icon"
                .path=${it}
              ></ha-svg-icon>
            </ha-assist-chip>
            ${Object.entries(this.columns).map((([t,e])=>e.sortable?r.qy`
                    <ha-md-menu-item
                      .value=${t}
                      @click=${this._handleSortBy}
                      @keydown=${this._handleSortBy}
                      keep-open
                      .selected=${t===this._sortColumn}
                      class=${(0,n.H)({selected:t===this._sortColumn})}
                    >
                      ${this._sortColumn===t?r.qy`
                            <ha-svg-icon
                              slot="end"
                              .path=${"desc"===this._sortDirection?"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z":"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                            ></ha-svg-icon>
                          `:r.s6}
                      ${e.title||e.label}
                    </ha-md-menu-item>
                  `:r.s6))}
          </ha-md-button-menu>
        `:r.s6,s=Object.values(this.columns).find((t=>t.groupable))?r.qy`
          <ha-md-button-menu positioning="popover">
            <ha-assist-chip
              .label=${t("ui.components.subpage-data-table.group_by",{groupColumn:this._groupColumn&&this.columns[this._groupColumn]?` ${this.columns[this._groupColumn].title||this.columns[this._groupColumn].label}`:""})}
              slot="trigger"
            >
              <ha-svg-icon
                slot="trailing-icon"
                .path=${it}
              ></ha-svg-icon
            ></ha-assist-chip>
            ${Object.entries(this.columns).map((([t,e])=>e.groupable?r.qy`
                    <ha-md-menu-item
                      .value=${t}
                      .clickAction=${this._handleGroupBy}
                      .selected=${t===this._groupColumn}
                      class=${(0,n.H)({selected:t===this._groupColumn})}
                    >
                      ${e.title||e.label}
                    </ha-md-menu-item>
                  `:r.s6))}
            <ha-md-menu-item
              .value=${""}
              .clickAction=${this._handleGroupBy}
              .selected=${!this._groupColumn}
              class=${(0,n.H)({selected:!this._groupColumn})}
            >
              ${t("ui.components.subpage-data-table.dont_group_by")}
            </ha-md-menu-item>
            <ha-md-divider role="separator" tabindex="-1"></ha-md-divider>
            <ha-md-menu-item
              .clickAction=${this._collapseAllGroups}
              .disabled=${!this._groupColumn}
            >
              <ha-svg-icon
                slot="start"
                .path=${"M16.59,5.41L15.17,4L12,7.17L8.83,4L7.41,5.41L12,10M7.41,18.59L8.83,20L12,16.83L15.17,20L16.58,18.59L12,14L7.41,18.59Z"}
              ></ha-svg-icon>
              ${t("ui.components.subpage-data-table.collapse_all_groups")}
            </ha-md-menu-item>
            <ha-md-menu-item
              .clickAction=${this._expandAllGroups}
              .disabled=${!this._groupColumn}
            >
              <ha-svg-icon
                slot="start"
                .path=${"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}
              ></ha-svg-icon>
              ${t("ui.components.subpage-data-table.expand_all_groups")}
            </ha-md-menu-item>
          </ha-md-button-menu>
        `:r.s6,d=r.qy`<ha-assist-chip
      class="has-dropdown select-mode-chip"
      @click=${this._openSettings}
      .title=${t("ui.components.subpage-data-table.settings")}
    >
      <ha-svg-icon slot="icon" .path=${"M3 3H17C18.11 3 19 3.9 19 5V12.08C17.45 11.82 15.92 12.18 14.68 13H11V17H12.08C11.97 17.68 11.97 18.35 12.08 19H3C1.9 19 1 18.11 1 17V5C1 3.9 1.9 3 3 3M3 7V11H9V7H3M11 7V11H17V7H11M3 13V17H9V13H3M22.78 19.32L21.71 18.5C21.73 18.33 21.75 18.17 21.75 18S21.74 17.67 21.71 17.5L22.77 16.68C22.86 16.6 22.89 16.47 22.83 16.36L21.83 14.63C21.77 14.5 21.64 14.5 21.5 14.5L20.28 15C20 14.82 19.74 14.65 19.43 14.53L19.24 13.21C19.23 13.09 19.12 13 19 13H17C16.88 13 16.77 13.09 16.75 13.21L16.56 14.53C16.26 14.66 15.97 14.82 15.71 15L14.47 14.5C14.36 14.5 14.23 14.5 14.16 14.63L13.16 16.36C13.1 16.47 13.12 16.6 13.22 16.68L14.28 17.5C14.26 17.67 14.25 17.83 14.25 18S14.26 18.33 14.28 18.5L13.22 19.32C13.13 19.4 13.1 19.53 13.16 19.64L14.16 21.37C14.22 21.5 14.35 21.5 14.47 21.5L15.71 21C15.97 21.18 16.25 21.35 16.56 21.47L16.75 22.79C16.77 22.91 16.87 23 17 23H19C19.12 23 19.23 22.91 19.25 22.79L19.44 21.47C19.74 21.34 20 21.18 20.28 21L21.5 21.5C21.64 21.5 21.77 21.5 21.84 21.37L22.84 19.64C22.9 19.53 22.87 19.4 22.78 19.32M18 19.5C17.17 19.5 16.5 18.83 16.5 18S17.18 16.5 18 16.5 19.5 17.17 19.5 18 18.84 19.5 18 19.5Z"}></ha-svg-icon>
    </ha-assist-chip>`;return r.qy`
      <hass-tabs-subpage
        .hass=${this.hass}
        .localizeFunc=${this.localizeFunc}
        .narrow=${this.narrow}
        .isWide=${this.isWide}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
        .mainPage=${this.mainPage}
        .supervisor=${this.supervisor}
        .pane=${e&&this.showFilters}
        @sorting-changed=${this._sortingChanged}
      >
        ${this._selectMode?r.qy`<div class="selection-bar" slot="toolbar">
              <div class="selection-controls">
                <ha-icon-button
                  .path=${tt}
                  @click=${this._disableSelectMode}
                  .label=${t("ui.components.subpage-data-table.exit_selection_mode")}
                ></ha-icon-button>
                <ha-md-button-menu>
                  <ha-assist-chip
                    .label=${t("ui.components.subpage-data-table.select")}
                    slot="trigger"
                  >
                    <ha-svg-icon
                      slot="icon"
                      .path=${at}
                    ></ha-svg-icon>
                    <ha-svg-icon
                      slot="trailing-icon"
                      .path=${it}
                    ></ha-svg-icon
                  ></ha-assist-chip>
                  <ha-md-menu-item
                    .value=${void 0}
                    .clickAction=${this._selectAll}
                  >
                    <div slot="headline">
                      ${t("ui.components.subpage-data-table.select_all")}
                    </div>
                  </ha-md-menu-item>
                  <ha-md-menu-item
                    .value=${void 0}
                    .clickAction=${this._selectNone}
                  >
                    <div slot="headline">
                      ${t("ui.components.subpage-data-table.select_none")}
                    </div>
                  </ha-md-menu-item>
                  <ha-md-divider role="separator" tabindex="-1"></ha-md-divider>
                  <ha-md-menu-item
                    .value=${void 0}
                    .clickAction=${this._disableSelectMode}
                  >
                    <div slot="headline">
                      ${t("ui.components.subpage-data-table.exit_selection_mode")}
                    </div>
                  </ha-md-menu-item>
                </ha-md-button-menu>
                ${void 0!==this.selected?r.qy`<p>
                      ${t("ui.components.subpage-data-table.selected",{selected:this.selected||"0"})}
                    </p>`:r.s6}
              </div>
              <div class="center-vertical">
                <slot name="selection-bar"></slot>
              </div>
            </div>`:r.s6}
        ${this.showFilters&&e?r.qy`<div class="pane" slot="pane">
                <div class="table-header">
                  <ha-assist-chip
                    .label=${t("ui.components.subpage-data-table.filters")}
                    active
                    @click=${this._toggleFilters}
                  >
                    <ha-svg-icon
                      slot="icon"
                      .path=${et}
                    ></ha-svg-icon>
                  </ha-assist-chip>
                  ${this.filters?r.qy`<ha-icon-button
                        .path=${ot}
                        @click=${this._clearFilters}
                        .label=${t("ui.components.subpage-data-table.clear_filter")}
                      ></ha-icon-button>`:r.s6}
                </div>
                <div class="pane-content">
                  <slot name="filter-pane"></slot>
                </div>
              </div>`:r.s6}
        ${this.empty?r.qy`<div class="center">
              <slot name="empty">${this.noDataText}</slot>
            </div>`:r.qy`<div slot="toolbar-icon">
                <slot name="toolbar-icon"></slot>
              </div>
              ${this.narrow?r.qy`
                    <div slot="header">
                      <slot name="header">
                        <div class="search-toolbar">${i}</div>
                      </slot>
                    </div>
                  `:""}
              <ha-data-table
                .hass=${this.hass}
                .localize=${t}
                .narrow=${this.narrow}
                .columns=${this.columns}
                .data=${this.data}
                .noDataText=${this.noDataText}
                .filter=${this.filter}
                .selectable=${this._selectMode}
                .hasFab=${this.hasFab}
                .id=${this.id}
                .clickable=${this.clickable}
                .appendRow=${this.appendRow}
                .sortColumn=${this._sortColumn}
                .sortDirection=${this._sortDirection}
                .groupColumn=${this._groupColumn}
                .groupOrder=${this.groupOrder}
                .initialCollapsedGroups=${this.initialCollapsedGroups}
                .columnOrder=${this.columnOrder}
                .hiddenColumns=${this.hiddenColumns}
              >
                ${this.narrow?r.qy`
                      <div slot="header">
                        <slot name="top-header"></slot>
                      </div>
                      <div slot="header-row" class="narrow-header-row">
                        ${this.hasFilters&&!this.showFilters?r.qy`${o}`:r.s6}
                        ${a}
                        <div class="flex"></div>
                        ${s}${l}${d}
                      </div>
                    `:r.qy`
                      <div slot="header">
                        <slot name="top-header"></slot>
                        <slot name="header">
                          <div class="table-header">
                            ${this.hasFilters&&!this.showFilters?r.qy`${o}`:r.s6}${a}${i}${s}${l}${d}
                          </div>
                        </slot>
                      </div>
                    `}
              </ha-data-table>`}
        <div slot="fab"><slot name="fab"></slot></div>
      </hass-tabs-subpage>
      ${this.showFilters&&!e?r.qy`<ha-dialog
            open
            .heading=${t("ui.components.subpage-data-table.filters")}
          >
            <ha-dialog-header slot="heading">
              <ha-icon-button
                slot="navigationIcon"
                .path=${tt}
                @click=${this._toggleFilters}
                .label=${t("ui.components.subpage-data-table.close_filter")}
              ></ha-icon-button>
              <span slot="title"
                >${t("ui.components.subpage-data-table.filters")}</span
              >
              ${this.filters?r.qy`<ha-icon-button
                    slot="actionItems"
                    @click=${this._clearFilters}
                    .path=${ot}
                    .label=${t("ui.components.subpage-data-table.clear_filter")}
                  ></ha-icon-button>`:r.s6}
            </ha-dialog-header>
            <div class="filter-dialog-content">
              <slot name="filter-pane"></slot>
            </div>
            <div slot="primaryAction">
              <ha-button @click=${this._toggleFilters}>
                ${t("ui.components.subpage-data-table.show_results",{number:this.data.length})}
              </ha-button>
            </div>
          </ha-dialog>`:r.s6}
    `}_clearFilters(){(0,s.r)(this,"clear-filter")}_toggleFilters(){this.showFilters=!this.showFilters}_sortingChanged(t){this._sortDirection=t.detail.direction,this._sortColumn=this._sortDirection?t.detail.column:void 0}_handleSortBy(t){if("keydown"===t.type&&"Enter"!==t.key&&" "!==t.key)return;const e=t.currentTarget.value;this._sortDirection&&this._sortColumn===e?"asc"===this._sortDirection?this._sortDirection="desc":this._sortDirection=null:this._sortDirection="asc",this._sortColumn=null===this._sortDirection?void 0:e,(0,s.r)(this,"sorting-changed",{column:e,direction:this._sortDirection})}_setGroupColumn(t){this._groupColumn=t,(0,s.r)(this,"grouping-changed",{value:t})}_openSettings(){var t,e;t=this,e={columns:this.columns,hiddenColumns:this.hiddenColumns,columnOrder:this.columnOrder,onUpdate:(t,e)=>{this.columnOrder=t,this.hiddenColumns=e,(0,s.r)(this,"columns-changed",{columnOrder:t,hiddenColumns:e})},localizeFunc:this.localizeFunc},(0,s.r)(t,"show-dialog",{dialogTag:"dialog-data-table-settings",dialogImport:E,dialogParams:e})}_enableSelectMode(){this._selectMode=!0}_handleSearchChange(t){this.filter!==t.detail.value&&(this.filter=t.detail.value,(0,s.r)(this,"search-changed",{value:this.filter}))}constructor(...t){super(...t),this.isWide=!1,this.narrow=!1,this.supervisor=!1,this.mainPage=!1,this.initialCollapsedGroups=[],this.columns={},this.data=[],this.selectable=!1,this.clickable=!1,this.hasFab=!1,this.id="id",this.filter="",this.empty=!1,this.tabs=[],this.hasFilters=!1,this.showFilters=!1,this._sortDirection=null,this._selectMode=!1,this._showPaneController=new i.P(this,{callback:t=>t[0]?.contentRect.width>750}),this._handleGroupBy=t=>{this._setGroupColumn(t.value)},this._collapseAllGroups=()=>{this._dataTable.collapseAllGroups()},this._expandAllGroups=()=>{this._dataTable.expandAllGroups()},this._disableSelectMode=()=>{this._selectMode=!1,this._dataTable.clearSelection()},this._selectAll=()=>{this._dataTable.selectAll()},this._selectNone=()=>{this._dataTable.clearSelection()}}}rt.styles=r.AH`
    :host {
      display: block;
      height: 100%;
    }

    ha-data-table {
      width: 100%;
      height: 100%;
      --data-table-border-width: 0;
    }
    :host(:not([narrow])) ha-data-table,
    .pane {
      height: calc(
        100vh -
          1px - var(--header-height, 0px) - var(
            --safe-area-inset-top,
            0px
          ) - var(--safe-area-inset-bottom, 0px)
      );
      display: block;
    }

    .pane-content {
      height: calc(
        100vh -
          1px - var(--header-height, 0px) - var(--header-height, 0px) - var(
            --safe-area-inset-top,
            0px
          ) - var(--safe-area-inset-bottom, 0px)
      );
      display: flex;
      flex-direction: column;
    }

    :host([narrow]) hass-tabs-subpage {
      --main-title-margin: 0;
    }
    :host([narrow]) {
      --expansion-panel-summary-padding: 0 16px;
    }
    .table-header {
      display: flex;
      align-items: center;
      --mdc-shape-small: 0;
      height: 56px;
      width: 100%;
      justify-content: space-between;
      padding: 0 16px;
      gap: 16px;
      box-sizing: border-box;
      background: var(--primary-background-color);
      border-bottom: 1px solid var(--divider-color);
    }
    search-input-outlined {
      flex: 1;
    }
    .search-toolbar {
      display: flex;
      align-items: center;
      color: var(--secondary-text-color);
    }
    .filters {
      --mdc-text-field-fill-color: var(--input-fill-color);
      --mdc-text-field-idle-line-color: var(--input-idle-line-color);
      --mdc-shape-small: 4px;
      --text-field-overflow: initial;
      display: flex;
      justify-content: flex-end;
      color: var(--primary-text-color);
    }
    .active-filters {
      color: var(--primary-text-color);
      position: relative;
      display: flex;
      align-items: center;
      padding: 2px 2px 2px 8px;
      margin-left: 4px;
      margin-inline-start: 4px;
      margin-inline-end: initial;
      font-size: var(--ha-font-size-m);
      width: max-content;
      cursor: initial;
      direction: var(--direction);
    }
    .active-filters ha-svg-icon {
      color: var(--primary-color);
    }
    .active-filters::before {
      background-color: var(--primary-color);
      opacity: 0.12;
      border-radius: 4px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      padding: 16px;
    }

    .badge {
      position: absolute;
      top: -4px;
      right: -4px;
      inset-inline-end: -4px;
      inset-inline-start: initial;
      min-width: 16px;
      box-sizing: border-box;
      border-radius: 50%;
      font-size: var(--ha-font-size-xs);
      font-weight: var(--ha-font-weight-normal);
      background-color: var(--primary-color);
      line-height: var(--ha-line-height-normal);
      text-align: center;
      padding: 0px 2px;
      color: var(--text-primary-color);
    }

    .narrow-header-row {
      display: flex;
      align-items: center;
      min-width: 100%;
      gap: 16px;
      padding: 0 16px;
      box-sizing: border-box;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .narrow-header-row .flex {
      flex: 1;
      margin-left: -16px;
    }

    .selection-bar {
      background: rgba(var(--rgb-primary-color), 0.1);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      box-sizing: border-box;
      font-size: var(--ha-font-size-m);
      --ha-assist-chip-container-color: var(--card-background-color);
    }

    .selection-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .selection-controls p {
      margin-left: 8px;
      margin-inline-start: 8px;
      margin-inline-end: initial;
    }

    .center-vertical {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .relative {
      position: relative;
    }

    ha-assist-chip {
      --ha-assist-chip-container-shape: 10px;
      --ha-assist-chip-container-color: var(--card-background-color);
    }

    .select-mode-chip {
      --md-assist-chip-icon-label-space: 0;
      --md-assist-chip-trailing-space: 8px;
    }

    ha-dialog {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: 0;
      --dialog-content-padding: 0;
    }

    .filter-dialog-content {
      height: calc(
        100vh -
          70px - var(--header-height, 0px) - var(
            --safe-area-inset-top,
            0px
          ) - var(--safe-area-inset-bottom, 0px)
      );
      display: flex;
      flex-direction: column;
    }

    ha-md-button-menu ha-assist-chip {
      --md-assist-chip-trailing-space: 8px;
    }
  `,(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"hass",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"localizeFunc",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"is-wide",type:Boolean})],rt.prototype,"isWide",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,reflect:!0})],rt.prototype,"narrow",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],rt.prototype,"supervisor",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean,attribute:"main-page"})],rt.prototype,"mainPage",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"initialCollapsedGroups",void 0),(0,a.__decorate)([(0,l.MZ)({type:Object})],rt.prototype,"columns",void 0),(0,a.__decorate)([(0,l.MZ)({type:Array})],rt.prototype,"data",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],rt.prototype,"selectable",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],rt.prototype,"clickable",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"has-fab",type:Boolean})],rt.prototype,"hasFab",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"appendRow",void 0),(0,a.__decorate)([(0,l.MZ)({type:String})],rt.prototype,"id",void 0),(0,a.__decorate)([(0,l.MZ)({type:String})],rt.prototype,"filter",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"searchLabel",void 0),(0,a.__decorate)([(0,l.MZ)({type:Number})],rt.prototype,"filters",void 0),(0,a.__decorate)([(0,l.MZ)({type:Number})],rt.prototype,"selected",void 0),(0,a.__decorate)([(0,l.MZ)({type:String,attribute:"back-path"})],rt.prototype,"backPath",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"backCallback",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1,type:String})],rt.prototype,"noDataText",void 0),(0,a.__decorate)([(0,l.MZ)({type:Boolean})],rt.prototype,"empty",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"route",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"tabs",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"has-filters",type:Boolean})],rt.prototype,"hasFilters",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:"show-filters",type:Boolean})],rt.prototype,"showFilters",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"initialSorting",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"initialGroupColumn",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"groupOrder",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"columnOrder",void 0),(0,a.__decorate)([(0,l.MZ)({attribute:!1})],rt.prototype,"hiddenColumns",void 0),(0,a.__decorate)([(0,l.wk)()],rt.prototype,"_sortColumn",void 0),(0,a.__decorate)([(0,l.wk)()],rt.prototype,"_sortDirection",void 0),(0,a.__decorate)([(0,l.wk)()],rt.prototype,"_groupColumn",void 0),(0,a.__decorate)([(0,l.wk)()],rt.prototype,"_selectMode",void 0),(0,a.__decorate)([(0,l.P)("ha-data-table",!0)],rt.prototype,"_dataTable",void 0),(0,a.__decorate)([(0,l.P)("search-input-outlined")],rt.prototype,"_searchInput",void 0),rt=(0,a.__decorate)([(0,l.EM)("hass-tabs-subpage-data-table")],rt)},3566:function(t,e,o){o.d(e,{RF:()=>r,dp:()=>n,nA:()=>l});var a=o(4922);const i=a.AH`
  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
    outline: none;
  }
`,r=a.AH`
  :host {
    font-family: var(--ha-font-family-body);
    -webkit-font-smoothing: var(--ha-font-smoothing);
    -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-normal);
    line-height: var(--ha-line-height-normal);
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
    margin-inline-start: 20px;
    margin-inline-end: initial;
  }

  h1 {
    font-family: var(--ha-font-family-heading);
    -webkit-font-smoothing: var(--ha-font-smoothing);
    -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
    font-size: var(--ha-font-size-2xl);
    font-weight: var(--ha-font-weight-normal);
    line-height: var(--ha-line-height-condensed);
  }

  h2 {
    font-family: var(--ha-font-family-body);
    -webkit-font-smoothing: var(--ha-font-smoothing);
    -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--ha-font-size-xl);
    font-weight: var(--ha-font-weight-medium);
    line-height: var(--ha-line-height-normal);
  }

  h3 {
    font-family: var(--ha-font-family-body);
    -webkit-font-smoothing: var(--ha-font-smoothing);
    -moz-osx-font-smoothing: var(--ha-moz-osx-font-smoothing);
    font-size: var(--ha-font-size-l);
    font-weight: var(--ha-font-weight-normal);
    line-height: var(--ha-line-height-normal);
  }

  a {
    color: var(--primary-color);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  ${i}

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`,l=a.AH`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-max-width: min(600px, 95vw);
    --justify-action-buttons: space-between;
  }

  ha-dialog .form {
    color: var(--primary-text-color);
  }

  a {
    color: var(--primary-color);
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-min-height: 100vh;
      --mdc-dialog-min-height: 100svh;
      --mdc-dialog-max-height: 100vh;
      --mdc-dialog-max-height: 100svh;
      --dialog-surface-padding: var(--safe-area-inset-top)
        var(--safe-area-inset-right) var(--safe-area-inset-bottom)
        var(--safe-area-inset-left);
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: 0;
    }
  }
  .error {
    color: var(--error-color);
  }
`,n=a.AH`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  .ha-scrollbar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`;a.AH`
  body {
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`},5363:function(t,e,o){o.d(e,{MR:()=>a});const a=t=>`https://brands.home-assistant.io/${t.brand?"brands/":""}${t.useFallback?"_/":""}${t.domain}/${t.darkOptimized?"dark_":""}${t.type}.png`},2193:function(t,e,o){function a(t){t.dispatchEvent(new CustomEvent("lcn-update-device-configs",{bubbles:!0,composed:!0}))}function i(t){t.dispatchEvent(new CustomEvent("lcn-update-entity-configs",{bubbles:!0,composed:!0}))}o.d(e,{R:()=>a,u:()=>i})},2862:function(t,e,o){function a(t){return(t[2]?"g":"m")+t[0].toString().padStart(3,"0")+t[1].toString().padStart(3,"0")}function i(t){const e="g"===t.substring(0,1);return[+t.substring(1,4),+t.substring(4,7),e]}function r(t){return`S${t[0]} ${t[2]?"G":"M"}${t[1]}`}o.d(e,{d$:()=>i,pD:()=>a,s6:()=>r})},7142:function(t,e,o){o.a(t,(async function(t,a){try{o.d(e,{z:()=>d});var i=o(9652),r=o(5363),l=o(5525),n=t([i]);async function d(t){const e=`\n    <ha-tooltip\n      placement="bottom"\n      distance=-5\n    >\n      <span slot="content">\n        LCN Frontend Panel<br/>Version: ${l.x}\n      </span>\n      <img\n        id="brand-logo"\n        alt=""\n        crossorigin="anonymous"\n        referrerpolicy="no-referrer"\n        height=48,\n        src=${(0,r.MR)({domain:"lcn",type:"icon"})}\n      />\n      </ha-tooltip>\n  `,o=t.shadowRoot.querySelector("hass-tabs-subpage").shadowRoot.querySelector(".toolbar-content"),a=o.querySelector("#tabbar");o?.querySelector("#brand-logo")||a?.insertAdjacentHTML("beforebegin",e)}i=(n.then?(await n)():n)[0],a()}catch(s){a(s)}}))},5525:function(t,e,o){o.d(e,{x:()=>a});const a="dev"}};
//# sourceMappingURL=810.52da7ee01a9f2bb9.js.map