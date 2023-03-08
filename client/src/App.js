import './App.css';
import React, { useState, useEffect } from 'react';
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout';
import { UploadOutlined } from '@ant-design/icons';
import { Table, Row, Col, Button, Upload, Space } from 'antd';
import axios from 'axios';
function App() {
  const columns = [
    {
      title: 'File Name',
      dataIndex: 'file_name',
      key: 'file_name',
    },
    // {
    //   title: 'Action',
    //   dataIndex: 'update',
    //   key: 'update',
    //   render: (text, record) => (
    //     <Button
    //       style={{ color: 'blue' }}
    //       onClick={(e) => {
    //         onUpdate(record.id, e);
    //       }}
    //     >
    //       Update
    //     </Button>
    //   ),
    // },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => (
        <Button
          style={{ color: 'red' }}
          onClick={(e) => {
            onDelete(record.id, e);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  const onDelete = async (key, e) => {
    e.preventDefault();
    console.log(key);
    const res = await axios.delete(`http://localhost:6868/api/uploads/${key}`);
    const newData = data.filter((item) => item.id !== key);
    setData(newData);
  };
  // const onUpdate = async (key, e) => {
  //   e.preventDefault();
  //   console.log(key);
  //   const res = await axios.update(`http://localhost:6868/api/uploads/${key}`);
  //   const newData = data.filter((item) => item.id !== key);
  //   setData(newData);
  // };
  const [data, setData] = useState([]);
  return (
    <Layout>
      <Header style={{ color: 'white' }}>List of Songs</Header>
      <Content style={{ padding: 50 }}>
        <Row>
          <Col span={4} />
          <Col span={18}>
            <Space style={{ marginBottom: 5 }}>
              <Upload showUploadList={false}>
                <Button icon={<UploadOutlined />}>Upload Music</Button>
              </Upload>
            </Space>
            <Table
              dataSource={data}
              columns={columns}
              rowKey={(record) => record.id}
            />
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
