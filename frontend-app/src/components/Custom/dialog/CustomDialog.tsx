import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
interface IProps {
  title: string;
  description: React.ReactNode | string;
  buttonActionName: string;
  closeBtn?: string;
  okBtn?: string;
  classNameDialogContent?: string;
}
export function CustomDialog({
  title,
  description,
  buttonActionName,
  classNameDialogContent,
  okBtn = 'Ok',
  closeBtn = 'Close',
}: IProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>{buttonActionName}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={classNameDialogContent}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{closeBtn}</AlertDialogCancel>
          <AlertDialogAction>{okBtn}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
