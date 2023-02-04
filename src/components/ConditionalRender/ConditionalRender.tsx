import React from "react";

interface IConditionalRenderProps {
  controller: boolean;
  components: [React.ReactNode, React.ReactNode];
}

export const ConditionalRender = ({
  controller,
  components,
}: IConditionalRenderProps) => {
  return components.map((component, index) => {
    Number(controller) !== index && component;
  });
};
