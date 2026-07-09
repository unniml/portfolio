"use client";
import React, { useState, createContext } from 'react'
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

/**
 * Provides the active section context to its child components.
 *
 * @param {ActiveSectionContextProviderProps} children - The child components that will receive the active section context.
 * @return {JSX.Element} The JSX element that wraps the child components with the active section context.
 */
export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {

const [activeSection, setActiveSection] = useState<SectionName>("Home");
const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need to keep track of this to disable the observer temporarily when user clicks on a link.

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}  >
      {children}
    </ActiveSectionContext.Provider>
  );
}

/**
 * Retrieves the active section context.
 *
 * @return {ActiveSectionContextType} The active section context.
 */
export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}
