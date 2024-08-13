import { useEffect, useState } from "react";
import { Line } from "react-svg-curve";
import Box1 from "resources/spiderweb/1.png";
import Box2 from "resources/spiderweb/2.png";
import Box3 from "resources/spiderweb/3.png";
import Box4 from "resources/spiderweb/4.png";
import Box5 from "resources/spiderweb/5.png";
import Box6 from "resources/spiderweb/6.png";
import BigBox1 from "resources/spiderweb/b1.png";
import BigBox2 from "resources/spiderweb/b2.png";
import Main from "resources/spiderweb/main.svg";

function interpolate(point1, point2, i) {
  return [
    Math.floor(point1[0] + (point2[0] - point1[0]) * i),
    Math.floor(point1[1] + (point2[1] - point1[1]) * i),
  ];
}

const size = 300;
const p = size / 15;
const outersize = Math.floor(size * 1.8);
const r1 = Math.floor(0.189 * size);
const r2 = Math.floor(0.6 * size);
const rb = Math.floor(0.5 * size);
const ws = size / 6;
const wb = size / 3.75;
const mid = [Math.floor(outersize / 2), Math.floor(outersize / 2)];
const duration = 800;
const jumps = 100;

const smallBoxImages = [Box1, Box2, Box3, Box4, Box5, Box6];
const bigBoxImages = [BigBox1, BigBox2];

const smallBoxTexts = ["VR", "AR", "XR", "MR", "Game", "NR"];

const offsets = [
  [0, -0.5],
  [-0.2, -0.2],
  [-0.5, 0],
  [-1, -0.5],
  [-0.5, -1],
  [0, -1],
];

const bigBoxOffsets = [
  [-0.25, -0.5],
  [-0.75, -0.5],
];

const initialState = {
  smallBoxes: [1, 2, 3, 4, 5, 6].map(() => {
    return { pos: mid, opacity: 0 };
  }),
  bigBoxes: [1, 2].map(() => {
    return { pos: mid, opacity: 0 };
  }),
  lines: [1, 2, 3, 4, 5, 6].map(() => {
    return { start: mid, end: mid };
  }),
  i: 0,
};

const calculateSmallBoxState = (i, index) => {
  const angle = (index * Math.PI) / 3;
  const s1 = ws * offsets[index][0];
  const s2 = ws * offsets[index][1];
  const A1 = [mid[0] + r1 * Math.cos(angle), mid[1] + r1 * Math.sin(angle)];
  const A3 = [
    mid[0] + (r2 + p) * Math.cos(angle) + s1 * i,
    mid[1] + (r2 + p) * Math.sin(angle) + s2 * i,
  ];
  const pos = interpolate(A1, A3, i);
  return { pos, opacity: i };
};

const calculateLargeBoxState = (i, index) => {
  const angle = Math.PI * index - Math.PI / 6;
  const s1 = wb * bigBoxOffsets[index][0];
  const s2 = wb * bigBoxOffsets[index][1];
  const A1 = [mid[0] + r1 * Math.cos(angle), mid[1] + r1 * Math.sin(angle)];
  const A4 = [
    mid[0] + rb * Math.cos(angle) + s1,
    mid[1] + rb * Math.sin(angle) + s2,
  ];
  const pos = interpolate(A1, A4, i);
  return { pos, opacity: i };
};

const calculateLineState = (i, index) => {
  const angle = (index * Math.PI) / 3 - Math.PI / 6;
  const A1 = [mid[0] + r1 * Math.cos(angle), mid[1] + r1 * Math.sin(angle)];
  const A2 = [mid[0] + r2 * Math.cos(angle), mid[1] + r2 * Math.sin(angle)];
  const start = [Math.floor(A1[0]), Math.floor(A1[1])];
  const end = interpolate(A1, A2, i);
  return { start, end };
};

const calculateState = (i, jump = 0.01) => {
  const i1 = Math.min(i, 1);
  const i2 = Math.max(i - 2, 0);
  return {
    smallBoxes: [0, 1, 2, 3, 4, 5].map((index) =>
      calculateSmallBoxState(i1, index)
    ),
    bigBoxes: [0, 1].map((index) => calculateLargeBoxState(i2, index)),
    lines: [0, 1, 2, 3, 4, 5].map((index) => calculateLineState(i1, index)),
    i: i + jump,
  };
};

const SpiderwebAnimation = () => {
  const [animationData, setAnimationData] = useState(initialState);
  const [showSmallBoxTexts, setShowSmallBoxTexts] = useState(false);

  useEffect(() => {
    if (animationData.i < 3)
      setTimeout(
        () => setAnimationData(calculateState(animationData.i, 1 / jumps)),
        duration / jumps
      );
    if (animationData.i >= 1 && animationData.i <= 2 && !showSmallBoxTexts) {
      setShowSmallBoxTexts(true);
      setTimeout(() => setShowSmallBoxTexts(false), 5000);
    }
  }, [animationData]);

  const lines = animationData.lines;
  const smallBoxes = animationData.smallBoxes;
  const bigBoxes = animationData.bigBoxes;

  return (
    <div
      style={{ width: outersize, height: outersize }}
      className="justify-center items-center relative hidden lg:flex"
    >
      <img
        src={Main}
        alt=""
        style={{ width: size, height: size }}
        className=" object-fill"
      />
      <svg
        className="absolute z-10 pointer-events-none"
        style={{ width: outersize, height: outersize }}
      >
        {lines.map((line) => (
          <Line
            data={[line.start, line.end]}
            showPoints={false}
            strokeWidth={1}
            strokeDasharray="5"
            stroke="white"
          />
        ))}
      </svg>
      {smallBoxes.map((box, index) => (
        <div
          style={{
            width: ws,
            top: box.pos[0],
            left: box.pos[1],
            opacity: box.opacity,
          }}
          className="absolute z-50 cursor-pointer"
        >
          <img
            src={smallBoxImages[index]}
            alt=""
            style={{
              width: ws,
              height: ws,
            }}
          />
          <div
            className={`text-sm text-center text-black font-medium border border-black dark:!border-gray-400 dark:!text-white ${
              showSmallBoxTexts ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 bg-white dark:!bg-[#FF9900] rounded-md bg-opacity-60 mt-1`}
          >
            {smallBoxTexts[index]}
          </div>
        </div>
      ))}
      {bigBoxes.map((box, index) => (
        <div
          style={{
            width: wb,
            top: box.pos[0],
            left: box.pos[1],
            opacity: box.opacity,
          }}
          className="absolute z-50"
        >
          <img
            src={bigBoxImages[index]}
            alt=""
            style={{
              width: wb,
              height: wb,
            }}
          />
          <div className="text-white text-sm"></div>
        </div>
      ))}
    </div>
  );
};

export default SpiderwebAnimation;
