"use strict";(self.webpackChunklcn_frontend=self.webpackChunklcn_frontend||[]).push([["929"],{20674:function(e,t,a){a.d(t,{d:function(){return i}});const i=e=>e.stopPropagation()},52893:function(e,t,a){a(35748),a(95013);var i=a(69868),s=a(90191),o=a(80065),l=a(84922),n=a(11991),r=a(75907),c=a(73120);let d,h,u=e=>e;class m extends s.M{render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return(0,l.qy)(d||(d=u` <div class="mdc-form-field ${0}">
      <slot></slot>
      <label class="mdc-label" @click=${0}>
        <slot name="label">${0}</slot>
      </label>
    </div>`),(0,r.H)(e),this._labelClick,this.label)}_labelClick(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,c.r)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,c.r)(e,"change");break;default:e.click()}}constructor(...e){super(...e),this.disabled=!1}}m.styles=[o.R,(0,l.AH)(h||(h=u`
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
    `))],(0,i.__decorate)([(0,n.MZ)({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),m=(0,i.__decorate)([(0,n.EM)("ha-formfield")],m)},97401:function(e,t,a){var i=a(69868),s=a(7137),o=a(20808),l=a(84922),n=a(11991);let r;class c extends s.${}c.styles=[o.R,(0,l.AH)(r||(r=(e=>e)`
      :host {
        --ha-icon-display: block;
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-secondary: var(--secondary-text-color);
        --md-sys-color-surface: var(--card-background-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-sys-color-on-surface-variant: var(--secondary-text-color);
      }
    `))],c=(0,i.__decorate)([(0,n.EM)("ha-md-select-option")],c)},22295:function(e,t,a){var i=a(69868),s=a(39072),o=a(29512),l=a(89152),n=a(84922),r=a(11991);let c;class d extends s.V{}d.styles=[o.R,l.R,(0,n.AH)(c||(c=(e=>e)`
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
    `))],d=(0,i.__decorate)([(0,r.EM)("ha-md-select")],d)},56292:function(e,t,a){var i=a(69868),s=a(63442),o=a(45141),l=a(84922),n=a(11991);let r;class c extends s.F{}c.styles=[o.R,(0,l.AH)(r||(r=(e=>e)`
      :host {
        --mdc-theme-secondary: var(--primary-color);
      }
    `))],c=(0,i.__decorate)([(0,n.EM)("ha-radio")],c)},31578:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(5934),a(95013);var i=a(69868),s=(a(22295),a(97401),a(84922)),o=a(20674),l=a(11991),n=a(83566);let r,c,d,h=e=>e;class u extends s.WF{get _sources(){const e=this.lcn.localize("binary-sensor");return[{name:e+" 1",value:"BINSENSOR1"},{name:e+" 2",value:"BINSENSOR2"},{name:e+" 4",value:"BINSENSOR4"},{name:e+" 3",value:"BINSENSOR3"},{name:e+" 5",value:"BINSENSOR5"},{name:e+" 6",value:"BINSENSOR6"},{name:e+" 7",value:"BINSENSOR7"},{name:e+" 8",value:"BINSENSOR8"}]}connectedCallback(){super.connectedCallback(),this._source=this._sources[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._source?(0,s.qy)(r||(r=h`
      <div class="sources">
        <ha-md-select
          id="source-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>
      </div>
    `),this.lcn.localize("source"),this._source.value,this._sourceChanged,o.d,this._sources.map((e=>(0,s.qy)(c||(c=h`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name)))):s.s6}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sources.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}static get styles(){return[n.nA,(0,s.AH)(d||(d=h`
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `))]}constructor(...e){super(...e),this.domainData={source:"BINSENSOR1"}}}(0,i.__decorate)([(0,l.MZ)({attribute:!1})],u.prototype,"hass",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:!1})],u.prototype,"lcn",void 0),(0,i.__decorate)([(0,l.MZ)({attribute:!1})],u.prototype,"domainData",void 0),(0,i.__decorate)([(0,l.wk)()],u.prototype,"_source",void 0),(0,i.__decorate)([(0,l.P)("#source-select")],u.prototype,"_sourceSelect",void 0),u=(0,i.__decorate)([(0,l.EM)("lcn-config-binary-sensor-element")],u)},68621:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(95013);var i=a(69868),s=(a(22295),a(97401),a(11934),a(7483)),o=a(60055),l=a(84922),n=a(11991),r=a(73120);let c;class d extends s.U{firstUpdated(){super.firstUpdated(),this.addEventListener("change",(()=>{var e;this.haptic&&(e="light",(0,r.r)(window,"haptic",e))}))}constructor(...e){super(...e),this.haptic=!1}}d.styles=[o.R,(0,l.AH)(c||(c=(e=>e)`
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
    `))],(0,i.__decorate)([(0,n.MZ)({type:Boolean})],d.prototype,"haptic",void 0),d=(0,i.__decorate)([(0,n.EM)("ha-switch")],d);var h=a(20674),u=a(83566);let m,v,p,_,g,y,b=e=>e;class $ extends l.WF{get _is2012(){return this.softwareSerial>=1441792}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _varSetpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _regulatorLockOptions(){const e=[{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-not-lockable"),value:"NOT_LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable"),value:"LOCKABLE"},{name:this.lcn.localize("dashboard-entities-dialog-climate-regulator-lockable-with-target-value"),value:"LOCKABLE_WITH_TARGET_VALUE"}];return this.softwareSerial<1180417?e.slice(0,2):e}get _sources(){return this._is2012?this._variablesNew:this._variablesOld}get _setpoints(){return this._is2012?this._varSetpoints.concat(this._variablesNew):this._varSetpoints}connectedCallback(){super.connectedCallback(),this._source=this._sources[0],this._setpoint=this._setpoints[0],this._unit=this._varUnits[0],this._lockOption=this._regulatorLockOptions[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateMinTemp(this.domainData.min_temp)||!this._validateMaxTemp(this.domainData.max_temp)||!this._validateTargetValueLocked(this._targetValueLocked)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._source&&this._setpoint&&this._unit&&this._lockOption?(0,l.qy)(m||(m=b`
      <div class="sources">
        <ha-md-select
          id="source-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>

        <ha-md-select
          id="setpoint-select"
          .label=${0}
          .value=${0}
          fixedMenuPosition
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>
      </div>

      <ha-md-select
        id="unit-select"
        .label=${0}
        .value=${0}
        fixedMenuPosition
        @change=${0}
        @closed=${0}
      >
        ${0}
      </ha-md-select>

      <div class="temperatures">
        <ha-textfield
          id="min-temperature"
          .label=${0}
          type="number"
          .suffix=${0}
          .value=${0}
          required
          autoValidate
          @input=${0}
          .validityTransform=${0}
          .validationMessage=${0}
        ></ha-textfield>

        <ha-textfield
          id="max-temperature"
          .label=${0}
          type="number"
          .suffix=${0}
          .value=${0}
          required
          autoValidate
          @input=${0}
          .validityTransform=${0}
          .validationMessage=${0}
        ></ha-textfield>
      </div>

      <div class="lock-options">
        <ha-md-select
          id="lock-options-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>

        <ha-textfield
          id="target-value"
          .label=${0}
          type="number"
          suffix="%"
          .value=${0}
          .disabled=${0}
          .helper=${0}
          .helperPersistent=${0}
          required
          autoValidate
          @input=${0}
          .validityTransform=${0}
          .validationMessage=${0}
        >
        </ha-textfield>
      </div>
    `),this.lcn.localize("source"),this._source.value,this._sourceChanged,h.d,this._sources.map((e=>(0,l.qy)(v||(v=b`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("setpoint"),this._setpoint.value,this._setpointChanged,h.d,this._setpoints.map((e=>(0,l.qy)(p||(p=b`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("dashboard-entities-dialog-unit-of-measurement"),this._unit.value,this._unitChanged,h.d,this._varUnits.map((e=>(0,l.qy)(_||(_=b`
            <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
          `),e.value,e.name))),this.lcn.localize("dashboard-entities-dialog-climate-min-temperature"),this._unit.value,this.domainData.min_temp.toString(),this._minTempChanged,this._validityTransformMinTemp,this.lcn.localize("dashboard-entities-dialog-climate-min-temperature-error"),this.lcn.localize("dashboard-entities-dialog-climate-max-temperature"),this._unit.value,this.domainData.max_temp.toString(),this._maxTempChanged,this._validityTransformMaxTemp,this.lcn.localize("dashboard-entities-dialog-climate-max-temperature-error"),this.lcn.localize("dashboard-entities-dialog-climate-regulator-lock"),this._lockOption.value,this._lockOptionChanged,h.d,this._regulatorLockOptions.map((e=>(0,l.qy)(g||(g=b`
              <ha-md-select-option .value=${0}>
                ${0}
              </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("dashboard-entities-dialog-climate-target-value"),this._targetValueLocked.toString(),"LOCKABLE_WITH_TARGET_VALUE"!==this._lockOption.value,this.lcn.localize("dashboard-entities-dialog-climate-target-value-helper"),"LOCKABLE_WITH_TARGET_VALUE"===this._lockOption.value,this._targetValueLockedChanged,this._validityTransformTargetValueLocked,this.lcn.localize("dashboard-entities-dialog-climate-target-value-error")):l.s6}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sources.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_setpointChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._setpoint=this._setpoints.find((e=>e.value===t.value)),this.domainData.setpoint=this._setpoint.value)}_minTempChanged(e){const t=e.target;this.domainData.min_temp=+t.value;this.shadowRoot.querySelector("#max-temperature").reportValidity(),this.requestUpdate()}_maxTempChanged(e){const t=e.target;this.domainData.max_temp=+t.value;this.shadowRoot.querySelector("#min-temperature").reportValidity(),this.requestUpdate()}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}_lockOptionChanged(e){const t=e.target;switch(-1===t.selectedIndex?this._lockOption=this._regulatorLockOptions[0]:this._lockOption=this._regulatorLockOptions.find((e=>e.value===t.value)),this._lockOption.value){case"LOCKABLE":this.domainData.lockable=!0,this.domainData.target_value_locked=-1;break;case"LOCKABLE_WITH_TARGET_VALUE":this.domainData.lockable=!0,this.domainData.target_value_locked=this._targetValueLocked;break;default:this.domainData.lockable=!1,this.domainData.target_value_locked=-1}}_targetValueLockedChanged(e){const t=e.target;this._targetValueLocked=+t.value,this.domainData.target_value_locked=+t.value}_validateMaxTemp(e){return e>this.domainData.min_temp}_validateMinTemp(e){return e<this.domainData.max_temp}_validateTargetValueLocked(e){return e>=0&&e<=100}get _validityTransformMaxTemp(){return e=>({valid:this._validateMaxTemp(+e)})}get _validityTransformMinTemp(){return e=>({valid:this._validateMinTemp(+e)})}get _validityTransformTargetValueLocked(){return e=>({valid:this._validateTargetValueLocked(+e)})}static get styles(){return[u.nA,(0,l.AH)(y||(y=b`
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
      `))]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",setpoint:"R1VARSETPOINT",max_temp:35,min_temp:7,lockable:!1,target_value_locked:-1,unit_of_measurement:"°C"},this._targetValueLocked=0,this._invalid=!1,this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}],this._varUnits=[{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"}]}}(0,i.__decorate)([(0,n.MZ)({attribute:!1})],$.prototype,"hass",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1})],$.prototype,"lcn",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1,type:Number})],$.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,n.MZ)({attribute:!1})],$.prototype,"domainData",void 0),(0,i.__decorate)([(0,n.wk)()],$.prototype,"_source",void 0),(0,i.__decorate)([(0,n.wk)()],$.prototype,"_setpoint",void 0),(0,i.__decorate)([(0,n.wk)()],$.prototype,"_unit",void 0),(0,i.__decorate)([(0,n.wk)()],$.prototype,"_lockOption",void 0),(0,i.__decorate)([(0,n.wk)()],$.prototype,"_targetValueLocked",void 0),$=(0,i.__decorate)([(0,n.EM)("lcn-config-climate-element")],$)},57135:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(95013);var i=a(69868),s=(a(22295),a(97401),a(84922)),o=a(11991),l=a(20674),n=a(83566);let r,c,d,h,u,m,v,p=e=>e;class _ extends s.WF{get _motors(){return[{name:this.lcn.localize("motor-port",{port:1}),value:"MOTOR1"},{name:this.lcn.localize("motor-port",{port:2}),value:"MOTOR2"},{name:this.lcn.localize("motor-port",{port:3}),value:"MOTOR3"},{name:this.lcn.localize("motor-port",{port:4}),value:"MOTOR4"},{name:this.lcn.localize("outputs"),value:"OUTPUTS"}]}get _positioningModes(){return[{name:this.lcn.localize("motor-positioning-none"),value:"NONE"},{name:this.lcn.localize("motor-positioning-bs4"),value:"BS4"},{name:this.lcn.localize("motor-positioning-module"),value:"MODULE"}]}connectedCallback(){super.connectedCallback(),this._motor=this._motors[0],this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0]}render(){return this._motor||this._positioningMode||this._reverseDelay?(0,s.qy)(r||(r=p`
      <ha-md-select
        id="motor-select"
        .label=${0}
        .value=${0}
        @change=${0}
        @closed=${0}
      >
        ${0}
      </ha-md-select>

      ${0}
    `),this.lcn.localize("motor"),this._motor.value,this._motorChanged,l.d,this._motors.map((e=>(0,s.qy)(c||(c=p`
            <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
          `),e.value,e.name))),"OUTPUTS"===this._motor.value?(0,s.qy)(d||(d=p`
            <ha-md-select
              id="reverse-delay-select"
              .label=${0}
              .value=${0}
              @change=${0}
              @closed=${0}
            >
              ${0}
            </ha-md-select>
          `),this.lcn.localize("reverse-delay"),this._reverseDelay.value,this._reverseDelayChanged,l.d,this._reverseDelays.map((e=>(0,s.qy)(h||(h=p`
                  <ha-md-select-option .value=${0}>
                    ${0}
                  </ha-md-select-option>
                `),e.value,e.name)))):(0,s.qy)(u||(u=p`
            <ha-md-select
              id="positioning-mode-select"
              .label=${0}
              .value=${0}
              @change=${0}
              @closed=${0}
            >
              ${0}
            </ha-md-select>
          `),this.lcn.localize("motor-positioning-mode"),this._positioningMode.value,this._positioningModeChanged,l.d,this._positioningModes.map((e=>(0,s.qy)(m||(m=p`
                  <ha-md-select-option .value=${0}>
                    ${0}
                  </ha-md-select-option>
                `),e.value,e.name))))):s.s6}_motorChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._motor=this._motors.find((e=>e.value===t.value)),this._positioningMode=this._positioningModes[0],this._reverseDelay=this._reverseDelays[0],this.domainData.motor=this._motor.value,"OUTPUTS"===this._motor.value?this.domainData.positioning_mode="NONE":this.domainData.reverse_time="RT1200")}_positioningModeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._positioningMode=this._positioningModes.find((e=>e.value===t.value)),this.domainData.positioning_mode=this._positioningMode.value)}_reverseDelayChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._reverseDelay=this._reverseDelays.find((e=>e.value===t.value)),this.domainData.reverse_time=this._reverseDelay.value)}static get styles(){return[n.nA,(0,s.AH)(v||(v=p`
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `))]}constructor(...e){super(...e),this.domainData={motor:"MOTOR1",positioning_mode:"NONE",reverse_time:"RT1200"},this._reverseDelays=[{name:"70ms",value:"RT70"},{name:"600ms",value:"RT600"},{name:"1200ms",value:"RT1200"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],_.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],_.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],_.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],_.prototype,"_motor",void 0),(0,i.__decorate)([(0,o.wk)()],_.prototype,"_positioningMode",void 0),(0,i.__decorate)([(0,o.wk)()],_.prototype,"_reverseDelay",void 0),_=(0,i.__decorate)([(0,o.EM)("lcn-config-cover-element")],_)},25952:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(5934),a(95013);var i=a(69868),s=(a(22295),a(97401),a(56292),a(52893),a(11934),a(84922)),o=a(11991),l=a(20674),n=a(83566);let r,c,d,h,u=e=>e;class m extends s.WF{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?(0,s.qy)(r||(r=u`
      <div id="port-type">${0}</div>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="output"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="relay"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-md-select
        id="port-select"
        .label=${0}
        .value=${0}
        fixedMenuPosition
        @change=${0}
        @closed=${0}
      >
        ${0}
      </ha-md-select>

      ${0}
    `),this.lcn.localize("port-type"),this.lcn.localize("output"),"output"===this._portType.id,this._portTypeChanged,this.lcn.localize("relay"),"relay"===this._portType.id,this._portTypeChanged,this.lcn.localize("port"),this._port.value,this._portChanged,l.d,this._portType.value.map((e=>(0,s.qy)(c||(c=u`
            <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
          `),e.value,e.name))),this._renderOutputFeatures()):s.s6}_renderOutputFeatures(){return"output"===this._portType.id?(0,s.qy)(d||(d=u`
          <div id="dimmable">
            <label>${0}:</label>

            <ha-switch
              .checked=${0}
              @change=${0}
            ></ha-switch>
          </div>

          <ha-textfield
            id="transition"
            .label=${0}
            type="number"
            suffix="s"
            .value=${0}
            min="0"
            max="486"
            required
            autoValidate
            @input=${0}
            .validityTransform=${0}
            .validationMessage=${0}
          ></ha-textfield>
        `),this.lcn.localize("dashboard-entities-dialog-light-dimmable"),this.domainData.dimmable,this._dimmableChanged,this.lcn.localize("dashboard-entities-dialog-light-transition"),this.domainData.transition.toString(),this._transitionChanged,this._validityTransformTransition,this.lcn.localize("dashboard-entities-dialog-light-transition-error")):s.s6}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0],this.domainData.output=this._port.value}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}_dimmableChanged(e){this.domainData.dimmable=e.target.checked}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}static get styles(){return[n.nA,(0,s.AH)(h||(h=u`
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
      `))]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1",dimmable:!1,transition:0},this._invalid=!1}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],m.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],m.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],m.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],m.prototype,"_portType",void 0),(0,i.__decorate)([(0,o.wk)()],m.prototype,"_port",void 0),(0,i.__decorate)([(0,o.P)("#port-select")],m.prototype,"_portSelect",void 0),m=(0,i.__decorate)([(0,o.EM)("lcn-config-light-element")],m)},40468:function(e,t,a){a(79827),a(35748),a(99342),a(65315),a(837),a(84136),a(37089),a(95013);var i=a(69868),s=(a(22295),a(97401),a(11934),a(71978),a(52893),a(84922)),o=a(11991),l=a(20674),n=a(83566);let r,c,d,h,u,m,v=e=>e;class p extends s.WF{get _registers(){const e=this.lcn.localize("register");return[{name:e+" 0",value:"0"},{name:e+" 1",value:"1"},{name:e+" 2",value:"2"},{name:e+" 3",value:"3"},{name:e+" 4",value:"4"},{name:e+" 5",value:"5"},{name:e+" 6",value:"6"},{name:e+" 7",value:"7"},{name:e+" 8",value:"8"},{name:e+" 9",value:"9"}]}get _scenes(){const e=this.lcn.localize("scene");return[{name:e+" 1",value:"0"},{name:e+" 2",value:"1"},{name:e+" 3",value:"2"},{name:e+" 4",value:"3"},{name:e+" 5",value:"4"},{name:e+" 6",value:"5"},{name:e+" 7",value:"6"},{name:e+" 8",value:"7"},{name:e+" 9",value:"8"},{name:e+" 10",value:"9"}]}get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}connectedCallback(){super.connectedCallback(),this._register=this._registers[0],this._scene=this._scenes[0]}willUpdate(e){super.willUpdate(e),this._invalid=!this._validateTransition(this.domainData.transition)}update(e){super.update(e),this.dispatchEvent(new CustomEvent("validity-changed",{detail:this._invalid,bubbles:!0,composed:!0}))}render(){return this._register||this._scene?(0,s.qy)(r||(r=v`
      <div class="registers">
        <ha-md-select
          id="register-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>

        <ha-md-select
          id="scene-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>
      </div>

      <div class="ports">
        <label>${0}:</label><br />
        ${0}
      </div>

      <div class="ports">
        <label>${0}:</label><br />
        ${0}
      </div>

      <ha-textfield
        .label=${0}
        type="number"
        suffix="s"
        .value=${0}
        min="0"
        max="486"
        required
        autoValidate
        @input=${0}
        .validityTransform=${0}
        .disabled=${0}
        .validationMessage=${0}
      ></ha-textfield>
    `),this.lcn.localize("register"),this._register.value,this._registerChanged,l.d,this._registers.map((e=>(0,s.qy)(c||(c=v`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("scene"),this._scene.value,this._sceneChanged,l.d,this._scenes.map((e=>(0,s.qy)(d||(d=v`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("outputs"),this._outputPorts.map((e=>(0,s.qy)(h||(h=v`
            <ha-formfield label=${0}>
              <ha-checkbox .value=${0} @change=${0}></ha-checkbox>
            </ha-formfield>
          `),e.name,e.value,this._portCheckedChanged))),this.lcn.localize("relays"),this._relayPorts.map((e=>(0,s.qy)(u||(u=v`
            <ha-formfield label=${0}>
              <ha-checkbox .value=${0} @change=${0}></ha-checkbox>
            </ha-formfield>
          `),e.name,e.value,this._portCheckedChanged))),this.lcn.localize("dashboard-entities-dialog-scene-transition"),this.domainData.transition.toString(),this._transitionChanged,this._validityTransformTransition,this._transitionDisabled,this.lcn.localize("dashboard-entities-dialog-scene-transition-error")):s.s6}_registerChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._register=this._registers.find((e=>e.value===t.value)),this.domainData.register=+this._register.value)}_sceneChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._scene=this._scenes.find((e=>e.value===t.value)),this.domainData.scene=+this._scene.value)}_portCheckedChanged(e){e.target.checked?this.domainData.outputs.push(e.target.value):this.domainData.outputs=this.domainData.outputs.filter((t=>e.target.value!==t)),this.requestUpdate()}_transitionChanged(e){const t=e.target;this.domainData.transition=+t.value,this.requestUpdate()}_validateTransition(e){return e>=0&&e<=486}get _validityTransformTransition(){return e=>({valid:this._validateTransition(+e)})}get _transitionDisabled(){const e=this._outputPorts.map((e=>e.value));return 0===this.domainData.outputs.filter((t=>e.includes(t))).length}static get styles(){return[n.nA,(0,s.AH)(m||(m=v`
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
      `))]}constructor(...e){super(...e),this.domainData={register:0,scene:0,outputs:[],transition:0},this._invalid=!1}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],p.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],p.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],p.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],p.prototype,"_register",void 0),(0,i.__decorate)([(0,o.wk)()],p.prototype,"_scene",void 0),p=(0,i.__decorate)([(0,o.EM)("lcn-config-scene-element")],p)},72440:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(5934),a(95013);var i=a(69868),s=(a(22295),a(97401),a(84922)),o=a(11991),l=a(83566),n=a(20674);let r,c,d,h,u,m=e=>e;class v extends s.WF{get _is2013(){return this.softwareSerial>=1507846}get _variablesNew(){const e=this.lcn.localize("variable");return[{name:e+" 1",value:"VAR1"},{name:e+" 2",value:"VAR2"},{name:e+" 3",value:"VAR3"},{name:e+" 4",value:"VAR4"},{name:e+" 5",value:"VAR5"},{name:e+" 6",value:"VAR6"},{name:e+" 7",value:"VAR7"},{name:e+" 8",value:"VAR8"},{name:e+" 9",value:"VAR9"},{name:e+" 10",value:"VAR10"},{name:e+" 11",value:"VAR11"},{name:e+" 12",value:"VAR12"}]}get _setpoints(){const e=this.lcn.localize("setpoint");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _thresholdsOld(){const e=this.lcn.localize("threshold");return[{name:e+" 1",value:"THRS1"},{name:e+" 2",value:"THRS2"},{name:e+" 3",value:"THRS3"},{name:e+" 4",value:"THRS4"},{name:e+" 5",value:"THRS5"}]}get _thresholdsNew(){const e=this.lcn.localize("threshold");return[{name:e+" 1-1",value:"THRS1"},{name:e+" 1-2",value:"THRS2"},{name:e+" 1-3",value:"THRS3"},{name:e+" 1-4",value:"THRS4"},{name:e+" 2-1",value:"THRS2_1"},{name:e+" 2-2",value:"THRS2_2"},{name:e+" 2-3",value:"THRS2_3"},{name:e+" 2-4",value:"THRS2_4"},{name:e+" 3-1",value:"THRS3_1"},{name:e+" 3-2",value:"THRS3_2"},{name:e+" 3-3",value:"THRS3_3"},{name:e+" 3-4",value:"THRS3_4"},{name:e+" 4-1",value:"THRS4_1"},{name:e+" 4-2",value:"THRS4_2"},{name:e+" 4-3",value:"THRS4_3"},{name:e+" 4-4",value:"THRS4_4"}]}get _s0Inputs(){const e=this.lcn.localize("s0input");return[{name:e+" 1",value:"S0INPUT1"},{name:e+" 2",value:"S0INPUT2"},{name:e+" 3",value:"S0INPUT3"},{name:e+" 4",value:"S0INPUT4"}]}get _ledPorts(){const e=this.lcn.localize("led");return[{name:e+" 1",value:"LED1"},{name:e+" 2",value:"LED2"},{name:e+" 3",value:"LED3"},{name:e+" 4",value:"LED4"},{name:e+" 5",value:"LED5"},{name:e+" 6",value:"LED6"},{name:e+" 7",value:"LED7"},{name:e+" 8",value:"LED8"},{name:e+" 9",value:"LED9"},{name:e+" 10",value:"LED10"},{name:e+" 11",value:"LED11"},{name:e+" 12",value:"LED12"}]}get _logicOpPorts(){const e=this.lcn.localize("logic");return[{name:e+" 1",value:"LOGICOP1"},{name:e+" 2",value:"LOGICOP2"},{name:e+" 3",value:"LOGICOP3"},{name:e+" 4",value:"LOGICOP4"}]}get _sourceTypes(){return[{name:this.lcn.localize("variables"),value:this._is2013?this._variablesNew:this._variablesOld,id:"variables"},{name:this.lcn.localize("setpoints"),value:this._setpoints,id:"setpoints"},{name:this.lcn.localize("thresholds"),value:this._is2013?this._thresholdsNew:this._thresholdsOld,id:"thresholds"},{name:this.lcn.localize("s0inputs"),value:this._s0Inputs,id:"s0inputs"},{name:this.lcn.localize("leds"),value:this._ledPorts,id:"ledports"},{name:this.lcn.localize("logics"),value:this._logicOpPorts,id:"logicopports"}]}get _varUnits(){return[{name:this.lcn.localize("unit-lcn-native"),value:"NATIVE"},{name:"Celsius",value:"°C"},{name:"Fahrenheit",value:"°F"},{name:"Kelvin",value:"K"},{name:"Lux (T-Port)",value:"LUX_T"},{name:"Lux (I-Port)",value:"LUX_I"},{name:this.lcn.localize("unit-humidity")+" (%)",value:"PERCENT"},{name:"CO2 (‰)",value:"PPM"},{name:this.lcn.localize("unit-wind")+" (m/s)",value:"METERPERSECOND"},{name:this.lcn.localize("unit-volts"),value:"VOLT"},{name:this.lcn.localize("unit-milliamperes"),value:"AMPERE"},{name:this.lcn.localize("unit-angle")+" (°)",value:"DEGREE"}]}connectedCallback(){super.connectedCallback(),this._sourceType=this._sourceTypes[0],this._source=this._sourceType.value[0],this._unit=this._varUnits[0]}async updated(e){e.has("_sourceType")&&this._sourceSelect.selectIndex(0),super.updated(e)}render(){return this._sourceType||this._source?(0,s.qy)(r||(r=m`
      <div class="sources">
        <ha-md-select
          id="source-type-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>

        <ha-md-select
          id="source-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>
      </div>

      <ha-md-select
        id="unit-select"
        .label=${0}
        .value=${0}
        @change=${0}
        @closed=${0}
      >
        ${0}
      </ha-md-select>
    `),this.lcn.localize("source-type"),this._sourceType.id,this._sourceTypeChanged,n.d,this._sourceTypes.map((e=>(0,s.qy)(c||(c=m`
              <ha-md-select-option .value=${0}>
                ${0}
              </ha-md-select-option>
            `),e.id,e.name))),this.lcn.localize("source"),this._source.value,this._sourceChanged,n.d,this._sourceType.value.map((e=>(0,s.qy)(d||(d=m`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.value,e.name))),this.lcn.localize("dashboard-entities-dialog-unit-of-measurement"),this._unit.value,this._unitChanged,n.d,this._varUnits.map((e=>(0,s.qy)(h||(h=m`
            <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
          `),e.value,e.name)))):s.s6}_sourceTypeChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._sourceType=this._sourceTypes.find((e=>e.id===t.value)),this._source=this._sourceType.value[0],this.domainData.source=this._source.value)}_sourceChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._source=this._sourceType.value.find((e=>e.value===t.value)),this.domainData.source=this._source.value)}_unitChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._unit=this._varUnits.find((e=>e.value===t.value)),this.domainData.unit_of_measurement=this._unit.value)}static get styles(){return[l.nA,(0,s.AH)(u||(u=m`
        .sources {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4px;
        }
        ha-md-select {
          display: block;
          margin-bottom: 8px;
        }
      `))]}constructor(...e){super(...e),this.softwareSerial=-1,this.domainData={source:"VAR1",unit_of_measurement:"NATIVE"},this._variablesOld=[{name:"TVar",value:"TVAR"},{name:"R1Var",value:"R1VAR"},{name:"R2Var",value:"R2VAR"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],v.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],v.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1,type:Number})],v.prototype,"softwareSerial",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],v.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],v.prototype,"_sourceType",void 0),(0,i.__decorate)([(0,o.wk)()],v.prototype,"_source",void 0),(0,i.__decorate)([(0,o.wk)()],v.prototype,"_unit",void 0),(0,i.__decorate)([(0,o.P)("#source-select")],v.prototype,"_sourceSelect",void 0),v=(0,i.__decorate)([(0,o.EM)("lcn-config-sensor-element")],v)},97782:function(e,t,a){a(35748),a(65315),a(84136),a(37089),a(5934),a(95013);var i=a(69868),s=(a(22295),a(97401),a(11934),a(84922)),o=a(11991),l=a(83566),n=(a(56292),a(52893),a(20674));let r,c,d,h=e=>e;class u extends s.WF{get _outputPorts(){const e=this.lcn.localize("output");return[{name:e+" 1",value:"OUTPUT1"},{name:e+" 2",value:"OUTPUT2"},{name:e+" 3",value:"OUTPUT3"},{name:e+" 4",value:"OUTPUT4"}]}get _relayPorts(){const e=this.lcn.localize("relay");return[{name:e+" 1",value:"RELAY1"},{name:e+" 2",value:"RELAY2"},{name:e+" 3",value:"RELAY3"},{name:e+" 4",value:"RELAY4"},{name:e+" 5",value:"RELAY5"},{name:e+" 6",value:"RELAY6"},{name:e+" 7",value:"RELAY7"},{name:e+" 8",value:"RELAY8"}]}get _regulators(){const e=this.lcn.localize("regulator");return[{name:e+" 1",value:"R1VARSETPOINT"},{name:e+" 2",value:"R2VARSETPOINT"}]}get _portTypes(){return[{name:this.lcn.localize("output"),value:this._outputPorts,id:"output"},{name:this.lcn.localize("relay"),value:this._relayPorts,id:"relay"},{name:this.lcn.localize("regulator"),value:this._regulators,id:"regulator-locks"},{name:this.lcn.localize("key"),value:this._keys,id:"key-locks"}]}connectedCallback(){super.connectedCallback(),this._portType=this._portTypes[0],this._port=this._portType.value[0]}async updated(e){e.has("_portType")&&this._portSelect.selectIndex(0),super.updated(e)}render(){return this._portType||this._port?(0,s.qy)(r||(r=h`
      <div id="port-type">${0}</div>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="output"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="relay"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="regulator-locks"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-formfield label=${0}>
        <ha-radio
          name="port"
          value="key-locks"
          .checked=${0}
          @change=${0}
        ></ha-radio>
      </ha-formfield>

      <ha-md-select
        id="port-select"
        .label=${0}
        .value=${0}
        @change=${0}
        @closed=${0}
      >
        ${0}
      </ha-md-select>
    `),this.lcn.localize("port-type"),this.lcn.localize("output"),"output"===this._portType.id,this._portTypeChanged,this.lcn.localize("relay"),"relay"===this._portType.id,this._portTypeChanged,this.lcn.localize("regulator-lock"),"regulator-locks"===this._portType.id,this._portTypeChanged,this.lcn.localize("key-lock"),"key-locks"===this._portType.id,this._portTypeChanged,this._portType.name,this._port.value,this._portChanged,n.d,this._portType.value.map((e=>(0,s.qy)(c||(c=h`
            <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
          `),e.value,e.name)))):s.s6}_portTypeChanged(e){const t=e.target;this._portType=this._portTypes.find((e=>e.id===t.value)),this._port=this._portType.value[0],this.domainData.output=this._port.value}_portChanged(e){const t=e.target;-1!==t.selectedIndex&&(this._port=this._portType.value.find((e=>e.value===t.value)),this.domainData.output=this._port.value)}static get styles(){return[l.nA,(0,s.AH)(d||(d=h`
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
      `))]}constructor(...e){super(...e),this.domainData={output:"OUTPUT1"},this._keys=[{name:"A1",value:"A1"},{name:"A2",value:"A2"},{name:"A3",value:"A3"},{name:"A4",value:"A4"},{name:"A5",value:"A5"},{name:"A6",value:"A6"},{name:"A7",value:"A7"},{name:"A8",value:"A8"},{name:"B1",value:"B1"},{name:"B2",value:"B2"},{name:"B3",value:"B3"},{name:"B4",value:"B4"},{name:"B5",value:"B5"},{name:"B6",value:"B6"},{name:"B7",value:"B7"},{name:"B8",value:"B8"},{name:"C1",value:"C1"},{name:"C2",value:"C2"},{name:"C3",value:"C3"},{name:"C4",value:"C4"},{name:"C5",value:"C5"},{name:"C6",value:"C6"},{name:"C7",value:"C7"},{name:"C8",value:"C8"},{name:"D1",value:"D1"},{name:"D2",value:"D2"},{name:"D3",value:"D3"},{name:"D4",value:"D4"},{name:"D5",value:"D5"},{name:"D6",value:"D6"},{name:"D7",value:"D7"},{name:"D8",value:"D8"}]}}(0,i.__decorate)([(0,o.MZ)({attribute:!1})],u.prototype,"hass",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],u.prototype,"lcn",void 0),(0,i.__decorate)([(0,o.MZ)({attribute:!1})],u.prototype,"domainData",void 0),(0,i.__decorate)([(0,o.wk)()],u.prototype,"_portType",void 0),(0,i.__decorate)([(0,o.wk)()],u.prototype,"_port",void 0),(0,i.__decorate)([(0,o.P)("#port-select")],u.prototype,"_portSelect",void 0),u=(0,i.__decorate)([(0,o.EM)("lcn-config-switch-element")],u)},29344:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t),a.d(t,{CreateEntityDialog:function(){return E}});a(35748),a(65315),a(84136),a(37089),a(5934),a(95013);var s=a(69868),o=a(97809),l=a(38337),n=a(76943),r=(a(71291),a(22295),a(97401),a(73120)),c=a(84922),d=a(11991),h=a(72847),u=a(20674),m=a(83566),v=a(62862),p=(a(31578),a(68621),a(57135),a(25952),a(40468),a(72440),a(97782),a(47420)),_=e([n]);n=(_.then?(await _)():_)[0];let g,y,b,$,f,T,k,C,R,A,x,D=e=>e;class E extends c.WF{get _domains(){return[{name:this.lcn.localize("binary-sensor"),domain:"binary_sensor"},{name:this.lcn.localize("climate"),domain:"climate"},{name:this.lcn.localize("cover"),domain:"cover"},{name:this.lcn.localize("light"),domain:"light"},{name:this.lcn.localize("scene"),domain:"scene"},{name:this.lcn.localize("sensor"),domain:"sensor"},{name:this.lcn.localize("switch"),domain:"switch"}]}async showDialog(e){this._params=e,this.lcn=e.lcn,this._name="",this._invalid=!0,this._deviceConfig=e.deviceConfig,this._deviceConfig||(this._deviceConfig=this.deviceConfigs[0]),await this.updateComplete}render(){return this._params&&this.lcn&&this._deviceConfig?(0,c.qy)(g||(g=D`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        .heading=${0}
        @closed=${0}
      >
        <ha-md-select
          id="device-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>

        <ha-md-select
          id="domain-select"
          .label=${0}
          .value=${0}
          @change=${0}
          @closed=${0}
        >
          ${0}
        </ha-md-select>
        <ha-textfield
          id="name-input"
          label=${0}
          type="string"
          @input=${0}
        ></ha-textfield>

        ${0}

        <div class="buttons">
          <ha-button slot="secondaryAction" @click=${0}>
            ${0}</ha-button
          >
          <ha-button slot="primaryAction" .disabled=${0} @click=${0}>
            ${0}
          </ha-button>
        </div>
      </ha-dialog>
    `),(0,h.l)(this.hass,this.lcn.localize("dashboard-entities-dialog-create-title")),this._closeDialog,this.lcn.localize("device"),this._deviceConfig?(0,v.pD)(this._deviceConfig.address):void 0,this._deviceChanged,u.d,this.deviceConfigs.map((e=>(0,c.qy)(y||(y=D`
              <ha-md-select-option .value=${0}>
                <div class="primary">${0}</div>
                <div class="secondary">(${0})</div>
              </ha-md-select-option>
            `),(0,v.pD)(e.address),e.name,(0,v.s6)(e.address)))),this.lcn.localize("domain"),this.domain,this._domainChanged,u.d,this._domains.map((e=>(0,c.qy)(b||(b=D`
              <ha-md-select-option .value=${0}> ${0} </ha-md-select-option>
            `),e.domain,e.name))),this.lcn.localize("name"),this._nameChanged,this._renderDomain(this.domain),this._closeDialog,this.lcn.localize("dismiss"),this._invalid,this._create,this.lcn.localize("create")):c.s6}_renderDomain(e){if(!this._params||!this._deviceConfig)return c.s6;switch(e){case"binary_sensor":return(0,c.qy)($||($=D`<lcn-config-binary-sensor-element
          id="domain"
          .hass=${0}
          .lcn=${0}
        ></lcn-config-binary-sensor-element>`),this.hass,this.lcn);case"climate":return(0,c.qy)(f||(f=D`<lcn-config-climate-element
          id="domain"
          .hass=${0}
          .lcn=${0}
          .softwareSerial=${0}
          @validity-changed=${0}
        ></lcn-config-climate-element>`),this.hass,this.lcn,this._deviceConfig.software_serial,this._validityChanged);case"cover":return(0,c.qy)(T||(T=D`<lcn-config-cover-element
          id="domain"
          .hass=${0}
          .lcn=${0}
        ></lcn-config-cover-element>`),this.hass,this.lcn);case"light":return(0,c.qy)(k||(k=D`<lcn-config-light-element
          id="domain"
          .hass=${0}
          .lcn=${0}
          @validity-changed=${0}
        ></lcn-config-light-element>`),this.hass,this.lcn,this._validityChanged);case"scene":return(0,c.qy)(C||(C=D`<lcn-config-scene-element
          id="domain"
          .hass=${0}
          .lcn=${0}
          @validity-changed=${0}
        ></lcn-config-scene-element>`),this.hass,this.lcn,this._validityChanged);case"sensor":return(0,c.qy)(R||(R=D`<lcn-config-sensor-element
          id="domain"
          .hass=${0}
          .lcn=${0}
          .softwareSerial=${0}
        ></lcn-config-sensor-element>`),this.hass,this.lcn,this._deviceConfig.software_serial);case"switch":return(0,c.qy)(A||(A=D`<lcn-config-switch-element
          id="domain"
          .hass=${0}
          .lcn=${0}
        ></lcn-config-switch-element>`),this.hass,this.lcn);default:return c.s6}}_deviceChanged(e){const t=e.target,a=(0,v.d$)(t.value);this._deviceConfig=this.deviceConfigs.find((e=>e.address[0]===a[0]&&e.address[1]===a[1]&&e.address[2]===a[2]))}_nameChanged(e){const t=e.target;this._name=t.value,this._validityChanged(new CustomEvent("validity-changed",{detail:!this._name}))}_validityChanged(e){this._invalid=e.detail}async _create(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#domain"),a={name:this._name?this._name:this.domain,address:this._deviceConfig.address,domain:this.domain,domain_data:t.domainData};await this._params.createEntity(a)?this._closeDialog():await(0,p.K$)(this,{title:this.lcn.localize("dashboard-entities-dialog-add-alert-title"),text:`${this.lcn.localize("dashboard-entities-dialog-add-alert-text")}\n              ${this.lcn.localize("dashboard-entities-dialog-add-alert-hint")}`})}_closeDialog(){this._params=void 0,(0,r.r)(this,"dialog-closed",{dialog:this.localName})}_domainChanged(e){const t=e.target;this.domain=t.value}static get styles(){return[m.nA,(0,c.AH)(x||(x=D`
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
      `))]}constructor(...e){super(...e),this._name="",this.domain="binary_sensor",this._invalid=!0}}(0,s.__decorate)([(0,d.MZ)({attribute:!1})],E.prototype,"hass",void 0),(0,s.__decorate)([(0,d.MZ)({attribute:!1})],E.prototype,"lcn",void 0),(0,s.__decorate)([(0,d.wk)()],E.prototype,"_params",void 0),(0,s.__decorate)([(0,d.wk)()],E.prototype,"_name",void 0),(0,s.__decorate)([(0,d.wk)()],E.prototype,"domain",void 0),(0,s.__decorate)([(0,d.wk)()],E.prototype,"_invalid",void 0),(0,s.__decorate)([(0,d.wk)()],E.prototype,"_deviceConfig",void 0),(0,s.__decorate)([(0,d.wk)(),(0,o.Fg)({context:l.h,subscribe:!0})],E.prototype,"deviceConfigs",void 0),E=(0,s.__decorate)([(0,d.EM)("lcn-create-entity-dialog")],E),i()}catch(g){i(g)}}))}}]);
//# sourceMappingURL=929.ebd301cc9bf9b857.js.map