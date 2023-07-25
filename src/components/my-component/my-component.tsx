import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {

  // According to https://stenciljs.com/docs/events `bubbles` and `composed` should default to true,
  // but explicitly setting them here just in case
  @Event({ eventName: "customclick", bubbles: true, composed: true }) customClick: EventEmitter;

  handleCustomClick = () => {
    this.customClick.emit();
  }

  render() {
    return <button onClick={this.handleCustomClick}>I emit a custom event when clicked</button>;
  }
}
