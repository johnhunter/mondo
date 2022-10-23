import React from 'react';
import classNames from 'classnames';
import css from './Info.module.css';

const Info = ({ active = true, transient, error, children }) => {
  if (!active) {
    return null;
  }

  const attrs = {};

  if (error) {
    attrs.role = 'alert';
  }
  if (transient) {
    attrs['aria-live'] = 'polite';
  }

  return (
    <div
      open
      className={classNames(
        css.box,
        transient && css.transient,
        error && css.error
      )}
      {...attrs}
    >
      {children}
    </div>
  );
};

export default Info;
