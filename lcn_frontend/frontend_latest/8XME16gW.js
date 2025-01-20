/*! For license information please see 8XME16gW.js.LICENSE.txt */
export const id=568;export const ids=[568];export const modules={6494:(e,t,i)=>{var o=i(2659),a=i(8068),n=i(8597),s=i(196),r=i(5538);(0,o.A)([(0,s.EM)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[r.R,n.AH`
      ::slotted([slot="icon"]) {
        margin-inline-start: 0px;
        margin-inline-end: 8px;
        direction: var(--direction);
        display: block;
      }
      .mdc-button {
        height: var(--button-height, 36px);
      }
      .trailing-icon {
        display: flex;
      }
      .slot-container {
        overflow: var(--button-slot-container-overflow, visible);
      }
    `]}}]}}),a.$)},7568:(e,t,i)=>{var o=i(2659),a=i(8597),n=i(196),s=i(9760),r=i(9278),l=i(3167),d=i(9534),c=i(6513),h=(i(3401),i(7371)),p=i(7474),m=i(1023);const u={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:m.Ux.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:m.Ux.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},g={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:m.Ux.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:m.Ux.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},v=(0,h.n)(a.WF);class f extends v{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>u,this.getCloseAnimation=()=>g,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=a.S$?null:document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),a.S$||this.addEventListener("submit",this.handleSubmit)}async show(){var e;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),null===(e=this.querySelector("[autofocus]"))||void 0===e||e.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=e;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,o=a.qy`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:n}=this;return a.qy`
      <div class="scrim"></div>
      <dialog
        class=${(0,s.H)(t)}
        aria-label=${n||a.s6}
        aria-labelledby=${this.hasHeadline?"headline":a.s6}
        role=${"alert"===this.type?"alertdialog":a.s6}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||a.s6}>
        ${i?o:a.s6}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||a.s6}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${i?o:a.s6}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((e=>{for(const t of e)this.handleAnchorIntersection(t)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){var t;const i=e.target,{submitter:o}=e;"dialog"===i.method&&o&&this.close(null!==(t=o.getAttribute("value"))&&void 0!==t?t:this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!(0,p.M)(this,e);e.preventDefault(),t||this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,null===(e=this.dialog)||void 0===e||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){"Escape"===e.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(e){var t;if(null===(t=this.cancelAnimations)||void 0===t||t.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:i,scrim:o,container:a,headline:n,content:s,actions:r}=this;if(!(i&&o&&a&&n&&s&&r))return;const{container:l,dialog:d,scrim:c,headline:h,content:p,actions:m}=e,u=[[i,null!=d?d:[]],[o,null!=c?c:[]],[a,null!=l?l:[]],[n,null!=h?h:[]],[s,null!=p?p:[]],[r,null!=m?m:[]]],g=[];for(const[v,f]of u)for(const e of f){const t=v.animate(...e);this.cancelAnimations.signal.addEventListener("abort",(()=>{t.cancel()})),g.push(t)}await Promise.all(g.map((e=>e.finished.catch((()=>{})))))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:i}=e;t===this.topAnchor&&(this.isAtScrollTop=i),t===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((e=>{this.isConnectedPromiseResolve=e}))}handleFocusTrapFocus(e){const[t,i]=this.getFirstAndLastFocusableChildren();var o;if(!t||!i)return void(null===(o=this.dialog)||void 0===o||o.focus());const a=e.target===this.firstFocusTrap,n=!a,s=e.relatedTarget===t,r=e.relatedTarget===i,l=!s&&!r;if(n&&r||a&&l)return void t.focus();(a&&s||n&&l)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;y(i)&&(e||(e=i),t=i)}return[e,t]}}function y(e){var t,i;const o=":not(:disabled,[disabled])";if(e.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+o+':not([tabindex^="-"])'))return!0;return!!e.localName.includes("-")&&(!!e.matches(o)&&(null!==(t=null===(i=e.shadowRoot)||void 0===i?void 0:i.delegatesFocus)&&void 0!==t&&t))}(0,c.Cg)([(0,n.MZ)({type:Boolean})],f.prototype,"open",null),(0,c.Cg)([(0,n.MZ)({type:Boolean})],f.prototype,"quick",void 0),(0,c.Cg)([(0,n.MZ)({attribute:!1})],f.prototype,"returnValue",void 0),(0,c.Cg)([(0,n.MZ)()],f.prototype,"type",void 0),(0,c.Cg)([(0,n.MZ)({type:Boolean,attribute:"no-focus-trap"})],f.prototype,"noFocusTrap",void 0),(0,c.Cg)([(0,n.P)("dialog")],f.prototype,"dialog",void 0),(0,c.Cg)([(0,n.P)(".scrim")],f.prototype,"scrim",void 0),(0,c.Cg)([(0,n.P)(".container")],f.prototype,"container",void 0),(0,c.Cg)([(0,n.P)(".headline")],f.prototype,"headline",void 0),(0,c.Cg)([(0,n.P)(".content")],f.prototype,"content",void 0),(0,c.Cg)([(0,n.P)(".actions")],f.prototype,"actions",void 0),(0,c.Cg)([(0,n.wk)()],f.prototype,"isAtScrollTop",void 0),(0,c.Cg)([(0,n.wk)()],f.prototype,"isAtScrollBottom",void 0),(0,c.Cg)([(0,n.P)(".scroller")],f.prototype,"scroller",void 0),(0,c.Cg)([(0,n.P)(".top.anchor")],f.prototype,"topAnchor",void 0),(0,c.Cg)([(0,n.P)(".bottom.anchor")],f.prototype,"bottomAnchor",void 0),(0,c.Cg)([(0,n.P)(".focus-trap")],f.prototype,"firstFocusTrap",void 0),(0,c.Cg)([(0,n.wk)()],f.prototype,"hasHeadline",void 0),(0,c.Cg)([(0,n.wk)()],f.prototype,"hasActions",void 0),(0,c.Cg)([(0,n.wk)()],f.prototype,"hasIcon",void 0);const x=a.AH`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let b,w=class extends f{};w.styles=[x],w=(0,c.Cg)([(0,n.EM)("md-dialog")],w),w.addInitializer((async e=>{await e.updateComplete;const t=e;t.dialog.prepend(t.scrim),t.scrim.style.inset=0,t.scrim.style.zIndex=0;const{getOpenAnimation:i,getCloseAnimation:o}=t;t.getOpenAnimation=()=>{var e,t;const o=i.call(void 0);return o.container=[...null!==(e=o.container)&&void 0!==e?e:[],...null!==(t=o.dialog)&&void 0!==t?t:[]],o.dialog=[],o},t.getCloseAnimation=()=>{var e,t;const i=o.call(void 0);return i.container=[...null!==(e=i.container)&&void 0!==e?e:[],...null!==(t=i.dialog)&&void 0!==t?t:[]],i.dialog=[],i}}));(0,o.A)([(0,n.EM)("ha-md-dialog")],(function(e,t){class o extends t{constructor(){super(),e(this),this.addEventListener("cancel",this._handleCancel),"function"!=typeof HTMLDialogElement&&(this.addEventListener("open",this._handleOpen),b||(b=i.e(331).then(i.bind(i,331)))),void 0===this.animate&&(this.quick=!0),void 0===this.animate&&(this.quick=!0)}}return{F:o,d:[{kind:"field",decorators:[(0,n.MZ)({attribute:"disable-cancel-action",type:Boolean})],key:"disableCancelAction",value(){return!1}},{kind:"field",key:"_polyfillDialogRegistered",value(){return!1}},{kind:"method",key:"_handleOpen",value:async function(e){var t;if(e.preventDefault(),this._polyfillDialogRegistered)return;this._polyfillDialogRegistered=!0,this._loadPolyfillStylesheet("/static/polyfills/dialog-polyfill.css");const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("dialog");(await b).default.registerDialog(i),this.removeEventListener("open",this._handleOpen),this.show()}},{kind:"method",key:"_loadPolyfillStylesheet",value:async function(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,new Promise(((i,o)=>{var a;t.onload=()=>i(),t.onerror=()=>o(new Error(`Stylesheet failed to load: ${e}`)),null===(a=this.shadowRoot)||void 0===a||a.appendChild(t)}))}},{kind:"method",key:"_handleCancel",value:function(e){if(this.disableCancelAction){var t;e.preventDefault();const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("dialog .container");void 0!==this.animate&&(null==i||i.animate([{transform:"rotate(-1deg)","animation-timing-function":"ease-in"},{transform:"rotate(1.5deg)","animation-timing-function":"ease-out"},{transform:"rotate(0deg)","animation-timing-function":"ease-in"}],{duration:200,iterations:2}))}}},{kind:"field",static:!0,key:"styles",value(){return[...(0,d.A)(o,"styles",this),a.AH`
      :host {
        --md-dialog-container-color: var(--card-background-color);
        --md-dialog-headline-color: var(--primary-text-color);
        --md-dialog-supporting-text-color: var(--primary-text-color);
        --md-sys-color-scrim: #000000;

        --md-dialog-headline-weight: 400;
        --md-dialog-headline-size: 1.574rem;
        --md-dialog-supporting-text-size: 1rem;
        --md-dialog-supporting-text-line-height: 1.5rem;
      }

      :host([type="alert"]) {
        min-width: 320px;
      }

      :host(:not([type="alert"])) {
        @media all and (max-width: 450px), all and (max-height: 500px) {
          min-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          max-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          min-height: 100%;
          max-height: 100%;
          --md-dialog-container-shape: 0;
        }
      }

      :host ::slotted(ha-dialog-header) {
        display: contents;
      }

      .scroller {
        overflow: var(--dialog-content-overflow, auto);
      }

      slot[name="content"]::slotted(*) {
        padding: var(--dialog-content-padding, 24px);
      }
      .scrim {
        z-index: 10; // overlay navigation
      }
    `]}}]}}),w);i(2714),i(9222),i(6494),i(9373);(0,o.A)([(0,n.EM)("dialog-box")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_closeState",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-textfield")],key:"_textField",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-md-dialog")],key:"_dialog",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){var e,t;return!(null!==(e=this._params)&&void 0!==e&&e.confirmation||null!==(t=this._params)&&void 0!==t&&t.prompt)&&(!this._params||(this._dismiss(),!0))}},{kind:"method",key:"render",value:function(){if(!this._params)return a.s6;const e=this._params.confirmation||this._params.prompt,t=this._params.title||this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title");return a.qy`
      <ha-md-dialog
        open
        .disableCancelAction=${e||!1}
        @closed=${this._dialogClosed}
        type="alert"
        aria-labelledby="dialog-box-title"
        aria-describedby="dialog-box-description"
      >
        <div slot="headline">
          <span .title=${t} id="dialog-box-title">
            ${this._params.warning?a.qy`<ha-svg-icon
                  .path=${"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16"}
                  style="color: var(--warning-color)"
                ></ha-svg-icon> `:a.s6}
            ${t}
          </span>
        </div>
        <div slot="content" id="dialog-box-description">
          ${this._params.text?a.qy` <p>${this._params.text}</p> `:""}
          ${this._params.prompt?a.qy`
                <ha-textfield
                  dialogInitialFocus
                  value=${(0,r.J)(this._params.defaultValue)}
                  .placeholder=${this._params.placeholder}
                  .label=${this._params.inputLabel?this._params.inputLabel:""}
                  .type=${this._params.inputType?this._params.inputType:"text"}
                  .min=${this._params.inputMin}
                  .max=${this._params.inputMax}
                ></ha-textfield>
              `:""}
        </div>
        <div slot="actions">
          ${e&&a.qy`
            <ha-button
              @click=${this._dismiss}
              ?dialogInitialFocus=${!this._params.prompt&&this._params.destructive}
            >
              ${this._params.dismissText?this._params.dismissText:this.hass.localize("ui.dialogs.generic.cancel")}
            </ha-button>
          `}
          <ha-button
            @click=${this._confirm}
            ?dialogInitialFocus=${!this._params.prompt&&!this._params.destructive}
            class=${(0,s.H)({destructive:this._params.destructive||!1})}
          >
            ${this._params.confirmText?this._params.confirmText:this.hass.localize("ui.dialogs.generic.ok")}
          </ha-button>
        </div>
      </ha-md-dialog>
    `}},{kind:"method",key:"_cancel",value:function(){var e;null!==(e=this._params)&&void 0!==e&&e.cancel&&this._params.cancel()}},{kind:"method",key:"_dismiss",value:function(){this._closeState="canceled",this._closeDialog(),this._cancel()}},{kind:"method",key:"_confirm",value:function(){var e;(this._closeState="confirmed",this._closeDialog(),this._params.confirm)&&this._params.confirm(null===(e=this._textField)||void 0===e?void 0:e.value)}},{kind:"method",key:"_closeDialog",value:function(){var e;(0,l.r)(this,"dialog-closed",{dialog:this.localName}),null===(e=this._dialog)||void 0===e||e.close()}},{kind:"method",key:"_dialogClosed",value:function(){this._closeState||((0,l.r)(this,"dialog-closed",{dialog:this.localName}),this._cancel()),this._closeState=void 0,this._params=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`
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
      .destructive {
        --mdc-theme-primary: var(--error-color);
      }
      ha-textfield {
        width: 100%;
      }
    `}}]}}),a.WF)}};
//# sourceMappingURL=8XME16gW.js.map