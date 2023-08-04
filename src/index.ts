import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
export class SimpleGreeting extends LitElement {
  @property() public count = 0;

  @property() private Hours = [1,2,3,4,5,6,7,8,9,10,11,12];

  @property() private minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

  @property() private seconds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

  static styles = css`
      .timePickerContainer {
        display:flex;
        flex-direction:row;
      }
      .columnContainer {
        display:flex;
        flex-direction:column;
      }
      .timeTypography {
        color: #8E9192;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 24px;
      }
      .timeContainer {
        display: flex;
width: 44px;
height: 44px;
padding: 12px 14px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
      }
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  `;

  render() {
    return html`
    <div class="timePickerContainer">
    <div class="columnContainer">
      ${this.Hours.slice(0, 5).map(hour => html` <div class='timeContainer'><span class='timeTypography'>${hour < 10 ? `0${hour}`: hour}</span></div>` )}
    </div>
     <div class="columnContainer">
      ${this.minutes.slice(0, 5).map(minutes => html` <div class='timeContainer'><span class='timeTypography'>${minutes < 10 ? `0${minutes}`: minutes}</span></div>` )}
    </div>
     <div class="columnContainer">
      ${this.seconds.slice(0, 5).map(seconds => html` <div class='timeContainer'><span class='timeTypography'>${seconds < 10 ? `0${seconds}`: seconds}</span></div>` )}
    </div>
    </div>
    `;
  }
}
