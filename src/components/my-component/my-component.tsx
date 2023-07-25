import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {

  @Event({ eventName: "customclick" }) customClick: EventEmitter;

  handleCustomClick = () => {
    this.customClick.emit();
  }

  render() {
    return <button onClick={this.handleCustomClick}>I emit a custom event when clicked</button>;
  }
}
