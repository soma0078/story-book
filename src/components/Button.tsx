import classNames from "classnames";
import styles from "./Button.module.scss";
export interface ButtonProps {
  /** 버튼의 종류 (색상/스타일). SCSS의 --variant에 매핑 */
  variant?: "primary" | "secondary";
  /** 배경색을 인라인 스타일로 오버라이드할 값 */
  backgroundColor?: string;
  /** 버튼의 크기. SCSS의 --size에 매핑 */
  size?: "small" | "medium" | "large";
  /** 버튼에 표시될 내용 (텍스트) */
  text: string;
  /** (선택 사항) 클릭 핸들러 함수 */
  onClick?: () => void;
  /** (선택 사항) 외부 유틸리티 클래스 추가 (예: 마진) */
  className?: string;
}

/** UI 버튼 컴포넌트 */
export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  text,
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ backgroundColor }}
      {...props}
    >
      {text}
    </button>
  );
};
