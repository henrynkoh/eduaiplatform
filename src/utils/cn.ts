import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single className string,
 * with Tailwind-specific conflict resolution.
 * 
 * @param inputs - Class values to be merged
 * @returns Merged className string
 * 
 * @example
 * // Merges classes and resolves Tailwind conflicts
 * cn('text-red-500', 'text-lg', { 'bg-blue-500': isBlue })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 