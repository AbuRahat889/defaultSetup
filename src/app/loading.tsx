import React from "react";

const HandLoader = () => {
  return (
    <div className="loading">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`finger finger${i}`}>
          <div className="fingerItem">
            <span></span>
            <i></i>
          </div>
        </div>
      ))}
      <div className="lastFinger">
        <div className="lastFingerItem">
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default HandLoader;
