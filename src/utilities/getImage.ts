import NoImage from "../assets/no_image_available.jpg";
  
export function getImage(images: any) {
    if (images.length > 0) {
        return images[images.length - 3].url
    } else {
        return NoImage
    }
}
  