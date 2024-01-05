"use server";

import { uploadBagsImage } from "@/db/supabase/uploadImage";

export async function uploadImage(formData: FormData) {
  const images = formData.getAll("file");
  let photoLinks: Array<string> = [];
  try {
    for (const file of images) {
      const imageFromBucket = await uploadBagsImage(file as File);
      if (imageFromBucket) {
        photoLinks.push(imageFromBucket);
      }
      if (photoLinks.length > 0) {
        return {
          photos: photoLinks,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
}
