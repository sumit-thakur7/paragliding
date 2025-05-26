import React, { useEffect, useState, useRef } from "react";
import Icon from "../../../attached_assets/icons.png";

export default function CursorIcon() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adjustedPosition, setAdjustedPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<"left" | "right" | "up" | "down">("right");
  const [isSpinning, setIsSpinning] = useState(false);

  const prevPos = useRef({ x: 0, y: 0 });
  const iconSize = 150;
  const offset = 10;
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        setDirection(dx > 0 ? "right" : "left");
      } else {
        setDirection(dy > 0 ? "down" : "up");
      }

      let adjustedX = x + offset;
      let adjustedY = y + offset;

      if (x + iconSize + offset > windowWidth) {
        adjustedX = x - iconSize - offset;
      }
      if (y + iconSize + offset > windowHeight) {
        adjustedY = y - iconSize - offset;
      }

      setPosition({ x, y });
      setAdjustedPosition({ x: adjustedX, y: adjustedY });

      prevPos.current = { x, y };

      setIsSpinning(false);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);

      idleTimeout.current = setTimeout(() => {
        setIsSpinning(true);
      }, 2000);
    };
    

    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  const transform = (() => {
    switch (direction) {
      case "left":
        return "scaleX(-1)";
      case "up":
        return "rotate(-90deg)";
      case "down":
        return "rotate(90deg)";
      default:
        return "none";
    }
  })();

  return (
    <img
      src={Icon}
      alt="cursor gif"
      className={`fixed z-50 pointer-events-none transition-all duration-100 ease-linear ${
        isSpinning ? "animate-spin-slow" : ""
      }`}
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        transform,
        width: "100px",
        height: "150px",
      }}
    />
  );
}


// import React, { useEffect, useRef } from "react";
// import Icon from "../../../attached_assets/icons.png";

// export default function CursorIcon() {
//   const iconRef = useRef(null);
//   const prevPos = useRef({ x: 0, y: 0 });
//   const directionRef = useRef("right");
//   const isSpinningRef = useRef(false);
//   const idleTimeout = useRef(null);

//   const iconSize = 150;
//   const offset = 10;

//   useEffect(() => {
//     const moveHandler = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       const windowWidth = window.innerWidth;
//       const windowHeight = window.innerHeight;

//       // Calculate direction
//       const dx = x - prevPos.current.x;
//       const dy = y - prevPos.current.y;

//       if (Math.abs(dx) > Math.abs(dy)) {
//         directionRef.current = dx > 0 ? "right" : "left";
//       } else {
//         directionRef.current = dy > 0 ? "down" : "up";
//       }

//       // Adjust position to avoid going out of bounds
//       let adjustedX = x + offset;
//       let adjustedY = y + offset;

//       if (x + iconSize + offset > windowWidth) {
//         adjustedX = x - iconSize - offset;
//       }
//       if (y + iconSize + offset > windowHeight) {
//         adjustedY = y - iconSize - offset;
//       }

//       // Directly update the icon's position using ref
//       if (iconRef.current) {
//         iconRef.current.style.left = `${adjustedX}px`;
//         iconRef.current.style.top = `${adjustedY}px`;

//         // Update transform based on direction
//         let transform = "";
//         switch (directionRef.current) {
//           case "left":
//             transform = "scaleX(-1)";
//             break;
//           case "up":
//             transform = "rotate(-90deg)";
//             break;
//           case "down":
//             transform = "rotate(90deg)";
//             break;
//           default:
//             transform = "none";
//         }
//         iconRef.current.style.transform = transform;
//       }

//       prevPos.current = { x, y };

//       // Handle idle spinning
//       isSpinningRef.current = false;
//       if (iconRef.current) {
//         iconRef.current.classList.remove("animate-spin-slow");
//       }

//       if (idleTimeout.current) clearTimeout(idleTimeout.current);

//       idleTimeout.current = setTimeout(() => {
//         isSpinningRef.current = true;
//         if (iconRef.current) {
//           iconRef.current.classList.add("animate-spin-slow");
//         }
//       }, 2000);
//     };

//     window.addEventListener("mousemove", moveHandler);
//     return () => {
//       window.removeEventListener("mousemove", moveHandler);
//       if (idleTimeout.current) clearTimeout(idleTimeout.current);
//     };
//   }, []);

//   return (
//     <img
//       ref={iconRef}
//       src={Icon}
//       alt="cursor gif"
//       className="fixed z-50 pointer-events-none"
//       style={{
//         width: "100px",
//         height: "150px",
//       }}
//     />
//   );
// }