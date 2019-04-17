import React  from 'react';
import { Modal  } from 'antd';
function OModal ({visible ,title ,children,...res }){

    return (
      <Modal
      title= {title}
      visible = {visible}
       {...res}
    >
       {children}
    </Modal>
    );

}

export default OModal;
