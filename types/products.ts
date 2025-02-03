export interface Iproduct {
    _id : string;
    productName : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    category : string ;
    price : number,
    inventory : number,
    colors : string[],
    status : string,
    description : string,
    slug : {
        _type : "slug"
        current : string;
    };
}