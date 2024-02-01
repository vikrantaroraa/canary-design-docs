import React, { useRef } from "react";
import { Tour, TourData } from "canary-design";

const tourData: TourData[] = [
  {
    step: "1",
    content: "Hey, this is a span tag.",
    popupPosition: "right",
  },
  {
    step: "2",
    content: "I am the content for this span.",
    popupPosition: "bottom",
  },
  {
    step: "3",
    content: "And now, we are at the bottom of the page.",
    popupPosition: "top",
  },
  {
    step: "4",
    content: "Yayy! we are again at the top!",
    popupPosition: "left",
  },
  {
    step: "5",
    content: "This is the content of span 5.",
    popupPosition: "right",
  },
  {
    step: "6",
    content: "And i explain more about this span.",
    popupPosition: "top",
  },
];

const ExampleTour = () => {
  const tourRefAndStartButtonRef = useRef([]);
  const spanStyle: React.CSSProperties = {
    width: "fit-content",
  };

  const startTourButtonStyle: React.CSSProperties = {
    cursor: "pointer",
    width: "fit-content",
    padding: "8px 10px",
    borderRadius: "3px",
    border: "1px solid",
    margin: "auto",
  };

  const mainContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const allFocusableSpansContainerStyle: React.CSSProperties = {
    display: "flex",
    marginBottom: 60,
  };

  const spanContainerStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "45vh",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };

  // Note1:- if we don't use the following if condition then we will get an error when the component is unmounted.
  // Because the tourRefAndStartButtonRef will still try to assign the button at the 0th index of the array and
  // since component is unmounted, we will get an error "TypeError: Cannot set properties of null (setting '0')"

  // Note2:- We could have directly passed "ref={(thisElement) => (tourRefAndStartButtonRef?.current[0] =
  // thisElement)}" to the button itself, but if we do so, then because of the "?" that is used just after the
  // "tourRefAndStartButtonRef" for conditionally passing the ref, we will get an error "Support for the experimental
  // syntax 'optionalChainingAssign' isn't currently enabled". Hence we have used an "if" condition by creating a
  // new function "passRefConditionally".
  const passRefConditionally = (thisElement: HTMLButtonElement) => {
    if (tourRefAndStartButtonRef.current) {
      tourRefAndStartButtonRef.current[0] = thisElement;
    }
  };

  return (
    <Tour data={tourData} ref={tourRefAndStartButtonRef}>
      <div style={mainContainerStyle}>
        <div style={allFocusableSpansContainerStyle}>
          <div style={spanContainerStyle}>
            <span id="id1" style={spanStyle} data-step="1">
              Hello - 1
            </span>
            <span id="id2" style={spanStyle} data-step="2">
              Hello - 2
            </span>
            <span id="id3" style={spanStyle} data-step="3">
              Hello - 3
            </span>
          </div>
          <div style={spanContainerStyle}>
            <span id="id4" style={spanStyle} data-step="4">
              Hello - 4
            </span>
            <span id="id4" style={spanStyle} data-step="5">
              Hello - 5
            </span>
            <span id="id4" style={spanStyle} data-step="6">
              Hello - 6
            </span>
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button
            style={startTourButtonStyle}
            // here we are getting the current property of ref which is an array i.e tourRefAndStartButtonRef.current
            // is an array and then with "tourRefAndStartButtonRef?.current.length - 1" we are selecting the last
            // element of that array which is an object which has the "startTourAndDisableButton" function exposed
            // by the useImperativeHandle hook.
            onClick={() => {
              tourRefAndStartButtonRef?.current[
                tourRefAndStartButtonRef?.current.length - 1
              ].startTourAndDisableButton();
            }}
            ref={(thisElement) => passRefConditionally(thisElement)}
          >
            Start Tour
          </button>
        </div>
      </div>
    </Tour>
  );
};

export { ExampleTour };
