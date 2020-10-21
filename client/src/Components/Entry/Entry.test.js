import { React } from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Entry } from "./Entry";

describe('Entry component', () => {
  it('canary test that should pass', () => {
    expect(true).toBe(true);
  })
  it('canary test that should fail', () => {
    expect(true).toBe(false);
  })
});