import classNames from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  /**
   * 버튼의 색상을 지정합니다.
   * (`primary`, `secondary`, `gray`)
   */
  color?: "primary" | "secondary" | "gray";
  /**
   * 버튼의 외형 종류를 지정합니다.
   * (`filled`, `lined`)
   */
  variant?: "lined" | "filled";
  /**
   * 버튼의 크기를 지정합니다.
   * (`xs`, `sm`, `md`, `lg`, `full`)
   */
  size?: "xs" | "sm" | "md" | "lg" | "full";
  /** 버튼 내부에 표시될 내용입니다. (주로 텍스트나 아이콘) */
  children: React.ReactNode;
  /** 버튼 텍스트 앞에 표시될 아이콘입니다. */
  startIcon?: React.ReactNode;
  /** 버튼 텍스트 뒤에 표시될 아이콘입니다. */
  endIcon?: React.ReactNode;
}

/**
 * 다양한 스타일(색상, 종류, 크기)과 아이콘을 지원하는 UI 버튼 컴포넌트입니다.
 * `ComponentPropsWithRef<"button">`을 상속받아 `onClick`, `disabled` 등 모든 표준 버튼 속성을 지원합니다.
 */
export const Button = ({
  color = "primary",
  variant = "filled",
  size = "md",
  children,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${color}`],
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles["has-start-icon"]]: startIcon,
      [styles["has-end-icon"]]: endIcon,
    }
  );

  return (
    <button type="button" className={buttonClasses} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
