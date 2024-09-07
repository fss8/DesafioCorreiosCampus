import { CorreiosServices } from "../data";

export function getServiceById(slug: string) {
  const foundService = CorreiosServices.filter((service) => {
    console.log(service.slug);
    console.log(slug);
    if (slug == service.slug) return true;
    return false;
  });

  return foundService;
}
