//MyButton.js
import { LitElement, html, css } from 'lit-element';

export class MyButton extends LitElement {
  render() {
    return html`<button type="button">Click Me!</button>`;
  }

  static getStyles() {
    return css`
      button {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
    `;
  }
}