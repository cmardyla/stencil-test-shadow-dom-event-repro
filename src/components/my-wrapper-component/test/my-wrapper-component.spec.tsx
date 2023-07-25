import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from '../../my-component/my-component';
import { MyWrapperComponent } from '../my-wrapper-component';

describe('my-wrapper-component', () => {
  it('emits the `customclick` emitted by my-component', async () => {
    const page = await newSpecPage({
      components: [MyWrapperComponent, MyComponent],
      html: `<my-wrapper-component></my-wrapper-component>`,
    });
    const wrapperComponent = page.root;
    const eventSpy = jest.fn();
    wrapperComponent.addEventListener("customclick", eventSpy);
    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("0");

    const innerComponent = wrapperComponent.shadowRoot.querySelector("my-component");
    innerComponent.dispatchEvent(new CustomEvent("customclick", { bubbles: true, composed: true}));

    await page.waitForChanges();

    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("1"); // passes
    expect(eventSpy).toHaveBeenCalled(); // fails, spy is never called
  });

  it('emits a `customclick` event when the my-component button is clicked', async () => {
    const page = await newSpecPage({
      components: [MyWrapperComponent, MyComponent],
      html: `<my-wrapper-component></my-wrapper-component>`,
    });
    const wrapperComponent = page.root;
    const eventSpy = jest.fn();
    wrapperComponent.addEventListener("customclick", eventSpy);
    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("0");

    const innerComponentButton = wrapperComponent.shadowRoot.querySelector("my-component").shadowRoot.querySelector("button");
    innerComponentButton.click();

    await page.waitForChanges();

    expect(wrapperComponent.shadowRoot.querySelector(".count-display").innerHTML).toBe("1"); // passes
    expect(eventSpy).toHaveBeenCalled(); // fails, spy is never called
  });
});
