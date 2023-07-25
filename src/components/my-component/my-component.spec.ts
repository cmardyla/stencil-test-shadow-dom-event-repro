import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('emits a customclick event when clicked', async () => {
    const specPage = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    const component = specPage.root;

    const eventSpy = jest.fn();
    component.addEventListener("customclick", eventSpy);

    const button = component.shadowRoot.querySelector("button");
    button.click();

    specPage.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });
});
