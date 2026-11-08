import React from "react";
import BrandText from "@/components/brand/BrandText";

// Paneldeki metinlerde **kalın** yazım desteklenir; marka adı her yerde renklendirilir.
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-bold text-ink">
            <BrandText>{part}</BrandText>
          </strong>
        ) : (
          <BrandText key={i}>{part}</BrandText>
        ),
      )}
    </>
  );
}
