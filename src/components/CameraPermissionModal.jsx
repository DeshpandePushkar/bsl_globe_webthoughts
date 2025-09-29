import React from 'react';
import { Modal, Button } from 'antd';

const CameraPermissionModal = ({ visible, onAllow, onDeny }) => {
  return (
    <Modal
      open={visible}
      onCancel={onDeny}
      footer={null}
      centered
      width={320}
      closable={false}
      maskClosable={false}
      style={{
        borderRadius: '12px'
      }}
      styles={{
        body: {
          padding: '24px',
          textAlign: 'center'
        }
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          lineHeight: '1.4',
          marginBottom: '8px'
        }}>
          Allow <span style={{ fontWeight: '400' }}>simreg.globe.com.ph</span> to use your camera?
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '12px',
        justifyContent: 'center'
      }}>
        <Button
          onClick={onDeny}
          style={{
            backgroundColor: '#f5f5f5',
            borderColor: '#d9d9d9',
            color: '#666',
            borderRadius: '8px',
            height: '40px',
            fontSize: '16px',
            fontWeight: '500',
            minWidth: '100px',
            flex: 1
          }}
        >
          Don't allow
        </Button>
        
        <Button
          type="primary"
          onClick={onAllow}
          style={{
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
            borderRadius: '8px',
            height: '40px',
            fontSize: '16px',
            fontWeight: '500',
            minWidth: '100px',
            flex: 1
          }}
        >
          Allow
        </Button>
      </div>
    </Modal>
  );
};

export default CameraPermissionModal;
