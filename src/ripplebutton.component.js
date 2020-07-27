import React,{ useState, useEffect } from "react";
import "./App.css";

const RippleButton = ({ buttonText, onClick, className, textStyle }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 700);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);
  const handleonClick = e => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    setCoords({ x, y });
    setTimeout(()=>{
      onClick && onClick(e);
    },300)
  }
  return (
    <div className="ripple-button">
    <button
      className={className}
      onClick={handleonClick}
    >
      {isRippling ? (
        <span
          className="ripplespan"
          style={{
            left: coords.x + 10,
            top: coords.y
          }}
        />
      ) : (
        ""
      )}
      <span className={textStyle}>{buttonText}</span>
    </button>
    </div>
  );
};



export default RippleButton;
