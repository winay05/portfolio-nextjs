import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 1rem 0;
  position: relative;
  display: flex;

  .header-list {
    @media screen and (max-width: 767px) {
      display: none;
      margin-left: 0;
      flex-direction: column;
    }
    &.open {
      display: initial !important;
      height: 100vh;
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
      position: fixed;
      top: inherit;
      left: 0;
      padding-top: 1.5rem;
    }
    &__item {
      font-size: 1.25rem;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background: rgba(220, 220, 220, 0.9);
      }
      padding: 0.5rem 0.5rem;
      @media screen and (max-width: 767px) {
        width: 100%;
        padding: 0.5rem 1rem;
      }
    }
    display: flex;
    margin-left: auto;
    list-style: none;
    gap: 1rem;
  }
  button.nav-toggle {
    @media screen and (min-width: 768px) {
      display: none;
    }
    cursor: pointer;
    border: none;
    position: absolute;
    right: 0;
    top: 1rem;
    background: transparent;

    .hamburger {
      position: relative;
      display: inline-block;
      width: 1rem;
      height: 3px;
      background: black;
      ::before,
      ::after {
        position: absolute;
        content: "";
        height: 3px;
        width: 1rem;
        background: black;
        top: -5px;
        left: 0;
        transition: all 0.3s;
      }
      ::after {
        top: 5px;
      }
      &.open {
        height: auto;
        ::before {
          transform: rotate(-45deg);
          top: 0;
        }
        ::after {
          transform: rotate(45deg);
          top: 0;
        }
      }
    }
  }
`;
