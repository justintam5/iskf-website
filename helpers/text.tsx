import React from "react";

export const MultiLineText = ({ text }: { text: string }) => {
  return text.split("\n").map((line, index) => (
    <div className="pb-3" key={index}>
      {line}
    </div>
  ));
};
