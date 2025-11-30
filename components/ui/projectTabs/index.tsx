"use client";

import { useRef, useState } from "react";
import styles from "./style.module.css";

type Props = {
  count?: number;
};

export default function ProjectTabs({ count = 15 }: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // For drag / grab scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // ------------------ DRAG HANDLERS ------------------

  const handleMouseDown = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (!scrollRef.current) return;

    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (!isDown.current || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // ------------------ CLICK TO CENTER ------------------

  const handleClick = (index: number) => {
    setActive(index);

    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const button = container.children[index] as HTMLElement;

    if (!button) return;

    const containerCenter = container.offsetWidth / 2;
    const buttonCenter = button.offsetLeft + button.offsetWidth / 2;

    container.scrollTo({
      left: buttonCenter - containerCenter,
      behavior: "smooth",
    });
  };

  // ------------------ RENDER ------------------

  return (
    <div className={styles.projectTabsWrapper}>
      <ul
        ref={scrollRef}
        className={styles.projectTabs}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {Array.from({ length: count }).map((_, index) => (
          <li key={`project-${index}`} className={styles.tabItem}>
            <button
              className={`btn cursor-pointer my-5 ${
                active === index ? "btnPrimary" : "btnFilled"
              }`}
              onClick={() => handleClick(index)}
            >
              Project {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
