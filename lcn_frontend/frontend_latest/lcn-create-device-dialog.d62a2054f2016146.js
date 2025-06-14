export const __webpack_ids__=["626"];export const __webpack_modules__={1308:function(e,t,i){var a=i(3742),s=i(4626),d=i(9994),o=i(9048),r=i(7616);class l extends s.J{}l.styles=[d.W,o.iv`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `],l=(0,a.__decorate)([(0,r.Mo)("ha-radio")],l)},8731:function(e,t,i){i.r(t),i.d(t,{CreateDeviceDialog:()=>c});var a=i(3742),s=(i(8645),i(1308),i(4207),i(8573),i(9740)),d=i(9048),o=i(7616),r=i(9298),l=i(7204),n=i(7525);class c extends d.oi{async showDialog(e){this._params=e,this.lcn=e.lcn,await this.updateComplete}firstUpdated(e){super.firstUpdated(e),(0,n.z)()}willUpdate(e){e.has("_invalid")&&(this._invalid=!this._validateSegmentId(this._segmentId)||!this._validateAddressId(this._addressId,this._isGroup))}render(){return this._params?d.dy`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${(0,r.i)(this.hass,this.lcn.localize("dashboard-devices-dialog-create-title"))}
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
          <mwc-button
            slot="secondaryAction"
            @click=${this._closeDialog}
            .label=${this.lcn.localize("dismiss")}
          ></mwc-button>

          <mwc-button
            slot="primaryAction"
            @click=${this._create}
            .disabled=${this._invalid}
            .label=${this.lcn.localize("create")}
          ></mwc-button>
        </div>
      </ha-dialog>
    `:d.Ld}_isGroupChanged(e){this._isGroup="group"===e.target.value}_segmentIdChanged(e){const t=e.target;this._segmentId=+t.value}_addressIdChanged(e){const t=e.target;this._addressId=+t.value}_validateSegmentId(e){return 0===e||e>=5&&e<=128}_validateAddressId(e,t){return e>=5&&e<=254}get _validityTransformSegmentId(){return e=>({valid:this._validateSegmentId(+e)})}get _validityTransformAddressId(){return e=>({valid:this._validateAddressId(+e,this._isGroup)})}async _create(){const e={name:"",address:[this._segmentId,this._addressId,this._isGroup]};await this._params.createDevice(e),this._closeDialog()}_closeDialog(){this._params=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}static get styles(){return[l.yu,d.iv`
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
      `]}constructor(...e){super(...e),this._isGroup=!1,this._segmentId=0,this._addressId=5,this._invalid=!1}}(0,a.__decorate)([(0,o.Cb)({attribute:!1})],c.prototype,"hass",void 0),(0,a.__decorate)([(0,o.Cb)({attribute:!1})],c.prototype,"lcn",void 0),(0,a.__decorate)([(0,o.SB)()],c.prototype,"_params",void 0),(0,a.__decorate)([(0,o.SB)()],c.prototype,"_isGroup",void 0),(0,a.__decorate)([(0,o.SB)()],c.prototype,"_segmentId",void 0),(0,a.__decorate)([(0,o.SB)()],c.prototype,"_addressId",void 0),(0,a.__decorate)([(0,o.SB)()],c.prototype,"_invalid",void 0),c=(0,a.__decorate)([(0,o.Mo)("lcn-create-device-dialog")],c)}};
//# sourceMappingURL=lcn-create-device-dialog.d62a2054f2016146.js.map