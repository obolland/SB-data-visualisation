import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Slider from '../slider';

const FilterModal = ({buttonLabel, setSliderState, sliderState}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Filter By Year Group</ModalHeader>
        <ModalBody>
          <p className="mb-5">Drag Slider to select range of year groups</p>
           <Slider setSliderState={setSliderState} sliderState={sliderState}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default FilterModal;