import React from "react";
import * as si from "simple-icons";

const iconStyle = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
};

const iconList = [
  si.siNpm,
  si.siYarn,
  si.siPipx,
  si.siDocker,
  si.siApachemaven,
  si.siGo,
  si.siNuget,
  si.siHomebrew,
  si.siRubygems,
  si.siGradle,
  si.siConan,
];

const BannerGenerator = ({
  rows,
  cols,
  textWidth,
}: {
  rows: number;
  cols: number;
  textWidth: number;
}) => {
  const getRandomIcon = () =>
    iconList[Math.floor(Math.random() * iconList.length)];

  const hexOpacity = ["33", "66", "99"];

  const getRandomColorWithOpacity = () => {
    const colors = ["#ffffff", "#61dafb"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = hexOpacity[Math.floor(Math.random() * hexOpacity.length)];
    return `${color}${opacity}`;
  };

  const midRowIndex = Math.floor(rows / 2);

  const renderIcon = () => {
    const icon = getRandomIcon();
    return (
      <div style={iconStyle}>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "100%",
            fill: getRandomColorWithOpacity(),
          }}
        >
          <path d={icon.path} />
        </svg>
      </div>
    );
  };

  const sideIconsCount = Math.floor((cols - textWidth) / 2);

  return (
    <div style={{ width: "100%", backgroundColor: "#008b8b", padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "10px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {rowIndex === midRowIndex ? (
              <>
                {Array.from({ length: sideIconsCount }).map((_, i) => (
                  <React.Fragment key={`left-${i}`}>
                    {renderIcon()}
                  </React.Fragment>
                ))}
                <div
                  style={{
                    gridColumn: `span ${textWidth}`,
                    color: "#e0ffff",
                    fontSize: "36px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "20px 0",
                    fontFamily: "fira code",
                  }}
                >
                  RegTool
                </div>
                {Array.from({ length: sideIconsCount }).map((_, i) => (
                  <React.Fragment key={`right-${i}`}>
                    {renderIcon()}
                  </React.Fragment>
                ))}
              </>
            ) : (
              Array.from({ length: cols }).map((_, colIndex) => (
                <React.Fragment key={colIndex}>{renderIcon()}</React.Fragment>
              ))
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BannerGenerator;
