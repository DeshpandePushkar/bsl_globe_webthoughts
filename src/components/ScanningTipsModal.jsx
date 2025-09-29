import React from 'react';
import { Modal, Button, List } from 'antd';
import { 
  UserOutlined,
  FileTextOutlined,
  SunOutlined,
  UserOutlined as PersonOutlined,
  FontSizeOutlined,
  BulbOutlined,
  CameraOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

const ScanningTipsModal = ({ visible, onClose }) => {
  const guidelines = [
    {
      icon: <UserOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "No fingers or obstructions on document"
    },
    {
      icon: <FileTextOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "No scratches, smudges or dust"
    },
    {
      icon: <SunOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "No glare, reflections or shadows"
    },
    {
      icon: <PersonOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "Well-lit subject"
    },
    {
      icon: <FontSizeOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "Clear and legible text"
    },
    {
      icon: <BulbOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "Good contrast and brightness"
    },
    {
      icon: <CameraOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "Sharp focus, crisp details"
    },
    {
      icon: <InfoCircleOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      text: "Please do not refresh the page, click the back button, or close the window during registration."
    }
  ];

  return (
    <Modal
      title={
        <div style={{ 
          color: '#1A458B', 
          fontSize: '18px', 
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Scanning tips
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      style={{
        top: '20px'
      }}
      styles={{
        body: {
          padding: '24px',
          textAlign: 'center'
        },
        header: {
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 24px'
        }
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <p style={{ 
          color: '#666', 
          fontSize: '14px',
          margin: '0 0 20px 0',
          lineHeight: '1.4'
        }}>
          To ensure your ID document is clear and legible, follow these guidelines.
        </p>
        
        <List
          dataSource={guidelines}
          renderItem={(item, index) => (
            <List.Item style={{ 
              padding: '8px 0', 
              border: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}>
              <div style={{ 
                marginRight: '12px', 
                marginTop: '2px', 
                minWidth: '24px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <span style={{ 
                color: '#333', 
                fontSize: '14px',
                lineHeight: '1.4',
                flex: 1,
                textAlign: 'left'
              }}>
                {item.text}
              </span>
            </List.Item>
          )}
        />
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          type="primary"
          onClick={onClose}
          style={{
            backgroundColor: '#2274E5',
            borderColor: '#2274E5',
            borderRadius: '6px',
            height: '40px',
            fontSize: '16px',
            fontWeight: '500',
            minWidth: '80px',
            boxShadow: '0 2px 4px rgba(34, 116, 229, 0.2)'
          }}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ScanningTipsModal;
