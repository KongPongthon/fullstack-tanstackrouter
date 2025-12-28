import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  loadingText?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

const CustomButton = ({
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  loading,
  loadingText,
  variant,
}: CustomProps) => {
  return (
    <Button
      type={type}
      className={cn('w-full border', className)}
      onClick={onClick}
      disabled={disabled || loading}
      variant={variant}
    >
      {loading ? loadingText : children}
    </Button>
  );
};

export default CustomButton;
