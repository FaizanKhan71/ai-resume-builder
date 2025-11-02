import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  try {
    return twMerge(clsx(inputs))
  } catch (error) {
    console.error('Error in cn function:', error);
    return ''
  }
}
