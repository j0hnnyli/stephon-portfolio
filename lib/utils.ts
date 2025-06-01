import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCloudinaryPosterUrl(publicId: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!
  return `https://res.cloudinary.com/${cloudName}/video/upload/so_2/${publicId}.jpg`;
}

export async function wait(time : number){
  return new Promise((resolve) => setTimeout(() => { resolve('resolvied ') },time))
}