import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import css from './Info.module.css';

interface InfoProps {
  active?: boolean;
  transient?: boolean;
  error?: boolean;
  children?: ReactNode;
}

const Info: FC<InfoProps> = ({ active = true, transient, error, children }) => {
  if (!active) {
    return null;
  }

  const attrs = {} as HTMLAttributes<HTMLDivElement>;

  if (error) {
    attrs.role = 'alert';
  }
  if (transient) {
    attrs.role = 'status';
  }

  return (
    <div
      className={classNames(
        css.box,
        transient && css.transient,
        error && css.error,
      )}
      {...attrs}
    >
      {children}
    </div>
  );
};

export default Info;
