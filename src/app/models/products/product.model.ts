import { ProductMeasurement } from "./measurement.model";
import { CartonSize } from "./carton.model";

export enum STATUS {
  'avaliable',
  'sold out'
}

export class Products
{
    id: String
    productNo: String
    productName:String
    picturePath: String
    productPrice:Number
    productDetail: String
    capacity:Number
    productWeight:Number
    material: String
    productType: String
    qty_ctn: Number
    productMeasurement: ProductMeasurement
    cartonSize: CartonSize
    productStatus: STATUS
    CreateTime: Date
    UpdateTime: Date
}