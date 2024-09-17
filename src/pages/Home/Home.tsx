import { Timer } from "components";

export const Home = () => {
  return (
    <>
      Home

      <Timer />

      {/** Test displaying images converted in base64 beforehand */}
      <img height="25px" width="30px" alt="Alitheian Bidoof" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAACXBIWXMAAAsSAAALEgHS3X78AAABCElEQVR42u2WPQ7CMAyFczE2Ni7ABViYWdgYuAM3QOIOTBW5BZdAMCfoVXqVsZLGMggGWslq05/3+Tmp2xByCD+JCTyBLbGYzTNDj3nOBS6J6uv32yN3l2t/DXuMEW4wHtxtj4NILXCPBGJchVrBECSc4oTtN6sXOIPPuBzrstEJz1EYcJnAW6WmCATpVCch3eO+8+kwJMAEXWDCZJTcS9dMwDXHWkiCZSnlPJZcu8FpvezFZQI8LrlGAIwYhVocQ1y7l+XWU9JsHNbFxVeG5dOLS5afZW/ObwuMje51o9AwU5u0gmOMOaU02rFk4zBDLQ1Elq91/NGvU6mENedf/Sy6oNMfyF+An0b2VSpsfQ86AAAAAElFTkSuQmCC" />
    </>
  );
};