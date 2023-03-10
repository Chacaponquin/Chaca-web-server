import { schemas } from "chaca";
import { SubOption } from "../../../modules/schema-options/interfaces/options.interface";

export const VehicleOptions: SubOption[] = [
  {
    exampleValue: schemas.vehicle.bicycle().getValue(),
    getValue: (a) => schemas.vehicle.bicycle().getValue(a),
    name: "Bicycle",
    arguments: [],
    description: { en: "", es: "" },
  },
  {
    exampleValue: schemas.vehicle.manufacturer().getValue(),
    getValue: (a) => schemas.vehicle.manufacturer().getValue(a),
    name: "Manufacturer",
    arguments: [],
    description: { en: "", es: "" },
  },
  {
    exampleValue: schemas.vehicle.vehicleModel().getValue(),
    getValue: (a) => schemas.vehicle.vehicleModel().getValue(a),
    name: "Model",
    arguments: [],
    description: { en: "", es: "" },
  },
  {
    exampleValue: schemas.vehicle.vehicleType().getValue(),
    getValue: (a) => schemas.vehicle.vehicleType().getValue(a),
    name: "Type",
    arguments: [],
    description: { en: "", es: "" },
  },
  {
    exampleValue: schemas.vehicle.vehicle().getValue(),
    getValue: (a) => schemas.vehicle.vehicle().getValue(a),
    name: "Vehicle",
    arguments: [],
    description: { en: "", es: "" },
  },
  {
    exampleValue: schemas.vehicle.fuel().getValue(),
    getValue: (a) => schemas.vehicle.fuel().getValue(a),
    name: "Fuel Type",
    arguments: [],
    description: { en: "", es: "" },
  },
];
