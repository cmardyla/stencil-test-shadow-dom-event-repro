import { newE2EPage } from '@stencil/core/testing';

describe('my-wrapper-component', () => {
  it('emits the `customclick` emitted by my-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-wrapper-component></my-wrapper-component>');

    const wrapperComponent = await page.find('my-wrapper-component');
    const eventSpy = await wrapperComponent.spyOnEvent("customclick");

    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("0");

    await page.$eval("my-wrapper-component", (element) => {
      const component = element.shadowRoot.querySelector("my-component");
      component.dispatchEvent(new CustomEvent("customclick"));
    });

    await page.waitForChanges();

    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("1"); // passes
    expect(eventSpy).toHaveReceivedEventTimes(1); // fails, spy was never called
  });
});
