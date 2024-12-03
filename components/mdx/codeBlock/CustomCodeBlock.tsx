"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import CustomInlineCodeBlock from "./CustomInlineCodeBlock";

const CustomCodeBlock = (props: React.HTMLAttributes<HTMLElement>) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!props.className) {
    return <CustomInlineCodeBlock {...props} />;
  }

  return (
    <div className="max-w-content my-1 rounded bg-[#121212] text-[85%]">
      <pre
        className="custom-scrollbar-x "
        style={{
          backgroundColor: "transparent",
          margin: 0,
          padding: "32px 16px 32px 32px",
        }}
      >
        <code {...props} />
      </pre>
    </div>
  );
};

export default CustomCodeBlock;
