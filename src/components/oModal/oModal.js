import React  from 'react';
import { Modal  } from 'antd';
function OModal ({visible ,title ,okText,cancelText,children,...res }){

    return (
      <Modal
      title= {title}
      visible = {visible}
      okText = {okText}
      cancelText = {cancelText}
       {...res}
    >
       {children}
    </Modal>
    );

}

export default OModal;
