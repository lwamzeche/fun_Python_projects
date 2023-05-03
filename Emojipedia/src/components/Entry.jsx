import React from "react";

function Entry(probs) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {probs.emoji}
        </span>
        <span>{probs.name}</span>
      </dt>
      <dd>{probs.description}</dd>
    </div>
  );
}

export default Entry;
