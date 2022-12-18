import React from 'react';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';

class Alert {
  _ref: React.RefObject<DropdownAlert>;

  constructor() {
    this._ref = React.createRef();
  }

  private show = (
    type: DropdownAlertType,
    title: string,
    message: string = '',
  ) => {
    title = title.charAt(0).toUpperCase() + title.slice(1);
    message = message.charAt(0).toUpperCase() + message.slice(1);
    this._ref.current?.alertWithType(type, title, message);
  };

  hide = () => {
    this._ref.current?.closeAction();
  };
  info = (title: string, message: string = '') => {
    this.show('info', title, message);
  };

  error = (title: string, error: unknown) => {
    if (error instanceof Error) {
      return this.show('custom', title, error.message);
    } else if (typeof error === 'string') {
      return this.show('custom', title, error);
    } else {
      this.show('custom', title, 'Unknown error');
    }
  };
  success = (title: string, message: string = '') => {
    this.show('success', title, message);
    if (__DEV__) {
      console.info([title, message].join(' ').trim());
    }
  };
}

export default new Alert();
