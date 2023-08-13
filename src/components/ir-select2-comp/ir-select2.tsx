import { Component, Prop, h, Event, EventEmitter, State, Watch } from '@stencil/core';
import './ir-select2';
import 'select2';
import { selectOption } from '../../common/models';



@Component({
  tag: 'ir-select2',
})
export class IrSelect2 {

  @Prop() name: string;
  @Prop() data: selectOption[];
  @Prop() label = '<label>';
  @Prop({ reflect: true, mutable: true }) selectedValue = null;
  @Prop() required: boolean;
  @Prop() LabelAvailable: boolean = true;
  @Prop() firstOption: string = 'Select';
  @Prop() selectStyle: boolean = true;
  @Prop() submited: boolean = false;

  @State() initial: boolean = true;
  @State() valid: boolean = false;
  @Event() selectChange2: EventEmitter;

  

  selectElement: HTMLSelectElement;

  @Watch('selectedValue')
  watchHandler(newValue: string) {
    if (newValue !== null && this.required) {
      this.valid = true;
    }
  }

  @Watch('submited')
  watchHandler2(newValue: boolean) {
    if (newValue && this.required) {
      this.initial = false;
    }
  }

 // Inside IrSelect2 component class

componentDidLoad() {
  // Ensure the DOM and Select2 plugin are fully loaded
  if (this.selectElement) {
    // Initialize Select2 on the select element
    $(this.selectElement).select2();

    // Add change event listener
    $(this.selectElement).on('change', this.handleSelectChange.bind(this));
  }
}

  disconnectedCallback() {
    // Destroy the Select2 instance and clean up when the component is removed
    $(this.selectElement).select2('destroy');
  }

  handleSelectChange(event) {
    if (this.required) {
      this.initial = false;
      this.valid = event.target.checkValidity();
      this.selectedValue = event.target.value;
      this.selectChange2.emit(this.selectedValue);
    } else {
      this.selectedValue = event.target.value;
      this.selectChange2.emit(this.selectedValue);
    }
  }

  render() {
    let className = 'form-control';
    let label = (
      <div class="input-group-prepend">
        <label class="input-group-text">
          {this.label}
          {this.required ? '*' : ''}
        </label>
      </div>
    );

    if (this.selectStyle === false) {
      className = '';
    }

    if (this.required && !this.valid && !this.initial) {
      className = `${className} border-danger`;
    }

    if (!this.LabelAvailable) {
      label = '';
    }

    return (
      <div class="form-group">
        <div class="input-group">
          {label}
          <select
            class={className}
            ref={(el) => (this.selectElement = el)}
            required={this.required}
            onChange={(event) => (this.selectedValue = (event.target as HTMLSelectElement).value)}
          >
            <option value={null}>{this.firstOption}</option>
            {this.data.map((item) => (
              <option value={item.value}>{item.text}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
