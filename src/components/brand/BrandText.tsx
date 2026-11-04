import React from "react";

const BRAND = /AYBARİst((?:['’]\p{L}+)?(?: AKADEMİ(?:['’]\p{L}+)?)?)/gu;

function paint(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(BRAND)) {
    parts.push(text.slice(last, match.index));
    parts.push(
      <span key={match.index} className="brand-name normal-case">
        <span className="text-[#0044b5]">AYBAR</span>
        <span className="text-[#dc1b2e]">İst</span>
        <span className="text-[#0044b5]">{match[1]}</span>
      </span>
    );
    last = match.index + match[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

function walk(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") return paint(node);
  if (Array.isArray(node)) {
    return node.map((child, i) => <React.Fragment key={i}>{walk(child)}</React.Fragment>);
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node) && node.type === React.Fragment) {
    return walk(node.props.children);
  }
  return node;
}

/** Metindeki AYBARİst AKADEMİ adını marka renkleriyle yazar. Koyu zeminde üst öğeye brand-on-dark verilir, ad beyaz zeminde kalır. */
export default function BrandText({ children }: { children: React.ReactNode }) {
  return <>{walk(children)}</>;
}
