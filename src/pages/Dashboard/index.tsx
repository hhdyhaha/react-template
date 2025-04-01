import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>仪表盘</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="活跃用户"
              value={1128}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="总销售额"
              value={93600}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix="¥"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="任务完成率"
              value={88.6}
              precision={2}
              valueStyle={{ color: '#1677ff' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 