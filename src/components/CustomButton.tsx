import './customButton.css';

interface CustomButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  variant?: 'outline' | 'solid';
  backgroundColor?: string;
  color?: string;
}

export const CustomButton = ({
  size = 'md',
  label,
  variant = 'outline',
  backgroundColor,
  color,
}: CustomButtonProps) => {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <button
      className={['custom-button', `custom-button--${size}`, `custom-button--${variant}`].join(' ')}
      style={style}
    >
      {label}
    </button>
  );
};
