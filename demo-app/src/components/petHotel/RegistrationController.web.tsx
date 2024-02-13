import { render } from "@testing-library/react";
import React from "react";
export interface Props {
    // id: string;
  }

export interface S {
    confirmPassword: string;
    password: string;
    showPassword: boolean;
    checkboxTrue: boolean;
    email: string;
    checkboxChecked: boolean;
    showYourPassword: boolean;
  }

export interface SS {
    id: string;
  }
export default class RegistrationController extends React.Component<
    Props,
    S,
    SS
>{
    constructor(props: Props) {
        super(props);
        this.state = {
            confirmPassword: "",
            showPassword: false,
            showYourPassword: false,
            checkboxChecked: false,
            email: "",
            password: "",
            checkboxTrue: false,
          };
    }
}