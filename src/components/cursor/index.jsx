import React from "react";
import mouseEffect from "../../common/mouseEffect";
import Image from "next/image"
import bayc from "../../../public/img/portfolio/portfolio/Bayc/load.png"

const Cursor = () => {
  React.useEffect(() => {
    mouseEffect();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer">
        <Image
          className="rotationImg"
          src={bayc}
          alt="mouse image"
          width={100}
          height={100}
        >
        </Image>
      </div>
      <div className="mouse-cursor cursor-inner">
      </div>
    </>
  );
};

export default Cursor;
