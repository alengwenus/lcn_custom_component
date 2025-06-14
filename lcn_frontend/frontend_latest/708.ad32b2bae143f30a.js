export const __webpack_ids__=["708"];export const __webpack_modules__={4207:function(e,t,a){var i=a(3742),s=a(3416),l=a(4196),o=a(9048),n=a(7616),r=a(1733),c=a(9740);class d extends s.a{render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return o.dy` <div class="mdc-form-field ${(0,r.$)(e)}">
      <slot></slot>
      <label class="mdc-label" @click=${this._labelClick}>
        <slot name="label">${this.label}</slot>
      </label>
    </div>`}_labelClick(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,c.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,c.B)(e,"change");break;default:e.click()}}constructor(...e){super(...e),this.disabled=!1}}d.styles=[l.W,o.iv`
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
    `],(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),d=(0,i.__decorate)([(0,n.Mo)("ha-formfield")],d)},1308:function(e,t,a){var i=a(3742),s=a(4626),l=a(9994),o=a(9048),n=a(7616);class r extends s.J{}r.styles=[l.W,o.iv`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `],r=(0,i.__decorate)([(0,n.Mo)("ha-radio")],r)},1665:function(e,t,a){a.d(t,{Ys:()=>o,g7:()=>n});var i=a(9740);const s=()=>Promise.all([a.e("55"),a.e("214")]).then(a.bind(a,460)),l=(e,t,a)=>new Promise((l=>{const o=t.cancel,n=t.confirm;(0,i.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:s,dialogParams:{...t,...a,cancel:()=>{l(!!a?.prompt&&null),o&&o()},confirm:e=>{l(!a?.prompt||e),n&&n(e)}}})})),o=(e,t)=>l(e,t),n=(e,t)=>l(e,t,{confirmation:!0})},2996:function(e,t,a){a.r(t),a.d(t,{CreateEntityDialog:()=>O});var i=a(3742),s=a(2644),l=a(3670),o=(a(8645),a(5240)),n=a(2510),r=a(9297),c=a(9048),d=a(7616);class u extends o.v{}u.styles=[n.W,r.W,c.iv`
      :host {
        --ha-icon-display: block;
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-secondary: var(--secondary-text-color);
        --md-sys-color-surface: var(--card-background-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);

        --md-sys-color-surface-container-highest: var(--input-fill-color);
        --md-sys-color-on-surface: var(--input-ink-color);

        --md-sys-color-surface-container: var(--input-fill-color);
        --md-sys-color-on-secondary-container: var(--primary-text-color);
        --md-sys-color-secondary-container: var(--input-fill-color);
        --md-menu-container-color: var(--card-background-color);
      }
    `],u=(0,i.__decorate)([(0,d.Mo)("ha-md-select")],u);var h=a(6281),m=a(5215);class v extends h.Q{}v.styles=[m.W,c.iv`
      :host {
        --ha-icon-display: block;
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-secondary: var(--secondary-text-color);
        --md-sys-color-surface: var(--card-background-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);
      }
    `],v=(0,i.__decorate)([(0,d.Mo)("ha-md-select-option")],v);var p=a(9740),_=a(9298);const g=e=>e.stopPropagation();var y=a(7204),b=a(89);class T extends c.oi{get _binsensorPorts(){const e=this.lcn.localize("binary-sensor");return[{name:e+" 1",value:"BINSENSOR1"},{name:e+" 2",value:"BINSENSOR2"},{name:e+" 4",value:"BINSENSOR4"},{name:e+" 3",value:"BINSENSOR3"},{name:e+" 5",value:"BINSENSOR5"},{name:e+" 6",value:"BINSENSOR6"},{name:e+" 7",value:"BINSENSOR7"},{name:e+" 8",value:"BINSENSOR8"}]}get _regulators(){const e=this.lcn.localize("regulator");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _sourceTypes(){return[{name:this.lcn.localize("binsensors"),value:this._binsensorPorts,id:"binsensors"},{name:this.lcn.localize("regulator-locks"),value:this._regulators,id:"regulator-locks"},{name:this.lcn.localize("key-locks"),value:this._keys,id:"key-locks"}]}connectedCallback(){super.connectedCallback(),this._sourceType=this._sourceTypes[0],this._source=this._sourceType.value[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._sourceType||this._source?c.dy`
      <div class="sources">
        <ha-md-select
          id="source-type-select"
          .label=${this.lcn.localize("source-type")}
          .value=${this._sourceType.id}
          @change=${this._sourceTypeChanged}
          @closed=${g}
        >
          ${this._sourceTypes.map((e=>c.dy`
              <ha-md-select-option .value=${e.id}>
                ${e.name}
              </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="source-select"
          .label=${this.lcn.localize("source")}
          .value=${this._source.value}
          @change=${this._sourceChanged}
          @closed=${g}
        >
          ${this._sourceType.value.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>
    `:c.Ld}_sourceTypeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._sourceType=this._sourceTypes.find((e=>e.id===t.value)),this._source=this._sourceType.value[0])}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sourceType.value.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}static get styles(){return[y.yu,c.iv`
        .sources {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.domainData={source:"BINSENSOR1"},this._keys=[{name:"A1",value:"A1"},{name:"A2",value:"A2"},{name:"A3",value:"A3"},{name:"A4",value:"A4"},{name:"A5",value:"A5"},{name:"A6",value:"A6"},{name:"A7",value:"A7"},{name:"A8",value:"A8"},{name:"B1",value:"B1"},{name:"B2",value:"B2"},{name:"B3",value:"B3"},{name:"B4",value:"B4"},{name:"B5",value:"B5"},{name:"B6",value:"B6"},{name:"B7",value:"B7"},{name:"B8",value:"B8"},{name:"C1",value:"C1"},{name:"C2",value:"C2"},{name:"C3",value:"C3"},{name:"C4",value:"C4"},{name:"C5",value:"C5"},{name:"C6",value:"C6"},{name:"C7",value:"C7"},{name:"C8",value:"C8"},{name:"D1",value:"D1"},{name:"D2",value:"D2"},{name:"D3",value:"D3"},{name:"D4",value:"D4"},{name:"D5",value:"D5"},{name:"D6",value:"D6"},{name:"D7",value:"D7"},{name:"D8",value:"D8"}]}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],T.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],T.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],T.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],T.prototype,"_sourceType",void 0),(0,i.__decorate)([(0,d.SB)()],T.prototype,"_source",void 0),(0,i.__decorate)([(0,d.IO)("#source-select")],T.prototype,"_sourceSelect",void 0),T=(0,i.__decorate)([(0,d.Mo)("lcn-config-binary-sensor-element")],T);a(8573);var $=a(1516),f=a(2028);class C extends $.H{firstUpdated(){super.firstUpdated(),this.addEventListener("change",(()=>{var e;this.haptic&&(e="light",(0,p.B)(window,"haptic",e))}))}constructor(...e){super(...e),this.haptic=!1}}C.styles=[f.W,c.iv`
      :host {
        --mdc-theme-secondary: var(--switch-checked-color);
      }
      .mdc-switch.mdc-switch--checked .mdc-switch__thumb {
        background-color: var(--switch-checked-button-color);
        border-color: var(--switch-checked-button-color);
      }
      .mdc-switch.mdc-switch--checked .mdc-switch__track {
        background-color: var(--switch-checked-track-color);
        border-color: var(--switch-checked-track-color);
      }
      .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
        background-color: var(--switch-unchecked-button-color);
        border-color: var(--switch-unchecked-button-color);
      }
      .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
        background-color: var(--switch-unchecked-track-color);
        border-color: var(--switch-unchecked-track-color);
      }
    `],(0,i.__decorate)([(0,d.Cb)({type:Boolean})],C.prototype,"haptic",void 0),C=(0,i.__decorate)([(0,d.Mo)("ha-switch")],C);class k extends c.oi{get _is2012(){return this.softwareSerial>=1441792}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _varSetpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _regulatorLockOptions(){const e=[{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-not-lockable"),value:"NOT_LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable"),value:"LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable-with-target-value"),value:"LOCKABLE_WITH_TARGET_VALUE"}];return this.softwareSerial<1180417?e.slice(0,2):e}get _sources(){return this._is2012?this._variablesNew:this._variablesOld}get _setpoints(){return this._is2012?this._varSetpoints.concat(this._variablesNew):this._varSetpoints}connectedCallback(){super.connectedCallback(),this._source=this._sources[0],this._setpoint=this._setpoints[0],this._unit=this._varUnits[0],this._lockOption=this._regulatorLockOptions[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateMinTemp(this.domainData.min_temp)||!this._validateMaxTemp(this.domainData.max_temp)||!this._validateTargetValueLocked(this._targetValueLocked)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._source&&this._setpoint&&this._unit&&this._lockOption?c.dy`
      <div class="sources">
        <ha-md-select
          id="source-select"
          .label=${this.lcn.localize("source")}
          .value=${this._source.value}
          @change=${this._sourceChanged}
          @closed=${g}
        >
          ${this._sources.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="setpoint-select"
          .label=${this.lcn.localize("setpoint")}
          .value=${this._setpoint.value}
          fixedMenuPosition
          @change=${this._setpointChanged}
          @closed=${g}
        >
          ${this._setpoints.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>

      <ha-md-select
        id="unit-select"
        .label=${this.lcn.localize("dashboard-entities-dialog-unit-of-measurement")}
        .value=${this._unit.value}
        fixedMenuPosition
        @change=${this._unitChanged}
        @closed=${g}
      >
        ${this._varUnits.map((e=>c.dy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>

      <div class="temperatures">
        <ha-textfield
          id="min-temperature"
          .label=${this.lcn.localize("dashboard-entities-dialog-climate-min-temperature")}
          type="number"
          .suffix=${this._unit.value}
          .value=${this.domainData.min_temp.toString()}
          required
          autoValidate
          @input=${this._minTempChanged}
          .validityTransform=${this._validityTransformMinTemp}
          .validationMessage=${this.lcn.localize("dashboard-entities-dialog-climate-min-temperature-error")}
        ></ha-textfield>

        <ha-textfield
          id="max-temperature"
          .label=${this.lcn.localize("dashboard-entities-dialog-climate-max-temperature")}
          type="number"
          .suffix=${this._unit.value}
          .value=${this.domainData.max_temp.toString()}
          required
          autoValidate
          @input=${this._maxTempChanged}
          .validityTransform=${this._validityTransformMaxTemp}
          .validationMessage=${this.lcn.localize("dashboard-entities-dialog-climate-max-temperature-error")}
        ></ha-textfield>
      </div>

      <div class="lock-options">
        <ha-md-select
          id="lock-options-select"
          .label=${this.lcn.localize("dashboard-entities-dialog-climate-regulator-lock")}
          .value=${this._lockOption.value}
          @change=${this._lockOptionChanged}
          @closed=${g}
        >
          ${this._regulatorLockOptions.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}>
                ${e.name}
              </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-textfield
          id="target-value"
          .label=${this.lcn.localize("dashboard-entities-dialog-climate-target-value")}
          type="number"
          suffix="%"
          .value=${this._targetValueLocked.toString()}
          .disabled=${"LOCKABLE_WITH_TARGET_VALUE"!==this._lockOption.value}
          .helper=${this.lcn.localize("dashboard-entities-dialog-climate-target-value-helper")}
          .helperPersistent=${"LOCKABLE_WITH_TARGET_VALUE"===this._lockOption.value}
          required
          autoValidate
          @input=${this._targetValueLockedChanged}
          .validityTransform=${this._validityTransformTargetValueLocked}
          .validationMessage=${this.lcn.localize("dashboard-entities-dialog-climate-target-value-error")}
        >
        </ha-textfield>
      </div>
    `:c.Ld}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sources.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_setpointChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._setpoint=this._setpoints.find((e=>e.value===t.value)),this.domainData.setpoint=this._setpoint.value)}_minTempChanged(e){const t=e.target;this.domainData.min_temp=+t.value;this.shadowRoot.querySelector("#max-temperature").reportValidity(),this.requestUpdate()}_maxTempChanged(e){const t=e.target;this.domainData.max_temp=+t.value;this.shadowRoot.querySelector("#min-temperature").reportValidity(),this.requestUpdate()}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}_lockOptionChanged(e){const t=e.target;switch(-1===t.selectedIndex?this._lockOption=this._regulatorLockOptions[0]:this._lockOption=this._regulatorLockOptions.find((e=>e.value===t.value)),this._lockOption.value){case"LOCKABLE":this.domainData.lockable=!0,this.domainData.target_value_locked=-1;break;case"LOCKABLE_WITH_TARGET_VALUE":this.domainData.lockable=!0,this.domainData.target_value_locked=this._targetValueLocked;break;default:this.domainData.lockable=!1,this.domainData.target_value_locked=-1}}_targetValueLockedChanged(e){const t=e.target;this._targetValueLocked=+t.value,this.domainData.target_value_locked=+t.value}_validateMaxTemp(e){return e>this.domainData.min_temp}_validateMinTemp(e){return e<this.domainData.max_temp}_validateTargetValueLocked(e){return e>=0&&e<=100}get _validityTransformMaxTemp(){return e=>({valid:this._validateMaxTemp(+e)})}get _validityTransformMinTemp(){return e=>({valid:this._validateMinTemp(+e)})}get _validityTransformTargetValueLocked(){return e=>({valid:this._validateTargetValueLocked(+e)})}static get styles(){return[y.yu,c.iv`
        .sources,
        .temperatures,
        .lock-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select,
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",setpoint:"R1VARSETPOINT",max_temp:35,min_temp:7,lockable:!1,target_value_locked:-1,unit_of_measurement:"°C"},this._targetValueLocked=0,this._invalid=!1,this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}],this._varUnits=[{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"}]}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],k.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],k.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1,type:Number})],k.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],k.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],k.prototype,"_source",void 0),(0,i.__decorate)([(0,d.SB)()],k.prototype,"_setpoint",void 0),(0,i.__decorate)([(0,d.SB)()],k.prototype,"_unit",void 0),(0,i.__decorate)([(0,d.SB)()],k.prototype,"_lockOption",void 0),(0,i.__decorate)([(0,d.SB)()],k.prototype,"_targetValueLocked",void 0),k=(0,i.__decorate)([(0,d.Mo)("lcn-config-climate-element")],k);class R extends c.oi{get _motors(){return[{name:this.lcn.localize("motor-port",{port:1}),value:"MOTOR1"},{name:this.lcn.localize("motor-port",{port:2}),value:"MOTOR2"},{name:this.lcn.localize("motor-port",{port:3}),value:"MOTOR3"},{name:this.lcn.localize("motor-port",{port:4}),value:"MOTOR4"},{name:this.lcn.localize("outputs"),value:"OUTPUTS"}]}get _positioningModes(){return[{name:this.lcn.localize("motor-positioning-none"),value:"NONE"},{name:this.lcn.localize("motor-positioning-bs4"),value:"BS4"},{name:this.lcn.localize("motor-positioning-module"),value:"MODULE"}]}connectedCallback(){super.connectedCallback(),this._motor=this._motors[0],this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0]}render(){return this._motor||this._positioningMode||this._reverseDelay?c.dy`
      <ha-md-select
        id="motor-select"
        .label=${this.lcn.localize("motor")}
        .value=${this._motor.value}
        @change=${this._motorChanged}
        @closed=${g}
      >
        ${this._motors.map((e=>c.dy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>

      ${"OUTPUTS"===this._motor.value?c.dy`
            <ha-md-select
              id="reverse-delay-select"
              .label=${this.lcn.localize("reverse-delay")}
              .value=${this._reverseDelay.value}
              @change=${this._reverseDelayChanged}
              @closed=${g}
            >
              ${this._reverseDelays.map((e=>c.dy`
                  <ha-md-select-option .value=${e.value}>
                    ${e.name}
                  </ha-md-select-option>
                `))}
            </ha-md-select>
          `:c.dy`
            <ha-md-select
              id="positioning-mode-select"
              .label=${this.lcn.localize("motor-positioning-mode")}
              .value=${this._positioningMode.value}
              @change=${this._positioningModeChanged}
              @closed=${g}
            >
              ${this._positioningModes.map((e=>c.dy`
                  <ha-md-select-option .value=${e.value}>
                    ${e.name}
                  </ha-md-select-option>
                `))}
            </ha-md-select>
          `}
    `:c.Ld}_motorChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._motor=this._motors.find((e=>e.value===t.value)),this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0],this.domainData.motor=this._motor.value,"OUTPUTS"===this._motor.value?this.domainData.positioning_mode="NONE":this.domainData.reverse_time="RT1200")}_positioningModeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._positioningMode=this._positioningModes.find((e=>e.value===t.value)),this.domainData.positioning_mode=this._positioningMode.value)}_reverseDelayChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._reverseDelay=this._reverseDelays.find((e=>e.value===t.value)),this.domainData.reverse_time=this._reverseDelay.value)}static get styles(){return[y.yu,c.iv`
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.domainData={motor:"MOTOR1",positioning_mode:"NONE",reverse_time:"RT1200"},this._reverseDelays=[{name:"70ms",value:"RT70"},{name:"600ms",value:"RT600"},{name:"1200ms",value:"RT1200"}]}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],R.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],R.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],R.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],R.prototype,"_motor",void 0),(0,i.__decorate)([(0,d.SB)()],R.prototype,"_positioningMode",void 0),(0,i.__decorate)([(0,d.SB)()],R.prototype,"_reverseDelay",void 0),R=(0,i.__decorate)([(0,d.Mo)("lcn-config-cover-element")],R);a(1308),a(4207);class D extends c.oi{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?c.dy`
      <div id="port-type">${this.lcn.localize("port-type")}</div>

      <ha-formfield label=${this.lcn.localize("output")}>
        <ha-radio
          name="port"
          value="output"
          .checked=${"output"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${this.lcn.localize("relay")}>
        <ha-radio
          name="port"
          value="relay"
          .checked=${"relay"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-md-select
        id="port-select"
        .label=${this.lcn.localize("port")}
        .value=${this._port.value}
        fixedMenuPosition
        @selected=${this._portChanged}
        @closed=${g}
      >
        ${this._portType.value.map((e=>c.dy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>

      ${this._renderOutputFeatures()}
    `:c.Ld}_renderOutputFeatures(){return"output"===this._portType.id?c.dy`
          <div id="dimmable">
            <label>${this.lcn.localize("dashboard-entities-dialog-light-dimmable")}:</label>

            <ha-switch
              .checked=${this.domainData.dimmable}
              @change=${this._dimmableChanged}
            ></ha-switch>
          </div>

          <ha-textfield
            id="transition"
            .label=${this.lcn.localize("dashboard-entities-dialog-light-transition")}
            type="number"
            suffix="s"
            .value=${this.domainData.transition.toString()}
            min="0"
            max="486"
            required
            autoValidate
            @input=${this._transitionChanged}
            .validityTransform=${this._validityTransformTransition}
            .validationMessage=${this.lcn.localize("dashboard-entities-dialog-light-transition-error")}
          ></ha-textfield>
        `:c.Ld}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0]}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}_dimmableChanged(e){this.domainData.dimmable=e.target.checked}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}static get styles(){return[y.yu,c.iv`
        #port-type {
          margin-top: 16px;
        }
        ha-md-select,
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
        #dimmable {
          margin-top: 16px;
        }
        #transition {
          margin-top: 16px;
        }
      `]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1",dimmable:!1,transition:0},this._invalid=!1}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],D.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],D.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],D.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],D.prototype,"_portType",void 0),(0,i.__decorate)([(0,d.SB)()],D.prototype,"_port",void 0),(0,i.__decorate)([(0,d.IO)("#port-select")],D.prototype,"_portSelect",void 0),D=(0,i.__decorate)([(0,d.Mo)("lcn-config-light-element")],D);a(6776);class x extends c.oi{get _registers(){const e=this.lcn.localize("register");return[{name:e+" 0",value:"0"},{name:e+" 1",value:"1"},{name:e+" 2",value:"2"},{name:e+" 3",value:"3"},{name:e+" 4",value:"4"},{name:e+" 5",value:"5"},{name:e+" 6",value:"6"},{name:e+" 7",value:"7"},{name:e+" 8",value:"8"},{name:e+" 9",value:"9"}]}get _scenes(){const e=this.lcn.localize("scene");return[{name:e+" 1",value:"0"},{name:e+" 2",value:"1"},{name:e+" 3",value:"2"},{name:e+" 4",value:"3"},{name:e+" 5",value:"4"},{name:e+" 6",value:"5"},{name:e+" 7",value:"6"},{name:e+" 8",value:"7"},{name:e+" 9",value:"8"},{name:e+" 10",value:"9"}]}get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}connectedCallback(){super.connectedCallback(),this._register=this._registers[0],this._scene=this._scenes[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._register||this._scene?c.dy`
      <div class="registers">
        <ha-md-select
          id="register-select"
          .label=${this.lcn.localize("register")}
          .value=${this._register.value}
          @change=${this._registerChanged}
          @closed=${g}
        >
          ${this._registers.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="scene-select"
          .label=${this.lcn.localize("scene")}
          .value=${this._scene.value}
          @change=${this._sceneChanged}
          @closed=${g}
        >
          ${this._scenes.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>

      <div class="ports">
        <label>${this.lcn.localize("outputs")}:</label><br />
        ${this._outputPorts.map((e=>c.dy`
            <ha-formfield label=${e.name}>
              <ha-checkbox .value=${e.value} @change=${this._portCheckedChanged}></ha-checkbox>
            </ha-formfield>
          `))}
      </div>

      <div class="ports">
        <label>${this.lcn.localize("relays")}:</label><br />
        ${this._relayPorts.map((e=>c.dy`
            <ha-formfield label=${e.name}>
              <ha-checkbox .value=${e.value} @change=${this._portCheckedChanged}></ha-checkbox>
            </ha-formfield>
          `))}
      </div>

      <ha-textfield
        .label=${this.lcn.localize("dashboard-entities-dialog-scene-transition")}
        type="number"
        suffix="s"
        .value=${this.domainData.transition.toString()}
        min="0"
        max="486"
        required
        autoValidate
        @input=${this._transitionChanged}
        .validityTransform=${this._validityTransformTransition}
        .disabled=${this._transitionDisabled}
        .validationMessage=${this.lcn.localize("dashboard-entities-dialog-scene-transition-error")}
      ></ha-textfield>
    `:c.Ld}_registerChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._register=this._registers.find((e=>e.value===t.value)),this.domainData.register=+this._register.value)}_sceneChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._scene=this._scenes.find((e=>e.value===t.value)),this.domainData.scene=+this._scene.value)}_portCheckedChanged(e){e.target.checked?this.domainData.outputs.push(e.target.value):this.domainData.outputs=this.domainData.outputs.filter((t=>e.target.value!==t)),this.requestUpdate()}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}get _transitionDisabled(){const e=this._outputPorts.map((e=>e.value));return 0===this.domainData.outputs.filter((t=>e.includes(t))).length}static get styles(){return[y.yu,c.iv`
        .registers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select,
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
        .ports {
          margin-top: 10px;
        }
      `]}constructor(...e){super(...e),this.domainData={register:0,scene:0,outputs:[],transition:0},this._invalid=!1}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],x.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],x.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],x.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],x.prototype,"_register",void 0),(0,i.__decorate)([(0,d.SB)()],x.prototype,"_scene",void 0),x=(0,i.__decorate)([(0,d.Mo)("lcn-config-scene-element")],x);class A extends c.oi{get _is2013(){return this.softwareSerial>=1507846}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _setpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _thresholdsOld(){const e=this.lcn.localize("threshold");return[{name:e+" 1",value:"THRS1"},{name:e+" 2",value:"THRS2"},{name:e+" 3",value:"THRS3"},{name:e+" 4",value:"THRS4"},{name:e+" 5",value:"THRS5"}]}get _thresholdsNew(){const e=this.lcn.localize("threshold");return[{name:e+" 1-1",value:"THRS1"},{name:e+" 1-2",value:"THRS2"},{name:e+" 1-3",value:"THRS3"},{name:e+" 1-4",value:"THRS4"},{name:e+" 2-1",value:"THRS2_1"},{name:e+" 2-2",value:"THRS2_2"},{name:e+" 2-3",value:"THRS2_3"},{name:e+" 2-4",value:"THRS2_4"},{name:e+" 3-1",value:"THRS3_1"},{name:e+" 3-2",value:"THRS3_2"},{name:e+" 3-3",value:"THRS3_3"},{name:e+" 3-4",value:"THRS3_4"},{name:e+" 4-1",value:"THRS4_1"},{name:e+" 4-2",value:"THRS4_2"},{name:e+" 4-3",value:"THRS4_3"},{name:e+" 4-4",value:"THRS4_4"}]}get _s0Inputs(){const e=this.lcn.localize("s0input");return[{name:e+" 1",value:"S0INPUT1"},{name:e+" 2",value:"S0INPUT2"},{name:e+" 3",value:"S0INPUT3"},{name:e+" 4",value:"S0INPUT4"}]}get _ledPorts(){const e=this.lcn.localize("led");return[{name:e+" 1",value:"LED1"},{name:e+" 2",value:"LED2"},{name:e+" 3",value:"LED3"},{name:e+" 4",value:"LED4"},{name:e+" 5",value:"LED5"},{name:e+" 6",value:"LED6"},{name:e+" 7",value:"LED7"},{name:e+" 8",value:"LED8"},{name:e+" 9",value:"LED9"},{name:e+" 10",value:"LED10"},{name:e+" 11",value:"LED11"},{name:e+" 12",value:"LED12"}]}get _logicOpPorts(){const e=this.lcn.localize("logic");return[{name:e+" 1",value:"LOGICOP1"},{name:e+" 2",value:"LOGICOP2"},{name:e+" 3",value:"LOGICOP3"},{name:e+" 4",value:"LOGICOP4"}]}get _sourceTypes(){return[{name:this.lcn.localize("variables"),value:this._is2013?this._variablesNew:this._variablesOld,id:"variables"},{name:this.lcn.localize("setpoints"),value:this._setpoints,id:"setpoints"},{name:this.lcn.localize("thresholds"),value:this._is2013?this._thresholdsNew:this._thresholdsOld,id:"thresholds"},{name:this.lcn.localize("s0inputs"),value:this._s0Inputs,id:"s0inputs"},{name:this.lcn.localize("leds"),value:this._ledPorts,id:"ledports"},{name:this.lcn.localize("logics"),value:this._logicOpPorts,id:"logicopports"}]}get _varUnits(){return[{name:this.lcn.localize("unit-lcn-native"),value:"NATIVE"},{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"},{name:"Kelvin",value:"K"},{name:"Lux (T-Port)",value:"LUX_T"},{name:"Lux (I-Port)",value:"LUX_I"},{name:this.lcn.localize("unit-humidity")+" (%)",value:"PERCENT"},{name:"CO2 (‰)",value:"PPM"},{name:this.lcn.localize("unit-wind")+" (m/s)",value:"METERPERSECOND"},{name:this.lcn.localize("unit-volts"),value:"VOLT"},{name:this.lcn.localize("unit-milliamperes"),value:"AMPERE"},{name:this.lcn.localize("unit-angle")+" (°)",value:"DEGREE"}]}connectedCallback(){super.connectedCallback(),this._sourceType=this._sourceTypes[0],this._source=this._sourceType.value[0],this._unit=this._varUnits[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._sourceType||this._source?c.dy`
      <div class="sources">
        <ha-md-select
          id="source-type-select"
          .label=${this.lcn.localize("source-type")}
          .value=${this._sourceType.id}
          @change=${this._sourceTypeChanged}
          @closed=${g}
        >
          ${this._sourceTypes.map((e=>c.dy`
              <ha-md-select-option .value=${e.id}>
                ${e.name}
              </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="source-select"
          .label=${this.lcn.localize("source")}
          .value=${this._source.value}
          @change=${this._sourceChanged}
          @closed=${g}
        >
          ${this._sourceType.value.map((e=>c.dy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>

      <ha-md-select
        id="unit-select"
        .label=${this.lcn.localize("dashboard-entities-dialog-unit-of-measurement")}
        .value=${this._unit.value}
        @change=${this._unitChanged}
        @closed=${g}
      >
        ${this._varUnits.map((e=>c.dy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>
    `:c.Ld}_sourceTypeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._sourceType=this._sourceTypes.find((e=>e.id===t.value)),this._source=this._sourceType.value[0])}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sourceType.value.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}static get styles(){return[y.yu,c.iv`
        .sources {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",unit_of_measurement:"NATIVE"},this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}]}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],A.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],A.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1,type:Number})],A.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],A.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],A.prototype,"_sourceType",void 0),(0,i.__decorate)([(0,d.SB)()],A.prototype,"_source",void 0),(0,i.__decorate)([(0,d.SB)()],A.prototype,"_unit",void 0),(0,i.__decorate)([(0,d.IO)("#source-select")],A.prototype,"_sourceSelect",void 0),A=(0,i.__decorate)([(0,d.Mo)("lcn-config-sensor-element")],A);class S extends c.oi{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _regulators(){const e=this.lcn.localize("regulator");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"},{name:this.lcn.localize("regulator"),value:this._regulators,id:"regulator-locks"},{name:this.lcn.localize("key"),value:this._keys,id:"key-locks"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?c.dy`
      <div id="port-type">${this.lcn.localize("port-type")}</div>

      <ha-formfield label=${this.lcn.localize("output")}>
        <ha-radio
          name="port"
          value="output"
          .checked=${"output"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${this.lcn.localize("relay")}>
        <ha-radio
          name="port"
          value="relay"
          .checked=${"relay"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${this.lcn.localize("regulator-lock")}>
        <ha-radio
          name="port"
          value="regulator-locks"
          .checked=${"regulator-locks"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${this.lcn.localize("key-lock")}>
        <ha-radio
          name="port"
          value="key-locks"
          .checked=${"key-locks"===this._portType.id}
          @change=${this._portTypeChanged}
        ></ha-radio>
      </ha-formfield>

      <ha-md-select
        id="port-select"
        .label=${this._portType.name}
        .value=${this._port.value}
        @change=${this._portChanged}
        @closed=${g}
      >
        ${this._portType.value.map((e=>c.dy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>
    `:c.Ld}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0]}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}static get styles(){return[y.yu,c.iv`
        #port-type {
          margin-top: 16px;
        }
        .lock-time {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1"},this._keys=[{name:"A1",value:"A1"},{name:"A2",value:"A2"},{name:"A3",value:"A3"},{name:"A4",value:"A4"},{name:"A5",value:"A5"},{name:"A6",value:"A6"},{name:"A7",value:"A7"},{name:"A8",value:"A8"},{name:"B1",value:"B1"},{name:"B2",value:"B2"},{name:"B3",value:"B3"},{name:"B4",value:"B4"},{name:"B5",value:"B5"},{name:"B6",value:"B6"},{name:"B7",value:"B7"},{name:"B8",value:"B8"},{name:"C1",value:"C1"},{name:"C2",value:"C2"},{name:"C3",value:"C3"},{name:"C4",value:"C4"},{name:"C5",value:"C5"},{name:"C6",value:"C6"},{name:"C7",value:"C7"},{name:"C8",value:"C8"},{name:"D1",value:"D1"},{name:"D2",value:"D2"},{name:"D3",value:"D3"},{name:"D4",value:"D4"},{name:"D5",value:"D5"},{name:"D6",value:"D6"},{name:"D7",value:"D7"},{name:"D8",value:"D8"}]}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],S.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],S.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],S.prototype,"domainData",void 0),(0,i.__decorate)([(0,d.SB)()],S.prototype,"_portType",void 0),(0,i.__decorate)([(0,d.SB)()],S.prototype,"_port",void 0),(0,i.__decorate)([(0,d.IO)("#port-select")],S.prototype,"_portSelect",void 0),S=(0,i.__decorate)([(0,d.Mo)("lcn-config-switch-element")],S);var z=a(1665);class O extends c.oi{get _domains(){return[{name:this.lcn.localize("binary-sensor"),domain:"binary_sensor"},{name:this.lcn.localize("climate"),domain:"climate"},{name:this.lcn.localize("cover"),domain:"cover"},{name:this.lcn.localize("light"),domain:"light"},{name:this.lcn.localize("scene"),domain:"scene"},{name:this.lcn.localize("sensor"),domain:"sensor"},{name:this.lcn.localize("switch"),domain:"switch"}]}async showDialog(e){this._params=e,this.lcn=e.lcn,this._name="",this._invalid=!0,this._deviceConfig=e.deviceConfig,this._deviceConfig||(this._deviceConfig=this.deviceConfigs[0]),await this.updateComplete}render(){return this._params&&this.lcn&&this._deviceConfig?c.dy`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${(0,_.i)(this.hass,this.lcn.localize("dashboard-entities-dialog-create-title"))}
        @closed=${this._closeDialog}
      >
        <ha-md-select
          id="device-select"
          .label=${this.lcn.localize("device")}
          .value=${this._deviceConfig?(0,b.VM)(this._deviceConfig.address):void 0}
          @change=${this._deviceChanged}
          @closed=${g}
        >
          ${this.deviceConfigs.map((e=>c.dy`
              <ha-md-select-option .value=${(0,b.VM)(e.address)}>
                <div class="primary">${e.name}</div>
                <div class="secondary">(${(0,b.lW)(e.address)})</div>
              </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="domain-select"
          .label=${this.lcn.localize("domain")}
          .value=${this.domain}
          @change=${this._domainChanged}
          @closed=${g}
        >
          ${this._domains.map((e=>c.dy`
              <ha-md-select-option .value=${e.domain}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
        <ha-textfield
          id="name-input"
          label=${this.lcn.localize("name")}
          type="string"
          @input=${this._nameChanged}
        ></ha-textfield>

        ${this._renderDomain(this.domain)}

        <div class="buttons">
          <mwc-button
            slot="secondaryAction"
            @click=${this._closeDialog}
            .label=${this.lcn.localize("dismiss")}
          ></mwc-button>
          <mwc-button
            slot="primaryAction"
            .disabled=${this._invalid}
            @click=${this._create}
            .label=${this.lcn.localize("create")}
          ></mwc-button>
        </div>
      </ha-dialog>
    `:c.Ld}_renderDomain(e){if(!this._params||!this._deviceConfig)return c.Ld;switch(e){case"binary_sensor":return c.dy`<lcn-config-binary-sensor-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-binary-sensor-element>`;case"climate":return c.dy`<lcn-config-climate-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          .softwareSerial=${this._deviceConfig.software_serial}
          @validity-changed=${this._validityChanged}
        ></lcn-config-climate-element>`;case"cover":return c.dy`<lcn-config-cover-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-cover-element>`;case"light":return c.dy`<lcn-config-light-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          @validity-changed=${this._validityChanged}
        ></lcn-config-light-element>`;case"scene":return c.dy`<lcn-config-scene-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          @validity-changed=${this._validityChanged}
        ></lcn-config-scene-element>`;case"sensor":return c.dy`<lcn-config-sensor-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          .softwareSerial=${this._deviceConfig.software_serial}
        ></lcn-config-sensor-element>`;case"switch":return c.dy`<lcn-config-switch-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-switch-element>`;default:return c.Ld}}_deviceChanged(e){const t=e.target,a=(0,b.zD)(t.value);this._deviceConfig=this.deviceConfigs.find((e=>e.address[0]===a[0]&&e.address[1]===a[1]&&e.address[2]===a[2]))}_nameChanged(e){const t=e.target;this._name=t.value,this._validityChanged(new CustomEvent("validity-changed",{detail:!this._name}))}_validityChanged(e){this._invalid=e.detail}async _create(){const e=this.shadowRoot?.querySelector("#domain"),t={name:this._name?this._name:this.domain,address:this._deviceConfig.address,domain:this.domain,domain_data:e.domainData};await this._params.createEntity(t)?this._closeDialog():await(0,z.Ys)(this,{title:this.lcn.localize("dashboard-entities-dialog-add-alert-title"),text:`${this.lcn.localize("dashboard-entities-dialog-add-alert-text")}\n              ${this.lcn.localize("dashboard-entities-dialog-add-alert-hint")}`})}_closeDialog(){this._params=void 0,(0,p.B)(this,"dialog-closed",{dialog:this.localName})}_domainChanged(e){const t=e.target;this.domain=t.value}static get styles(){return[y.yu,c.iv`
        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-z-index: 10;
        }
        ha-md-select,
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
        #name-input {
          margin-bottom: 25px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          padding: 8px;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
      `]}constructor(...e){super(...e),this._name="",this.domain="binary_sensor",this._invalid=!0}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],O.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)({attribute:!1})],O.prototype,"lcn",void 0),(0,i.__decorate)([(0,d.SB)()],O.prototype,"_params",void 0),(0,i.__decorate)([(0,d.SB)()],O.prototype,"_name",void 0),(0,i.__decorate)([(0,d.SB)()],O.prototype,"domain",void 0),(0,i.__decorate)([(0,d.SB)()],O.prototype,"_invalid",void 0),(0,i.__decorate)([(0,d.SB)()],O.prototype,"_deviceConfig",void 0),(0,i.__decorate)([(0,d.SB)(),(0,s.F_)({context:l.c,subscribe:!0})],O.prototype,"deviceConfigs",void 0),O=(0,i.__decorate)([(0,d.Mo)("lcn-create-entity-dialog")],O)}};
//# sourceMappingURL=708.ad32b2bae143f30a.js.map