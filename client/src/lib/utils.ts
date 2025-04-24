import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to readable format
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Truncate text with ellipsis for blog excerpts etc.
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Create a slugified version of a string for URLs
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Get relative time (e.g., "2 hours ago")
export function getRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
  }
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? `${interval} month ago` : `${interval} months ago`;
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? `${interval} day ago` : `${interval} days ago`;
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;
  }
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;
  }
  
  return seconds <= 10 ? 'just now' : `${Math.floor(seconds)} seconds ago`;
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Format phone number
export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}
