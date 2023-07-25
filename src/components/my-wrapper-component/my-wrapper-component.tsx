import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-wrapper-component',
  shadow: true,
})
export class MyWrapperComponent {

  @State() count = 0;

  incrementCount = () => {
    this.count++;
  }

  render() {
    return (
      <div>
        <my-component onCustomclick={this.incrementCount}></my-component>
        <div class="count-display">{this.count}</div>
      </div>
    );
  }
}
