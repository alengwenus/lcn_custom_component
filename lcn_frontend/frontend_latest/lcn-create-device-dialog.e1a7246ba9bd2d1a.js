export const __webpack_id__="136";export const __webpack_ids__=["136"];export const __webpack_modules__={6292:function(e,t,i){var a=i(9868),s=i(3442),d=i(5141),o=i(4922),r=i(1991);class l extends s.F{}l.styles=[d.R,o.AH`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `],l=(0,a.__decorate)([(0,r.EM)("ha-radio")],l)},4787:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{CreateDeviceDialog:()=>p});var s=i(9868),d=i(6943),o=(i(1291),i(6292),i(2893),i(1934),i(3120)),r=i(4922),l=i(1991),n=i(2847),c=i(3566),h=i(1475),_=e([d]);d=(_.then?(await _)():_)[0];class p extends r.WF{async showDialog(e){this._params=e,this.lcn=e.lcn,await this.updateComplete}firstUpdated(e){super.firstUpdated(e),(0,h.W)()}willUpdate(e){e.has("_invalid")&&(this._invalid=!this._validateSegmentId(this._segmentId)||!this._validateAddressId(this._addressId,this._isGroup))}render(){return this._params?r.qy`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${(0,n.l)(this.hass,this.lcn.localize("dashboard-devices-dialog-create-title"))}
        @closed=${this._closeDialog}
      >
        <div id="type">${this.lcn.localize("type")}</div>

        <ha-formfield label=${this.lcn.localize("module")}>
          <ha-radio
            name="is_group"
            value="module"
            .checked=${!1===this._isGroup}
            @change=${this._isGroupChanged}
          ></ha-radio>
        </ha-formfield>

        <ha-formfield label=${this.lcn.localize("group")}>
          <ha-radio
            name="is_group"
            value="group"
            .checked=${!0===this._isGroup}
            @change=${this._isGroupChanged}
          ></ha-radio>
        </ha-formfield>

        <ha-textfield
          .label=${this.lcn.localize("segment-id")}
          type="number"
          .value=${this._segmentId.toString()}
          min="0"
          required
          autoValidate
          @input=${this._segmentIdChanged}
          .validityTransform=${this._validityTransformSegmentId}
          .validationMessage=${this.lcn.localize("dashboard-devices-dialog-error-segment")}
        ></ha-textfield>

        <ha-textfield
          .label=${this.lcn.localize("id")}
          type="number"
          .value=${this._addressId.toString()}
          min="0"
          required
          autoValidate
          @input=${this._addressIdChanged}
          .validityTransform=${this._validityTransformAddressId}
          .validationMessage=${this._isGroup?this.lcn.localize("dashboard-devices-dialog-error-group"):this.lcn.localize("dashboard-devices-dialog-error-module")}
        ></ha-textfield>

        <div class="buttons">
          <ha-button slot="secondaryAction" @click=${this._closeDialog}>
            ${this.lcn.localize("dismiss")}
          </ha-button>
          <ha-button slot="primaryAction" @click=${this._create} .disabled=${this._invalid}>
            ${this.lcn.localize("create")}
          </ha-button>
        </div>
      </ha-dialog>
    `:r.s6}_isGroupChanged(e){this._isGroup="group"===e.target.value}_segmentIdChanged(e){const t=e.target;this._segmentId=+t.value}_addressIdChanged(e){const t=e.target;this._addressId=+t.value}_validateSegmentId(e){return 0===e||e>=5&&e<=128}_validateAddressId(e,t){return e>=5&&e<=254}get _validityTransformSegmentId(){return e=>({valid:this._validateSegmentId(+e)})}get _validityTransformAddressId(){return e=>({valid:this._validateAddressId(+e,this._isGroup)})}async _create(){const e={name:"",address:[this._segmentId,this._addressId,this._isGroup]};await this._params.createDevice(e),this._closeDialog()}_closeDialog(){this._params=void 0,(0,o.r)(this,"dialog-closed",{dialog:this.localName})}static get styles(){return[c.nA,r.AH`
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
      `]}constructor(...e){super(...e),this._isGroup=!1,this._segmentId=0,this._addressId=5,this._invalid=!1}}(0,s.__decorate)([(0,l.MZ)({attribute:!1})],p.prototype,"hass",void 0),(0,s.__decorate)([(0,l.MZ)({attribute:!1})],p.prototype,"lcn",void 0),(0,s.__decorate)([(0,l.wk)()],p.prototype,"_params",void 0),(0,s.__decorate)([(0,l.wk)()],p.prototype,"_isGroup",void 0),(0,s.__decorate)([(0,l.wk)()],p.prototype,"_segmentId",void 0),(0,s.__decorate)([(0,l.wk)()],p.prototype,"_addressId",void 0),(0,s.__decorate)([(0,l.wk)()],p.prototype,"_invalid",void 0),p=(0,s.__decorate)([(0,l.EM)("lcn-create-device-dialog")],p),a()}catch(p){a(p)}}))}};
//# sourceMappingURL=lcn-create-device-dialog.e1a7246ba9bd2d1a.js.map