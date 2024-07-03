import React from "react";

function Curve({
  color,
  flipped,
  width,
  height,
  className,
  endingCount = 3,
  curveRef,
}) {
  const flipStyle = flipped ? { transform: "scaleX(-1)" } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 289 424"
      width={width}
      height={height}
      style={flipStyle}
      ref={curveRef}
      className={className}
    >
      {endingCount !== 1 && (
        <path
          d="M156.833 227C156.833 229.945 154.446 232.333 151.5 232.333C148.554 232.333 146.167 229.945 146.167 227C146.167 224.054 148.554 221.667 151.5 221.667C154.446 221.667 156.833 224.054 156.833 227ZM151.09 227.912C129.296 218.113 84.3417 180.488 77.5044 108.094L79.4956 107.906C86.2583 179.512 130.704 216.553 151.91 226.088L151.09 227.912ZM77.5044 108.094C74.1259 72.3211 60.6145 52.5439 45.2686 42.2684C29.8835 31.9666 12.4948 31.1062 1.20566 33.4786L0.794342 31.5213C12.5052 29.0604 30.4665 29.95 46.3814 40.6065C62.3355 51.2893 76.0741 71.6788 79.4956 107.906L77.5044 108.094Z"
          fill={color}
        />
      )}
      {endingCount !== 1 && (
        <path
          d="M156.833 227C156.833 224.055 154.446 221.667 151.5 221.667C148.554 221.667 146.167 224.055 146.167 227C146.167 229.946 148.554 232.333 151.5 232.333C154.446 232.333 156.833 229.946 156.833 227ZM151.09 226.088C129.296 235.887 84.3417 273.512 77.5044 345.906L79.4956 346.094C86.2583 274.488 130.704 237.447 151.91 227.912L151.09 226.088ZM77.5044 345.906C74.1259 381.679 60.6145 401.456 45.2686 411.732C29.8835 422.033 12.4948 422.894 1.20566 420.521L0.794342 422.479C12.5052 424.94 30.4665 424.05 46.3814 413.393C62.3355 402.711 76.0741 382.321 79.4956 346.094L77.5044 345.906Z"
          fill={color}
        />
      )}
      {endingCount !== 2 && (
        <path
          d="M156.833 227C156.833 229.946 154.446 232.333 151.5 232.333C148.554 232.333 146.167 229.946 146.167 227C146.167 224.054 148.554 221.667 151.5 221.667C154.446 221.667 156.833 224.054 156.833 227ZM151.5 228L4.5 228L4.5 226L151.5 226L151.5 228Z"
          fill={color}
        />
      )}
      <path
        d="M151.5 227H234.5C263.771 227 287.5 203.271 287.5 174V0"
        fill={"#ffffff00"}
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
}

export default Curve;
