import styles from './GlassPanel.module.css';
import { ReactNode } from 'react';

interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export default function GlassPanel({ children, className = '', as: Component = 'div', ...props }: GlassPanelProps) {
  return (
    <Component className={`${styles.glassPanel} ${className}`} {...props}>
      {children}
    </Component>
  );
}
