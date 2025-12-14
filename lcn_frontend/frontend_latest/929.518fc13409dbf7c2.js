export const __webpack_id__="929";export const __webpack_ids__=["929"];export const __webpack_modules__={674:function(e,t,a){a.d(t,{d:()=>i});const i=e=>e.stopPropagation()},2893:function(e,t,a){var i=a(9868),s=a(191),o=a(65),l=a(4922),n=a(1991),r=a(5907),c=a(3120);class d extends s.M{render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return l.qy` <div class="mdc-form-field ${(0,r.H)(e)}">
      <slot></slot>
      <label class="mdc-label" @click=${this._labelClick}>
        <slot name="label">${this.label}</slot>
      </label>
    </div>`}_labelClick(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,c.r)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,c.r)(e,"change");break;default:e.click()}}constructor(...e){super(...e),this.disabled=!1}}d.styles=[o.R,l.AH`
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
    `],(0,i.__decorate)([(0,n.MZ)({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),d=(0,i.__decorate)([(0,n.EM)("ha-formfield")],d)},7401:function(e,t,a){var i=a(9868),s=a(7137),o=a(808),l=a(4922),n=a(1991);class r extends s.${}r.styles=[o.R,l.AH`
      :host {
        --ha-icon-display: block;
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-secondary: var(--secondary-text-color);
        --md-sys-color-surface: var(--card-background-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);
      }
    `],r=(0,i.__decorate)([(0,n.EM)("ha-md-select-option")],r)},2295:function(e,t,a){var i=a(9868),s=a(9072),o=a(9512),l=a(9152),n=a(4922),r=a(1991);class c extends s.V{}c.styles=[o.R,l.R,n.AH`
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
    `],c=(0,i.__decorate)([(0,r.EM)("ha-md-select")],c)},6292:function(e,t,a){var i=a(9868),s=a(3442),o=a(5141),l=a(4922),n=a(1991);class r extends s.F{}r.styles=[o.R,l.AH`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `],r=(0,i.__decorate)([(0,n.EM)("ha-radio")],r)},7420:function(e,t,a){a.d(t,{K$:()=>l,dk:()=>n});var i=a(3120);const s=()=>Promise.all([a.e("543"),a.e("915")]).then(a.bind(a,478)),o=(e,t,a)=>new Promise((o=>{const l=t.cancel,n=t.confirm;(0,i.r)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:s,dialogParams:{...t,...a,cancel:()=>{o(!!a?.prompt&&null),l&&l()},confirm:e=>{o(!a?.prompt||e),n&&n(e)}}})})),l=(e,t)=>o(e,t),n=(e,t)=>o(e,t,{confirmation:!0})},1578:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(4922)),o=a(674),l=a(1991),n=a(3566);class r extends s.WF{get _sources(){const e=this.lcn.localize("binary-sensor");return[{name:e+" 1",value:"BINSENSOR1"},{name:e+" 2",value:"BINSENSOR2"},{name:e+" 4",value:"BINSENSOR4"},{name:e+" 3",value:"BINSENSOR3"},{name:e+" 5",value:"BINSENSOR5"},{name:e+" 6",value:"BINSENSOR6"},{name:e+" 7",value:"BINSENSOR7"},{name:e+" 8",value:"BINSENSOR8"}]}connectedCallback(){super.connectedCallback(),this._source=this._sources[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._source?s.qy`
      <div class="sources">
        <ha-md-select
          id="source-select"
          .label=${this.lcn.localize("source")}
          .value=${this._source.value}
          @change=${this._sourceChanged}
          @closed=${o.d}
        >
          ${this._sources.map((e=>s.qy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>
    `:s.s6}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sources.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}static get styles(){return[n.nA,s.AH`
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.domainData={source:"BINSENSOR1"}}}(0,i.__decorate)([(0,l.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,l.wk)()],r.prototype,"_source",void 0),(0,i.__decorate)([(0,l.P)("#source-select")],r.prototype,"_sourceSelect",void 0),r=(0,i.__decorate)([(0,l.EM)("lcn-config-binary-sensor-element")],r)},8621:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(1934),a(7483)),o=a(55),l=a(4922),n=a(1991),r=a(3120);class c extends s.U{firstUpdated(){super.firstUpdated(),this.addEventListener("change",(()=>{var e;this.haptic&&(e="light",(0,r.r)(window,"haptic",e))}))}constructor(...e){super(...e),this.haptic=!1}}c.styles=[o.R,l.AH`
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
    `],(0,i.__decorate)([(0,n.MZ)({type:Boolean})],c.prototype,"haptic",void 0),c=(0,i.__decorate)([(0,n.EM)("ha-switch")],c);var d=a(674),h=a(3566);class u extends l.WF{get _is2012(){return this.softwareSerial>=1441792}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _varSetpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _regulatorLockOptions(){const e=[{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-not-lockable"),value:"NOT_LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable"),value:"LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable-with-target-value"),value:"LOCKABLE_WITH_TARGET_VALUE"}];return this.softwareSerial<1180417?e.slice(0,2):e}get _sources(){return this._is2012?this._variablesNew:this._variablesOld}get _setpoints(){return this._is2012?this._varSetpoints.concat(this._variablesNew):this._varSetpoints}connectedCallback(){super.connectedCallback(),this._source=this._sources[0],this._setpoint=this._setpoints[0],this._unit=this._varUnits[0],this._lockOption=this._regulatorLockOptions[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateMinTemp(this.domainData.min_temp)||!this._validateMaxTemp(this.domainData.max_temp)||!this._validateTargetValueLocked(this._targetValueLocked)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._source&&this._setpoint&&this._unit&&this._lockOption?l.qy`
      <div class="sources">
        <ha-md-select
          id="source-select"
          .label=${this.lcn.localize("source")}
          .value=${this._source.value}
          @change=${this._sourceChanged}
          @closed=${d.d}
        >
          ${this._sources.map((e=>l.qy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="setpoint-select"
          .label=${this.lcn.localize("setpoint")}
          .value=${this._setpoint.value}
          fixedMenuPosition
          @change=${this._setpointChanged}
          @closed=${d.d}
        >
          ${this._setpoints.map((e=>l.qy`
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
        @closed=${d.d}
      >
        ${this._varUnits.map((e=>l.qy`
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
          @closed=${d.d}
        >
          ${this._regulatorLockOptions.map((e=>l.qy`
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
    `:l.s6}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sources.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_setpointChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._setpoint=this._setpoints.find((e=>e.value===t.value)),this.domainData.setpoint=this._setpoint.value)}_minTempChanged(e){const t=e.target;this.domainData.min_temp=+t.value;this.shadowRoot.querySelector("#max-temperature").reportValidity(),this.requestUpdate()}_maxTempChanged(e){const t=e.target;this.domainData.max_temp=+t.value;this.shadowRoot.querySelector("#min-temperature").reportValidity(),this.requestUpdate()}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}_lockOptionChanged(e){const t=e.target;switch(-1===t.selectedIndex?this._lockOption=this._regulatorLockOptions[0]:this._lockOption=this._regulatorLockOptions.find((e=>e.value===t.value)),this._lockOption.value){case"LOCKABLE":this.domainData.lockable=!0,this.domainData.target_value_locked=-1;break;case"LOCKABLE_WITH_TARGET_VALUE":this.domainData.lockable=!0,this.domainData.target_value_locked=this._targetValueLocked;break;default:this.domainData.lockable=!1,this.domainData.target_value_locked=-1}}_targetValueLockedChanged(e){const t=e.target;this._targetValueLocked=+t.value,this.domainData.target_value_locked=+t.value}_validateMaxTemp(e){return e>this.domainData.min_temp}_validateMinTemp(e){return e<this.domainData.max_temp}_validateTargetValueLocked(e){return e>=0&&e<=100}get _validityTransformMaxTemp(){return e=>({valid:this._validateMaxTemp(+e)})}get _validityTransformMinTemp(){return e=>({valid:this._validateMinTemp(+e)})}get _validityTransformTargetValueLocked(){return e=>({valid:this._validateTargetValueLocked(+e)})}static get styles(){return[h.nA,l.AH`
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
      `]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",setpoint:"R1VARSETPOINT",max_temp:35,min_temp:7,lockable:!1,target_value_locked:-1,unit_of_measurement:"°C"},this._targetValueLocked=0,this._invalid=!1,this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}],this._varUnits=[{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"}]}}(0,i.__decorate)([(0,n.MZ)({attribute:!1})],u.prototype,"hass",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1})],u.prototype,"lcn",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1,type:Number})],u.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1})],u.prototype,"domainData",void 0),(0,i.__decorate)([(0,n.wk)()],u.prototype,"_source",void 0),(0,i.__decorate)([(0,n.wk)()],u.prototype,"_setpoint",void 0),(0,i.__decorate)([(0,n.wk)()],u.prototype,"_unit",void 0),(0,i.__decorate)([(0,n.wk)()],u.prototype,"_lockOption",void 0),(0,i.__decorate)([(0,n.wk)()],u.prototype,"_targetValueLocked",void 0),u=(0,i.__decorate)([(0,n.EM)("lcn-config-climate-element")],u)},7135:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(4922)),o=a(1991),l=a(674),n=a(3566);class r extends s.WF{get _motors(){return[{name:this.lcn.localize("motor-port",{port:1}),value:"MOTOR1"},{name:this.lcn.localize("motor-port",{port:2}),value:"MOTOR2"},{name:this.lcn.localize("motor-port",{port:3}),value:"MOTOR3"},{name:this.lcn.localize("motor-port",{port:4}),value:"MOTOR4"},{name:this.lcn.localize("outputs"),value:"OUTPUTS"}]}get _positioningModes(){return[{name:this.lcn.localize("motor-positioning-none"),value:"NONE"},{name:this.lcn.localize("motor-positioning-bs4"),value:"BS4"},{name:this.lcn.localize("motor-positioning-module"),value:"MODULE"}]}connectedCallback(){super.connectedCallback(),this._motor=this._motors[0],this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0]}render(){return this._motor||this._positioningMode||this._reverseDelay?s.qy`
      <ha-md-select
        id="motor-select"
        .label=${this.lcn.localize("motor")}
        .value=${this._motor.value}
        @change=${this._motorChanged}
        @closed=${l.d}
      >
        ${this._motors.map((e=>s.qy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>

      ${"OUTPUTS"===this._motor.value?s.qy`
            <ha-md-select
              id="reverse-delay-select"
              .label=${this.lcn.localize("reverse-delay")}
              .value=${this._reverseDelay.value}
              @change=${this._reverseDelayChanged}
              @closed=${l.d}
            >
              ${this._reverseDelays.map((e=>s.qy`
                  <ha-md-select-option .value=${e.value}>
                    ${e.name}
                  </ha-md-select-option>
                `))}
            </ha-md-select>
          `:s.qy`
            <ha-md-select
              id="positioning-mode-select"
              .label=${this.lcn.localize("motor-positioning-mode")}
              .value=${this._positioningMode.value}
              @change=${this._positioningModeChanged}
              @closed=${l.d}
            >
              ${this._positioningModes.map((e=>s.qy`
                  <ha-md-select-option .value=${e.value}>
                    ${e.name}
                  </ha-md-select-option>
                `))}
            </ha-md-select>
          `}
    `:s.s6}_motorChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._motor=this._motors.find((e=>e.value===t.value)),this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0],this.domainData.motor=this._motor.value,"OUTPUTS"===this._motor.value?this.domainData.positioning_mode="NONE":this.domainData.reverse_time="RT1200")}_positioningModeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._positioningMode=this._positioningModes.find((e=>e.value===t.value)),this.domainData.positioning_mode=this._positioningMode.value)}_reverseDelayChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._reverseDelay=this._reverseDelays.find((e=>e.value===t.value)),this.domainData.reverse_time=this._reverseDelay.value)}static get styles(){return[n.nA,s.AH`
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.domainData={motor:"MOTOR1",positioning_mode:"NONE",reverse_time:"RT1200"},this._reverseDelays=[{name:"70ms",value:"RT70"},{name:"600ms",value:"RT600"},{name:"1200ms",value:"RT1200"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_motor",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_positioningMode",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_reverseDelay",void 0),r=(0,i.__decorate)([(0,o.EM)("lcn-config-cover-element")],r)},5952:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(6292),a(2893),a(1934),a(4922)),o=a(1991),l=a(674),n=a(3566);class r extends s.WF{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?s.qy`
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
        @change=${this._portChanged}
        @closed=${l.d}
      >
        ${this._portType.value.map((e=>s.qy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>

      ${this._renderOutputFeatures()}
    `:s.s6}_renderOutputFeatures(){return"output"===this._portType.id?s.qy`
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
        `:s.s6}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0],this.domainData.output=this._port.value}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}_dimmableChanged(e){this.domainData.dimmable=e.target.checked}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}static get styles(){return[n.nA,s.AH`
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
      `]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1",dimmable:!1,transition:0},this._invalid=!1}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_portType",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_port",void 0),(0,i.__decorate)([(0,o.P)("#port-select")],r.prototype,"_portSelect",void 0),r=(0,i.__decorate)([(0,o.EM)("lcn-config-light-element")],r)},8087:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(1934),a(1978),a(2893),a(4922)),o=a(1991),l=a(674),n=a(3566);class r extends s.WF{get _registers(){const e=this.lcn.localize("register");return[{name:e+" 0",value:"0"},{name:e+" 1",value:"1"},{name:e+" 2",value:"2"},{name:e+" 3",value:"3"},{name:e+" 4",value:"4"},{name:e+" 5",value:"5"},{name:e+" 6",value:"6"},{name:e+" 7",value:"7"},{name:e+" 8",value:"8"},{name:e+" 9",value:"9"}]}get _scenes(){const e=this.lcn.localize("scene");return[{name:e+" 1",value:"0"},{name:e+" 2",value:"1"},{name:e+" 3",value:"2"},{name:e+" 4",value:"3"},{name:e+" 5",value:"4"},{name:e+" 6",value:"5"},{name:e+" 7",value:"6"},{name:e+" 8",value:"7"},{name:e+" 9",value:"8"},{name:e+" 10",value:"9"}]}get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}connectedCallback(){super.connectedCallback(),this._register=this._registers[0],this._scene=this._scenes[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._register||this._scene?s.qy`
      <div class="registers">
        <ha-md-select
          id="register-select"
          .label=${this.lcn.localize("register")}
          .value=${this._register.value}
          @change=${this._registerChanged}
          @closed=${l.d}
        >
          ${this._registers.map((e=>s.qy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="scene-select"
          .label=${this.lcn.localize("scene")}
          .value=${this._scene.value}
          @change=${this._sceneChanged}
          @closed=${l.d}
        >
          ${this._scenes.map((e=>s.qy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>

      <div class="ports">
        <label>${this.lcn.localize("outputs")}:</label><br />
        ${this._outputPorts.map((e=>s.qy`
            <ha-formfield label=${e.name}>
              <ha-checkbox .value=${e.value} @change=${this._portCheckedChanged}></ha-checkbox>
            </ha-formfield>
          `))}
      </div>

      <div class="ports">
        <label>${this.lcn.localize("relays")}:</label><br />
        ${this._relayPorts.map((e=>s.qy`
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
    `:s.s6}_registerChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._register=this._registers.find((e=>e.value===t.value)),this.domainData.register=+this._register.value)}_sceneChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._scene=this._scenes.find((e=>e.value===t.value)),this.domainData.scene=+this._scene.value)}_portCheckedChanged(e){e.target.checked?this.domainData.outputs.push(e.target.value):this.domainData.outputs=this.domainData.outputs.filter((t=>e.target.value!==t)),this.requestUpdate()}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}get _transitionDisabled(){const e=this._outputPorts.map((e=>e.value));return 0===this.domainData.outputs.filter((t=>e.includes(t))).length}static get styles(){return[n.nA,s.AH`
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
      `]}constructor(...e){super(...e),this.domainData={register:0,scene:0,outputs:[],transition:0},this._invalid=!1}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_register",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_scene",void 0),r=(0,i.__decorate)([(0,o.EM)("lcn-config-scene-element")],r)},2440:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(4922)),o=a(1991),l=a(3566),n=a(674);class r extends s.WF{get _is2013(){return this.softwareSerial>=1507846}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _setpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _thresholdsOld(){const e=this.lcn.localize("threshold");return[{name:e+" 1",value:"THRS1"},{name:e+" 2",value:"THRS2"},{name:e+" 3",value:"THRS3"},{name:e+" 4",value:"THRS4"},{name:e+" 5",value:"THRS5"}]}get _thresholdsNew(){const e=this.lcn.localize("threshold");return[{name:e+" 1-1",value:"THRS1"},{name:e+" 1-2",value:"THRS2"},{name:e+" 1-3",value:"THRS3"},{name:e+" 1-4",value:"THRS4"},{name:e+" 2-1",value:"THRS2_1"},{name:e+" 2-2",value:"THRS2_2"},{name:e+" 2-3",value:"THRS2_3"},{name:e+" 2-4",value:"THRS2_4"},{name:e+" 3-1",value:"THRS3_1"},{name:e+" 3-2",value:"THRS3_2"},{name:e+" 3-3",value:"THRS3_3"},{name:e+" 3-4",value:"THRS3_4"},{name:e+" 4-1",value:"THRS4_1"},{name:e+" 4-2",value:"THRS4_2"},{name:e+" 4-3",value:"THRS4_3"},{name:e+" 4-4",value:"THRS4_4"}]}get _s0Inputs(){const e=this.lcn.localize("s0input");return[{name:e+" 1",value:"S0INPUT1"},{name:e+" 2",value:"S0INPUT2"},{name:e+" 3",value:"S0INPUT3"},{name:e+" 4",value:"S0INPUT4"}]}get _ledPorts(){const e=this.lcn.localize("led");return[{name:e+" 1",value:"LED1"},{name:e+" 2",value:"LED2"},{name:e+" 3",value:"LED3"},{name:e+" 4",value:"LED4"},{name:e+" 5",value:"LED5"},{name:e+" 6",value:"LED6"},{name:e+" 7",value:"LED7"},{name:e+" 8",value:"LED8"},{name:e+" 9",value:"LED9"},{name:e+" 10",value:"LED10"},{name:e+" 11",value:"LED11"},{name:e+" 12",value:"LED12"}]}get _logicOpPorts(){const e=this.lcn.localize("logic");return[{name:e+" 1",value:"LOGICOP1"},{name:e+" 2",value:"LOGICOP2"},{name:e+" 3",value:"LOGICOP3"},{name:e+" 4",value:"LOGICOP4"}]}get _sourceTypes(){return[{name:this.lcn.localize("variables"),value:this._is2013?this._variablesNew:this._variablesOld,id:"variables"},{name:this.lcn.localize("setpoints"),value:this._setpoints,id:"setpoints"},{name:this.lcn.localize("thresholds"),value:this._is2013?this._thresholdsNew:this._thresholdsOld,id:"thresholds"},{name:this.lcn.localize("s0inputs"),value:this._s0Inputs,id:"s0inputs"},{name:this.lcn.localize("leds"),value:this._ledPorts,id:"ledports"},{name:this.lcn.localize("logics"),value:this._logicOpPorts,id:"logicopports"}]}get _varUnits(){return[{name:this.lcn.localize("unit-lcn-native"),value:"NATIVE"},{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"},{name:"Kelvin",value:"K"},{name:"Lux (T-Port)",value:"LUX_T"},{name:"Lux (I-Port)",value:"LUX_I"},{name:this.lcn.localize("unit-humidity")+" (%)",value:"PERCENT"},{name:"CO2 (‰)",value:"PPM"},{name:this.lcn.localize("unit-wind")+" (m/s)",value:"METERPERSECOND"},{name:this.lcn.localize("unit-volts"),value:"VOLT"},{name:this.lcn.localize("unit-milliamperes"),value:"AMPERE"},{name:this.lcn.localize("unit-angle")+" (°)",value:"DEGREE"}]}connectedCallback(){super.connectedCallback(),this._sourceType=this._sourceTypes[0],this._source=this._sourceType.value[0],this._unit=this._varUnits[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._sourceType||this._source?s.qy`
      <div class="sources">
        <ha-md-select
          id="source-type-select"
          .label=${this.lcn.localize("source-type")}
          .value=${this._sourceType.id}
          @change=${this._sourceTypeChanged}
          @closed=${n.d}
        >
          ${this._sourceTypes.map((e=>s.qy`
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
          @closed=${n.d}
        >
          ${this._sourceType.value.map((e=>s.qy`
              <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
            `))}
        </ha-md-select>
      </div>

      <ha-md-select
        id="unit-select"
        .label=${this.lcn.localize("dashboard-entities-dialog-unit-of-measurement")}
        .value=${this._unit.value}
        @change=${this._unitChanged}
        @closed=${n.d}
      >
        ${this._varUnits.map((e=>s.qy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>
    `:s.s6}_sourceTypeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._sourceType=this._sourceTypes.find((e=>e.id===t.value)),this._source=this._sourceType.value[0],this.domainData.source=this._source.value)}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sourceType.value.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}static get styles(){return[l.nA,s.AH`
        .sources {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",unit_of_measurement:"NATIVE"},this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1,type:Number})],r.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_sourceType",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_source",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_unit",void 0),(0,i.__decorate)([(0,o.P)("#source-select")],r.prototype,"_sourceSelect",void 0),r=(0,i.__decorate)([(0,o.EM)("lcn-config-sensor-element")],r)},7782:function(e,t,a){var i=a(9868),s=(a(2295),a(7401),a(1934),a(4922)),o=a(1991),l=a(3566),n=(a(6292),a(2893),a(674));class r extends s.WF{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _regulators(){const e=this.lcn.localize("regulator");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"},{name:this.lcn.localize("regulator"),value:this._regulators,id:"regulator-locks"},{name:this.lcn.localize("key"),value:this._keys,id:"key-locks"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?s.qy`
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
        @closed=${n.d}
      >
        ${this._portType.value.map((e=>s.qy`
            <ha-md-select-option .value=${e.value}> ${e.name} </ha-md-select-option>
          `))}
      </ha-md-select>
    `:s.s6}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0],this.domainData.output=this._port.value}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}static get styles(){return[l.nA,s.AH`
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
      `]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1"},this._keys=[{name:"A1",value:"A1"},{name:"A2",value:"A2"},{name:"A3",value:"A3"},{name:"A4",value:"A4"},{name:"A5",value:"A5"},{name:"A6",value:"A6"},{name:"A7",value:"A7"},{name:"A8",value:"A8"},{name:"B1",value:"B1"},{name:"B2",value:"B2"},{name:"B3",value:"B3"},{name:"B4",value:"B4"},{name:"B5",value:"B5"},{name:"B6",value:"B6"},{name:"B7",value:"B7"},{name:"B8",value:"B8"},{name:"C1",value:"C1"},{name:"C2",value:"C2"},{name:"C3",value:"C3"},{name:"C4",value:"C4"},{name:"C5",value:"C5"},{name:"C6",value:"C6"},{name:"C7",value:"C7"},{name:"C8",value:"C8"},{name:"D1",value:"D1"},{name:"D2",value:"D2"},{name:"D3",value:"D3"},{name:"D4",value:"D4"},{name:"D5",value:"D5"},{name:"D6",value:"D6"},{name:"D7",value:"D7"},{name:"D8",value:"D8"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],r.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_portType",void 0),(0,i.__decorate)([(0,o.wk)()],r.prototype,"_port",void 0),(0,i.__decorate)([(0,o.P)("#port-select")],r.prototype,"_portSelect",void 0),r=(0,i.__decorate)([(0,o.EM)("lcn-config-switch-element")],r)},9344:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t),a.d(t,{CreateEntityDialog:()=>g});var s=a(9868),o=a(7809),l=a(8337),n=a(6943),r=(a(1291),a(2295),a(7401),a(3120)),c=a(4922),d=a(1991),h=a(2847),u=a(674),m=a(3566),p=a(2862),v=(a(1578),a(8621),a(7135),a(5952),a(8087),a(2440),a(7782),a(7420)),_=e([n]);n=(_.then?(await _)():_)[0];class g extends c.WF{get _domains(){return[{name:this.lcn.localize("binary-sensor"),domain:"binary_sensor"},{name:this.lcn.localize("climate"),domain:"climate"},{name:this.lcn.localize("cover"),domain:"cover"},{name:this.lcn.localize("light"),domain:"light"},{name:this.lcn.localize("scene"),domain:"scene"},{name:this.lcn.localize("sensor"),domain:"sensor"},{name:this.lcn.localize("switch"),domain:"switch"}]}async showDialog(e){this._params=e,this.lcn=e.lcn,this._name="",this._invalid=!0,this._deviceConfig=e.deviceConfig,this._deviceConfig||(this._deviceConfig=this.deviceConfigs[0]),await this.updateComplete}render(){return this._params&&this.lcn&&this._deviceConfig?c.qy`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${(0,h.l)(this.hass,this.lcn.localize("dashboard-entities-dialog-create-title"))}
        @closed=${this._closeDialog}
      >
        <ha-md-select
          id="device-select"
          .label=${this.lcn.localize("device")}
          .value=${this._deviceConfig?(0,p.pD)(this._deviceConfig.address):void 0}
          @change=${this._deviceChanged}
          @closed=${u.d}
        >
          ${this.deviceConfigs.map((e=>c.qy`
              <ha-md-select-option .value=${(0,p.pD)(e.address)}>
                <div class="primary">${e.name}</div>
                <div class="secondary">(${(0,p.s6)(e.address)})</div>
              </ha-md-select-option>
            `))}
        </ha-md-select>

        <ha-md-select
          id="domain-select"
          .label=${this.lcn.localize("domain")}
          .value=${this.domain}
          @change=${this._domainChanged}
          @closed=${u.d}
        >
          ${this._domains.map((e=>c.qy`
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
          <ha-button slot="secondaryAction" @click=${this._closeDialog}>
            ${this.lcn.localize("dismiss")}</ha-button
          >
          <ha-button slot="primaryAction" .disabled=${this._invalid} @click=${this._create}>
            ${this.lcn.localize("create")}
          </ha-button>
        </div>
      </ha-dialog>
    `:c.s6}_renderDomain(e){if(!this._params||!this._deviceConfig)return c.s6;switch(e){case"binary_sensor":return c.qy`<lcn-config-binary-sensor-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-binary-sensor-element>`;case"climate":return c.qy`<lcn-config-climate-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          .softwareSerial=${this._deviceConfig.software_serial}
          @validity-changed=${this._validityChanged}
        ></lcn-config-climate-element>`;case"cover":return c.qy`<lcn-config-cover-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-cover-element>`;case"light":return c.qy`<lcn-config-light-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          @validity-changed=${this._validityChanged}
        ></lcn-config-light-element>`;case"scene":return c.qy`<lcn-config-scene-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          @validity-changed=${this._validityChanged}
        ></lcn-config-scene-element>`;case"sensor":return c.qy`<lcn-config-sensor-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
          .softwareSerial=${this._deviceConfig.software_serial}
        ></lcn-config-sensor-element>`;case"switch":return c.qy`<lcn-config-switch-element
          id="domain"
          .hass=${this.hass}
          .lcn=${this.lcn}
        ></lcn-config-switch-element>`;default:return c.s6}}_deviceChanged(e){const t=e.target,a=(0,p.d$)(t.value);this._deviceConfig=this.deviceConfigs.find((e=>e.address[0]===a[0]&&e.address[1]===a[1]&&e.address[2]===a[2]))}_nameChanged(e){const t=e.target;this._name=t.value,this._validityChanged(new CustomEvent("validity-changed",{detail:!this._name}))}_validityChanged(e){this._invalid=e.detail}async _create(){const e=this.shadowRoot?.querySelector("#domain"),t={name:this._name?this._name:this.domain,address:this._deviceConfig.address,domain:this.domain,domain_data:e.domainData};await this._params.createEntity(t)?this._closeDialog():await(0,v.K$)(this,{title:this.lcn.localize("dashboard-entities-dialog-add-alert-title"),text:`${this.lcn.localize("dashboard-entities-dialog-add-alert-text")}\n              ${this.lcn.localize("dashboard-entities-dialog-add-alert-hint")}`})}_closeDialog(){this._params=void 0,(0,r.r)(this,"dialog-closed",{dialog:this.localName})}_domainChanged(e){const t=e.target;this.domain=t.value}static get styles(){return[m.nA,c.AH`
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
      `]}constructor(...e){super(...e),this._name="",this.domain="binary_sensor",this._invalid=!0}}(0,s.__decorate)([(0,d.MZ)({attribute:!1})],g.prototype,"hass",void 0),(0,s.__decorate)([(0,d.MZ)({attribute:!1})],g.prototype,"lcn",void 0),(0,s.__decorate)([(0,d.wk)()],g.prototype,"_params",void 0),(0,s.__decorate)([(0,d.wk)()],g.prototype,"_name",void 0),(0,s.__decorate)([(0,d.wk)()],g.prototype,"domain",void 0),(0,s.__decorate)([(0,d.wk)()],g.prototype,"_invalid",void 0),(0,s.__decorate)([(0,d.wk)()],g.prototype,"_deviceConfig",void 0),(0,s.__decorate)([(0,d.wk)(),(0,o.Fg)({context:l.h,subscribe:!0})],g.prototype,"deviceConfigs",void 0),g=(0,s.__decorate)([(0,d.EM)("lcn-create-entity-dialog")],g),i()}catch(g){i(g)}}))}};
//# sourceMappingURL=929.518fc13409dbf7c2.js.map