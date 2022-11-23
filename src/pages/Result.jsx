import React from "react";
import styled from "styled-components";
import { Responsive, WidthProvider } from "react-grid-layout";
import { LAYOUTS } from "../constant/layout";
import { AnswerBlock } from "../components/Result/AnswerBlock";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Result(props) {
  return (
    <Container>
      <ResponsiveGridLayout
        className="layout"
        layouts={LAYOUTS}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 2 }}
        margin={[16, 13]}
        containerPadding={[20, 20]}
      >
        {LAYOUTS.lg.map((el) => (
          <AnswerBlock key={el.i} datakey={el.i} />
        ))}
      </ResponsiveGridLayout>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;
