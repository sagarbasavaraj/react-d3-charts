import React, {PropTypes} from 'react';

/*
  Base container.
  @param className class name to style the container.
  @param children elements that are injected inside this container.
*/
const Container = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className:PropTypes.string,
  children:PropTypes.any
}

export default Container;
