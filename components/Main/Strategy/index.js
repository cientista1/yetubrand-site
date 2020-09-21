import React from "react";
import { Content, Block, Title } from "./styles";
function Strategy() {
  return (
      <Content className="content">
        <Block>
          <img src="/static/images/strategy-1.png" alt="" />
          <Title> Strategy </Title>
          <p>We'll work with you to develop the right strategy</p>
        </Block>
        <Block>
          <img src="/static/images/strategy-2.png" alt="" />
          <Title> Automation </Title>
          <p>Work synchronization and automated services</p>
        </Block>
        <Block>
          <img src="/static/images/strategy-3.png" alt="" />
          <Title> Deployment </Title>
          <p>Dedicated servers to deploy and test applications</p>
        </Block>
        <Block>
          <img src="/static/images/strategy-4.png" alt="" />
          <Title> Education </Title>
          <p>Stay informed on all our tools and technologies</p>
        </Block>
      </Content>
  );
}

export default Strategy;
