"use client";
import React, { useEffect, forwardRef } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';

import { useInView } from 'react-intersection-observer';
import { motion, MotionProps } from 'framer-motion';
import type { SectionName } from '@/lib/types';


// export function useView(sectionId: SectionName) {
//   const [ref, inView] = useInView()
//   const { setActiveSection } = useActiveSectionContext();
//  useEffect(() => {
//     if (inView) {
//       setActiveSection(sectionId);
//     }
//   }, [inView, setActiveSection]);

//   return ref;
// }

type Props = {
  sectionName: SectionName;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> & MotionProps;

const ClientSectionObserver = forwardRef<HTMLElement, Props>(
  ({ sectionName, children, className, id, ...rest }, parentRef) => {
    const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    // Combine both refs
    function handleRef(node: HTMLElement | null) {
      // Assign to parent ref
      if (typeof parentRef === 'function') {
        parentRef(node);
      } else if (parentRef) {
        parentRef.current = node;
      }

      // Assign to inView ref
      inViewRef(node);
    }

    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    }, [inView, sectionName, setActiveSection, timeOfLastClick]);

    return (
      <motion.section ref={handleRef} className={className} id={id} {...rest}>
        {children}
      </motion.section>
    );
  }
);

ClientSectionObserver.displayName = 'ClientSectionObserver';
export default ClientSectionObserver;