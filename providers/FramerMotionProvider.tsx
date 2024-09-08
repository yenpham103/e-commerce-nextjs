import React from 'react';
import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from 'framer-motion';

export default function FramerMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
}
