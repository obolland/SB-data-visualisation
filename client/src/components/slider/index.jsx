import React from "react";
import RcSlider from "rc-slider";
import "./slider.styles.scss";
const RcRange = RcSlider.createSliderWithTooltip(RcSlider.Range);

const Slider = ({setSliderState, sliderState}) => {

  return (
    <div className="App">
      <RcRange
        onChange={(value) => {
          setSliderState({ value });
        }}
        tipFormatter={(value) => `${value}`}
        tipProps={{ visible: true }}
        defaultValue={sliderState.value}
        min={3}
        max={12}
      />
    </div>
  );
}

export default Slider;