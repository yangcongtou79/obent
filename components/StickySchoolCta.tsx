"use client";

import { useEffect, useState } from "react";

interface Props {
  tableId: string;
  earlyViewId: string;
}

export default function StickySchoolCta({ tableId, earlyViewId }: Props) {
  const [visible, setVisible] = useState(false);
  const [hideNearTable, setHideNearTable] = useState(false);

  useEffect(() => {
    const earlyEl = document.getElementById(earlyViewId);
    const tableEl = document.getElementById(tableId);

    const obsEarly = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0 }
    );
    const obsTable = new IntersectionObserver(
      ([e]) => setHideNearTable(e.isIntersecting),
      { threshold: 0.1 }
    );

    if (earlyEl) obsEarly.observe(earlyEl);
    if (tableEl) obsTable.observe(tableEl);

    return () => {
      obsEarly.disconnect();
      obsTable.disconnect();
    };
  }, [tableId, earlyViewId]);

  const show = visible && !hideNearTable;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#fff",
        borderTop: "1px solid #D9D9D9",
        padding: "10px 16px",
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.25s ease",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <a
        href="#compare-table"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          width: "100%",
          height: 48,
          backgroundColor: "#1E4D80",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        3校を比べる表を見る
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
