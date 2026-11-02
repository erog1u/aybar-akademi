import React from "react";

/**
 * Sıfır gecikme, saf donanım hızlandırmalı sayfa sarmalayıcısı.
 * JavaScript animasyon döngüsü çalıştırmaz; tıklamalar ve sayfa geçişleri anında gerçekleşir.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
