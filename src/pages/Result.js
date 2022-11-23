import React from "react";
import styled from "styled-components";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { LAYOUTS } from "../constant/layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Result(props) {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={LAYOUTS}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 2 }}
    >
      <div key="a">1</div>
      <div key="b">2</div>
      <div key="c">3</div>
    </ResponsiveGridLayout>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;
