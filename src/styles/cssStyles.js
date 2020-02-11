import { css } from "lit-element";

export const cssStyles = css`
  :host {
    --theme-color: #3eac47;
  }

  .wrapper {
    width: 76%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 800px) {
    .wrapper {
      width: 90%;
    }
  }
`;
