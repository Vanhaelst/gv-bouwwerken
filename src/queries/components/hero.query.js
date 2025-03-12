import { imageQuery } from "@/queries/components/image.query";

export const heroQuery = `
    { 
        id
        title: heading
        description
        image ${imageQuery}
        size
        align
        bold
    }     
`;
