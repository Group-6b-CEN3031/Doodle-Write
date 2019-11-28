import {useEffect, useCallback} from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({ history }) {
  const innerFunction = useCallback(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  useEffect(() => {
      innerFunction();
  }, [innerFunction]);

  return (null);
}

export default withRouter(ScrollToTop);