export const __webpack_id__="314";export const __webpack_ids__=["314"];export const __webpack_modules__={1622:function(e,t,s){s.a(e,(async function(e,t){try{var a=s(9868),i=s(8640),r=s(4922),o=s(1991),n=e([i]);i=(n.then?(await n)():n)[0];class c extends i.A{updated(e){if(super.updated(e),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}static get styles(){return[i.A.styles,r.AH`
        :host {
          --indicator-color: var(
            --ha-spinner-indicator-color,
            var(--primary-color)
          );
          --track-color: var(--ha-spinner-divider-color, var(--divider-color));
          --track-width: 4px;
          --speed: 3.5s;
          font-size: var(--ha-spinner-size, 48px);
        }
      `]}}(0,a.__decorate)([(0,o.MZ)()],c.prototype,"size",void 0),c=(0,a.__decorate)([(0,o.EM)("ha-spinner")],c),t()}catch(c){t(c)}}))},3801:function(e,t,s){s.a(e,(async function(e,a){try{s.r(t),s.d(t,{ProgressDialog:()=>l});var i=s(9868),r=s(1622),o=s(4922),n=s(1991),c=s(3566),p=s(3120),d=e([r]);r=(d.then?(await d)():d)[0];class l extends o.WF{async showDialog(e){this._params=e,await this.updateComplete,(0,p.r)(this._dialog,"iron-resize")}async closeDialog(){this.close()}render(){return this._params?o.qy`
      <ha-dialog open scrimClickAction escapeKeyAction @close-dialog=${this.closeDialog}>
        <h2>${this._params?.title}</h2>
        <p>${this._params?.text}</p>

        <div id="dialog-content">
          <ha-spinner></ha-spinner>
        </div>
      </ha-dialog>
    `:o.s6}close(){this._params=void 0}static get styles(){return[c.nA,o.AH`
        #dialog-content {
          text-align: center;
        }
      `]}}(0,i.__decorate)([(0,n.MZ)({attribute:!1})],l.prototype,"hass",void 0),(0,i.__decorate)([(0,n.wk)()],l.prototype,"_params",void 0),(0,i.__decorate)([(0,n.P)("ha-dialog",!0)],l.prototype,"_dialog",void 0),l=(0,i.__decorate)([(0,n.EM)("progress-dialog")],l),a()}catch(l){a(l)}}))}};
//# sourceMappingURL=314.530b343c1a397389.js.map