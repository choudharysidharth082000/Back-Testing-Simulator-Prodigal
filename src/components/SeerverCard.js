import React from "react";

const SeerverCard = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className={`card-1 max-w-25 max-h-25 bg-white cursor-pointer ${isClicked ? "cardCustom" : ""}`} onClick={()=>
    {
      isClicked ? setIsClicked(false) : setIsClicked(true)
    }}>
      <div className="containor w-100 h-100">
        <img
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SeerverCard;
