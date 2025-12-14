"use strict";(self.webpackChunklcn_frontend=self.webpackChunklcn_frontend||[]).push([["136"],{56292:function(e,t,i){var a=i(69868),s=i(63442),d=i(45141),o=i(84922),r=i(11991);let l;class n extends s.F{}n.styles=[d.R,(0,o.AH)(l||(l=(e=>e)`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `))],n=(0,a.__decorate)([(0,r.EM)("ha-radio")],n)},34787:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{CreateDeviceDialog:function(){return m}});i(35748),i(5934),i(95013);var s=i(69868),d=i(76943),o=(i(71291),i(56292),i(52893),i(11934),i(73120)),r=i(84922),l=i(11991),n=i(72847),c=i(83566),h=i(81475),_=e([d]);d=(_.then?(await _)():_)[0];let p,u,g=e=>e;class m extends r.WF{async showDialog(e){this._params=e,this.lcn=e.lcn,await this.updateComplete}firstUpdated(e){super.firstUpdated(e),(0,h.W)()}willUpdate(e){e.has("_invalid")&&(this._invalid=!this._validateSegmentId(this._segmentId)||!this._validateAddressId(this._addressId,this._isGroup))}render(){return this._params?(0,r.qy)(p||(p=g`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${0}
        @closed=${0}
      >
        <div id="type">${0}</div>

        <ha-formfield label=${0}>
          <ha-radio
            name="is_group"
            value="module"
            .checked=${0}
            @change=${0}
          ></ha-radio>
        </ha-formfield>

        <ha-formfield label=${0}>
          <ha-radio
            name="is_group"
            value="group"
            .checked=${0}
            @change=${0}
          ></ha-radio>
        </ha-formfield>

        <ha-textfield
          .label=${0}
          type="number"
          .value=${0}
          min="0"
          required
          autoValidate
          @input=${0}
          .validityTransform=${0}
          .validationMessage=${0}
        ></ha-textfield>

        <ha-textfield
          .label=${0}
          type="number"
          .value=${0}
          min="0"
          required
          autoValidate
          @input=${0}
          .validityTransform=${0}
          .validationMessage=${0}
        ></ha-textfield>

        <div class="buttons">
          <ha-button slot="secondaryAction" @click=${0}>
            ${0}
          </ha-button>
          <ha-button slot="primaryAction" @click=${0} .disabled=${0}>
            ${0}
          </ha-button>
        </div>
      </ha-dialog>
    `),(0,n.l)(this.hass,this.lcn.localize("dashboard-devices-dialog-create-title")),this._closeDialog,this.lcn.localize("type"),this.lcn.localize("module"),!1===this._isGroup,this._isGroupChanged,this.lcn.localize("group"),!0===this._isGroup,this._isGroupChanged,this.lcn.localize("segment-id"),this._segmentId.toString(),this._segmentIdChanged,this._validityTransformSegmentId,this.lcn.localize("dashboard-devices-dialog-error-segment"),this.lcn.localize("id"),this._addressId.toString(),this._addressIdChanged,this._validityTransformAddressId,this._isGroup?this.lcn.localize("dashboard-devices-dialog-error-group"):this.lcn.localize("dashboard-devices-dialog-error-module"),this._closeDialog,this.lcn.localize("dismiss"),this._create,this._invalid,this.lcn.localize("create")):r.s6}_isGroupChanged(e){this._isGroup="group"===e.target.value}_segmentIdChanged(e){const t=e.target;this._segmentId=+t.value}_addressIdChanged(e){const t=e.target;this._addressId=+t.value}_validateSegmentId(e){return 0===e||e>=5&&e<=128}_validateAddressId(e,t){return e>=5&&e<=254}get _validityTransformSegmentId(){return e=>({valid:this._validateSegmentId(+e)})}get _validityTransformAddressId(){return e=>({valid:this._validateAddressId(+e,this._isGroup)})}async _create(){const e={name:"",address:[this._segmentId,this._addressId,this._isGroup]};await this._params.createDevice(e),this._closeDialog()}_closeDialog(){this._params=void 0,(0,o.r)(this,"dialog-closed",{dialog:this.localName})}static get styles(){return[c.nA,(0,r.AH)(u||(u=g`
        #port-type {
          margin-top: 16px;
        }
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          padding: 8px;
        }
      `))]}constructor(...e){super(...e),this._isGroup=!1,this._segmentId=0,this._addressId=5,this._invalid=!1}}(0,s.__decorate)([(0,l.MZ)({attribute:!1})],m.prototype,"hass",void 0),(0,s.__decorate)([(0,l.MZ)({attribute:!1})],m.prototype,"lcn",void 0),(0,s.__decorate)([(0,l.wk)()],m.prototype,"_params",void 0),(0,s.__decorate)([(0,l.wk)()],m.prototype,"_isGroup",void 0),(0,s.__decorate)([(0,l.wk)()],m.prototype,"_segmentId",void 0),(0,s.__decorate)([(0,l.wk)()],m.prototype,"_addressId",void 0),(0,s.__decorate)([(0,l.wk)()],m.prototype,"_invalid",void 0),m=(0,s.__decorate)([(0,l.EM)("lcn-create-device-dialog")],m),a()}catch(p){a(p)}}))}}]);
//# sourceMappingURL=lcn-create-device-dialog.5adc9c7316ff9dec.js.map