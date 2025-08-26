---
category: portfolio
title: React.lazy 를 활용한 코드 스플리팅으로 초기 번들 사이즈 30% 감소
date: 2025-08-24
description: 레이지 로딩, 코드 스플리팅을 적용하여 초기 번들 사이즈를 줄인 경험을 정리했습니다
---

> 레이지 로딩, 코드 스플리팅을 적용하여 초기 번들 사이즈를 줄인 경험을 정리했습니다

앱의 기능이 추가되고, 사용하는 라이브러리가 많아지면서 초기 번들 사이즈가 커지며 로딩 지연이 발생하는 것이 체감됐습니다. 그래서 코드 스플리팅을 적용하여 최초 진입 시 필요한 리소스만 로드하게 했습니다.

- 앱의 진입점인 `main.tsx` 예시

```tsx
// main.tsx
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";

// ...

// 페이지 컴포넌트 lazy loading
const Sample1Page = lazy(() => import("./pages/Sample1Page.tsx"));
const Sample2Page = lazy(() => import("./pages/Sample2Page.tsx"));
const Sample3Page = lazy(() => import("./pages/Sample3Page.tsx"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      {/* ... */}
      {/* 모든 페이지 컴포넌트가 로딩중일 때 표시할 fallback UI 전달 */}
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="/sample1" element={<Sample1Page />} />
            <Route path="/sample2" element={<Sample2Page />} />
            <Route path="/sample3" element={<Sample3Page />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      {/* ... */}
    </StrictMode>
  )
);
```

또한 렌더링이 오래 걸리는 컴포넌트(예: React Three Fiber의 `<Canvas>`)를 렌더링할 때도 레이지 로딩을 적용하여 사용하기 직전에 로딩하고, 로딩 시 fallback UI를 렌더링하여 사용자 경험을 개선했습니다.

- Suspense Wrapper 컴포넌트 `LazyComponent.tsx` 예시

```tsx
import { Suspense } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

interface LazyComponentProps {
  component: LazyExoticComponent<ComponentType>;
  fallback?: React.ReactNode;
}

export default function LazyComponent({ component: Component, fallback = <div>Loading...</div> }: LazyComponentProps) {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}
```

- 사용 예시

```tsx
import { lazy, useState } from "react";
import LazyComponent from "../base/LazyComponent";

// ...

// 렌더링 비용이 큰 컴포넌트
const CanvasContainer = lazy(() => import("./CanvasContainer"));

export default function SampleComponent() {
  return (
    <div>
      {/* ... */}
      {/* Suspense Wrapper에 컴포넌트를 레이지 로딩하여 전달 */}
      <LazyComponent component={CanvasContainer} />
    </div>
  );
}
```

레이지 로딩을 적용하면 리소스를 필요한 때에 가져와서 효율적이지만, 그만큼 사용자 입장에서 지연을 경험할 수 있습니다. React Router의 `<Link>` 컴포넌트를 사용하며 `prefetch="intent"` 옵션을 설정하여 사용자가 링크 호버 시 리소스가 프리페칭되게 했습니다.

```tsx
import { Link } from "react-router";

// ...

export default function App() {
  // ...

  return (
    <div>
      <Link to="/product" prefetch="intent">
        상품 페이지
      </Link>
      <Link to="/orders" prefetch="intent">
        주문 페이지
      </Link>
    </div>
  );
}
```
