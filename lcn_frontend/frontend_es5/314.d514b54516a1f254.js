"use strict";(self.webpackChunklcn_frontend=self.webpackChunklcn_frontend||[]).push([["314"],{71622:function(e,t,s){s.a(e,(async function(e,t){try{var a=s(69868),i=s(68640),r=s(84922),o=s(11991),n=e([i]);i=(n.then?(await n)():n)[0];let c,l=e=>e;class p extends i.A{updated(e){if(super.updated(e),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}static get styles(){return[i.A.styles,(0,r.AH)(c||(c=l`
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
      `))]}}(0,a.__decorate)([(0,o.MZ)()],p.prototype,"size",void 0),p=(0,a.__decorate)([(0,o.EM)("ha-spinner")],p),t()}catch(c){t(c)}}))},63801:function(e,t,s){s.a(e,(async function(e,a){try{s.r(t),s.d(t,{ProgressDialog:function(){return v}});s(5934);var i=s(69868),r=s(71622),o=s(84922),n=s(11991),c=s(83566),l=s(73120),p=e([r]);r=(p.then?(await p)():p)[0];let d,h,y=e=>e;class v extends o.WF{async showDialog(e){this._params=e,await this.updateComplete,(0,l.r)(this._dialog,"iron-resize")}async closeDialog(){this.close()}render(){var e,t;return this._params?(0,o.qy)(d||(d=y`
      <ha-dialog open scrimClickAction escapeKeyAction @close-dialog=${0}>
        <h2>${0}</h2>
        <p>${0}</p>

        <div id="dialog-content">
          <ha-spinner></ha-spinner>
        </div>
      </ha-dialog>
    `),this.closeDialog,null===(e=this._params)||void 0===e?void 0:e.title,null===(t=this._params)||void 0===t?void 0:t.text):o.s6}close(){this._params=void 0}static get styles(){return[c.nA,(0,o.AH)(h||(h=y`
        #dialog-content {
          text-align: center;
        }
      `))]}}(0,i.__decorate)([(0,n.MZ)({attribute:!1})],v.prototype,"hass",void 0),(0,i.__decorate)([(0,n.wk)()],v.prototype,"_params",void 0),(0,i.__decorate)([(0,n.P)("ha-dialog",!0)],v.prototype,"_dialog",void 0),v=(0,i.__decorate)([(0,n.EM)("progress-dialog")],v),a()}catch(d){a(d)}}))}}]);
//# sourceMappingURL=314.d514b54516a1f254.js.map