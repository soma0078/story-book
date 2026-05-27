# CLAUDE.md

## 디렉토리 규칙

```
src/components/     # UI 컴포넌트 — 컴포넌트와 Story를 같은 폴더에
src/lib/            # 동작 로직 — Imperative, 훅, 싱글턴 등
src/styles/         # 전역 스타일
```

새 컴포넌트나 로직을 추가할 때는 반드시 같은 위치에 `.stories.tsx`도 함께 만든다.

## 컴포넌트 작성 규칙

- Headless UI / Radix UI로 동작과 접근성을 처리하고, 스타일만 Tailwind 클래스로 덮어쓴다.
- Props 인터페이스는 파일 상단에 명시적으로 선언한다.
- `children`, `className`, `ref` 같은 표준 HTML Props는 별도 선언 없이 spread로 통과시킨다.
- 조건부 클래스는 `clsx`를 사용합니다. 인라인 `style={{}}` 사용 금지.
- 반복되는 클래스 조합은 컴포넌트로 추출한다. `className` 문자열을 여러 곳에 복붙하지 않는다.

## Story 작성 규칙

- `meta.title`은 `"Category/ComponentName"` 형식을 따른다.
- 모든 컴포넌트에 `autodocs` 태그를 붙여 자동 문서를 활성화한다.
- 각 Story는 하나의 상태/케이스만 표현합니다. Story 이름은 그 상태를 명확히 설명한다.
- 핵심 인터랙션이 있는 컴포넌트는 `play` function으로 시나리오를 작성한다.

```tsx
import { within, userEvent, expect } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { label: "확인" },
};

export const WithInteraction: Story = {
  args: { label: "확인" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText("완료")).toBeInTheDocument();
  },
};
```

## 동작 로직 아카이브 규칙

- `src/lib/기능명/` 폴더 단위로 관리한다.
- 폴더에는 구현 파일 + Story 파일이 반드시 쌍으로 있어야 한다.
- Imperative API는 Story 안에서 버튼 클릭으로 실제 호출 가능하게 만든다.
- 커스텀 훅은 Story play function에서 검증한다.

## 테스트 작성 규칙

- **UI 인터랙션** → Story `play` function (`@storybook/test`)
- **Story → Vitest 실행** → `@storybook/addon-vitest`
- **시각적 회귀** → Chromatic (CI에서 자동 실행)
- 테스트에서 구현 세부 사항(클래스명, DOM 구조)을 검증하지 않는다. 사용자 관점의 행동을 검증힌다.

## 하지 말아야 할 것

- Story를 단순 Props 나열용으로만 쓰지 않는다. 동작 가능한 예제여야 한다.
- 컴포넌트 내부에 비즈니스 로직을 넣지 않는다. 로직은 훅이나 패턴으로 분리한다.
- `any` 타입 사용 금지. 타입 추론이 어려우면 제네릭을 활용한다.
