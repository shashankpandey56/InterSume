import { React, useState } from "react";
import "../style.css";

export function ServiceSection({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const myFunction = () => {
    setExpanded(!expanded);
  };

  const createMarkup = () => {
    return { __html: content.replace(/\n/g, "<br /><br/>") };
  };

  const contentStyle = `overflow-hidden pv2 ph3 ${expanded ? "db" : "dn"}`;

  return (
    <div>
      <button
        type="button"
        onClick={myFunction}
        className="collapsible pointer"
      >
        {title}
        <hr />
      </button>
      <div className={contentStyle}>
        <div
          className="paraClass"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
}
