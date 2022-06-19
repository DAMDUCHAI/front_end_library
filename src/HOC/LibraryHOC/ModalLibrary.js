
import { Button, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
export default function ModalLibrary() {
    const dispatch=useDispatch()

    const {visibleModal, ComponentContenModal,title } =useSelector(state => state.modalLibraryReducers);

  return (
    <>
    <Modal
      title={title}
      centered
      visible={visibleModal}
      onOk={() =>    dispatch({
            type:'CLOSE_MODAL'
        })}
      onCancel={() =>    dispatch({
            type:'CLOSE_MODAL'
        })}
      width={1000}
    >
 {ComponentContenModal}
    </Modal>
  </>
  )
}



