import { cn } from '@/lib/utils';

export default function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center h-full', className)}>{children}</div>
  );
}
