import React from 'react';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Eye, EyeOff, Leaf, Lock, User } from 'lucide-react';
import useAuthStore from '@/store/auth-store';
import CustomInput from '@/components/Custom/input/CustomInput';
import CustomButton from '@/components/Custom/button/CustomButton';
import { Label } from '@radix-ui/react-label';
interface IForm {
  username: string;
  password: string;
}

const initialForm: IForm = {
  username: '',
  password: '',
};

const LoginPage = () => {
  const [isActivePassword, setIsActivePassword] = React.useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const form = useForm({
    defaultValues: initialForm as IForm,
    onSubmit: async ({ value }) => {
      try {
        console.log(value);
        if (value.username === '' && value.password === '') {
          return console.log('Errors');
        }
        setToken({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
        return navigate({ to: '/dashboard' });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-primary via-background to-secondary p-4'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl' />
      </div>
      <Card className='w-full max-w-md animate-scale-in relative z-10 border-0 shadow-2xl'>
        <CardHeader className='text-center pb-2'>
          <div className='mx-auto w-20 h-20 bg-accent-foreground rounded-2xl flex items-center justify-center mb-4 shadow-lg'>
            <Leaf className='w-10 h-10 text-primary-foreground' />
          </div>
          <CardTitle className='text-3xl font-bold text-foreground'>
            ลานยางพารา
          </CardTitle>
          <CardDescription className='text-muted-foreground text-base'>
            ระบบจัดการรับซื้อและส่งต่อยางพารา
          </CardDescription>
        </CardHeader>
        <CardContent className='pt-6'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className='h-full space-y-3'
          >
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>ชื่อผู้ใช้</Label>

              <form.Field
                name='username'
                children={(field) => {
                  return (
                    <>
                      <CustomInput
                        placeholder='Username'
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        icon={
                          <div>
                            <User />
                          </div>
                        }
                      />
                    </>
                  );
                }}
              />
            </div>
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>ชื่อผู้ใช้</Label>
              <form.Field
                name='password'
                children={(field) => {
                  return (
                    <>
                      <CustomInput
                        placeholder='Password'
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type={isActivePassword ? 'text' : 'password'}
                        icon={
                          <div>
                            <Lock />
                          </div>
                        }
                        suffixIcon={
                          <div
                            onClick={() =>
                              setIsActivePassword(!isActivePassword)
                            }
                          >
                            {isActivePassword ? <Eye /> : <EyeOff />}
                          </div>
                        }
                      />
                    </>
                  );
                }}
              />
            </div>
            <div className='w-full flex justify-end'>
              <h6>ลืมรหัสผ่าน</h6>
            </div>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <CustomButton type='submit' disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Submit'}
                </CustomButton>
              )}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
