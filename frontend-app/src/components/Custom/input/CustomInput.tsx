import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
interface CustomProps {
  value: string;
  name: string;
  disabled?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  label?: string;
  containerClassName?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  suffixIcon?: React.ReactNode;
  suffixIconClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  containerClassName,
  label,
  disabled,
  ref,
  required,
  type = 'text',
  value,
  name,
  placeholder,
  className,
  error,
  suffixIconClassName,
  suffixIcon,
  icon,
  iconClassName,
  onChange,
}: CustomProps) => {
  return (
    <div className={cn('w-full', containerClassName)}>
      <div className='relative'>
        {label && (
          <label
            className={cn(
              'absolute left-4 px-1 text-sm text-black bg-white! border-black z-10 rounded-sm tracking-wide',
              disabled && 'text-gray-500'
            )}
          >
            {label} {required && <span className='text-red-500'>*</span>}
          </label>
        )}

        <Input
          ref={ref}
          type={type}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            'h-[46px]',
            icon && 'pl-12',
            suffixIcon && 'pr-12',
            disabled && 'bg-gray-50!',
            className,
            error && 'border-red-500'
          )}
        />
        {icon && (
          <div
            className={cn(
              'absolute left-2 top-1/2 -translate-y-1/2 border-r border-gray-300 pr-2',
              iconClassName
            )}
          >
            {icon}
          </div>
        )}
        {suffixIcon && (
          <div
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2',
              suffixIconClassName
            )}
          >
            {suffixIcon}
          </div>
        )}
      </div>

      {error && <span className='text-red-500 text-xs pl-2 flex'>{error}</span>}
    </div>
  );
};

export default CustomInput;
