import { useState, useEffect } from "react";

function ErrorMsg(props) {
  const [showSizeErrors, setShowSizeErrors] = useState(false);
  const [showExtErrors, setShowExtErrors] = useState(false);

  useEffect(() => {
    if (props.data.sizeError.length > 0) {
      setShowSizeErrors(true);
      setTimeout(() => {
        setShowSizeErrors(false);
      }, 10000);
    }
    if (props.data.extError.length > 0) {
      setShowExtErrors(true);
      setTimeout(() => {
        setShowExtErrors(false);
      }, 10000);
    }
  }, [props.data.sizeError, props.data.extError]);

  function SizeErrors() {
    return props.data.sizeError.map((error, index) => (
      <div
        key={index}
        className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
        role="alert"
      >
        {error} is too big!
      </div>
    ));
  }

  function ExtErrors() {
    return props.data.extError.map((error, index) => (
      <div
        key={index}
        className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
        role="alert"
      >
        {error} has an invalid format! Try using one of these file types: jpg,
        jpeg, png, or gif.
      </div>
    ));
  }

  return (
    <>
      {showSizeErrors && <SizeErrors />}
      {showExtErrors && <ExtErrors />}
    </>
  );
}

export default ErrorMsg;
