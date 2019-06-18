
export class Product {
    id: string;
    general: General;
    brand: Brand;
    images: Images;

}

export class General {
    presentable_id: string;
    name: string;
    description: string;
}

export class Brand {
    name: string;
}

export class Primary {
    large: string;
}

export class Images {
    primary: Primary;
}
