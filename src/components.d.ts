/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { MyName as IonitronClippy } from './ionitron-clippy/ionitron-clippy';

interface HTMLIonitronClippyElement extends IonitronClippy, HTMLElement {
}
declare var HTMLIonitronClippyElement: {
  prototype: HTMLIonitronClippyElement;
  new (): HTMLIonitronClippyElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ionitron-clippy": HTMLIonitronClippyElement;
  }
  interface ElementTagNameMap {
      "ionitron-clippy": HTMLIonitronClippyElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ionitron-clippy": JSXElements.IonitronClippyAttributes;
      }
  }
  namespace JSXElements {
      export interface IonitronClippyAttributes extends HTMLAttributes {
        
          message?: string
      }
  }
}
