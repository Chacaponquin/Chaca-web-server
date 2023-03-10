import { SubOption } from "../../../modules/schema-options/interfaces/options.interface";
import { schemas } from "chaca";

export const ImageOptions: SubOption[] = [
  {
    name: "Animal",
    getValue: (a) => schemas.image.animal().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.animal().getValue(),
    arguments: [],
  },
  {
    name: "Architecture",
    getValue: (a) => schemas.image.architecture().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.architecture().getValue(),
    arguments: [],
  },
  {
    name: "Art",
    getValue: (a) => schemas.image.art().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.art().getValue(),
    arguments: [],
  },
  {
    name: "Event",
    getValue: (a) => schemas.image.event().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.event().getValue(),
    arguments: [],
  },
  {
    name: "Fashion",
    getValue: (a) => schemas.image.fashion().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.fashion().getValue(),
    arguments: [],
  },
  {
    name: "Film",
    getValue: (a) => schemas.image.film().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.film().getValue(),
    arguments: [],
  },
  {
    name: "Food",
    getValue: (a) => schemas.image.food().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.food().getValue(),
    arguments: [],
  },
  {
    name: "Health",
    getValue: (a) => schemas.image.health().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.health().getValue(),
    arguments: [],
  },
  {
    name: "History",
    getValue: (a) => schemas.image.history().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.history().getValue(),
    arguments: [],
  },
  {
    name: "House",
    getValue: (a) => schemas.image.house().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.house().getValue(),
    arguments: [],
  },
  {
    name: "Nature",
    getValue: (a) => schemas.image.nature().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.nature().getValue(),
    arguments: [],
  },
  {
    name: "People",
    getValue: (a) => schemas.image.people().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.people().getValue(),
    arguments: [],
  },
  {
    name: "Spiritual",
    getValue: (a) => schemas.image.spiritual().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.spiritual().getValue(),
    arguments: [],
  },
  {
    name: "Sport",
    getValue: (a) => schemas.image.sport().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.sport().getValue(),
    arguments: [],
  },
  {
    name: "Street",
    getValue: (a) => schemas.image.street().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.street().getValue(),
    arguments: [],
  },
  {
    name: "Travel",
    getValue: (a) => schemas.image.travel().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.travel().getValue(),
    arguments: [],
  },
  {
    name: "3D",
    getValue: (a) => schemas.image.treeDimension().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.treeDimension().getValue(),
    arguments: [],
  },
  {
    name: "Wallpaper",
    getValue: (a) => schemas.image.wallpaper().getValue(a),
    description: { en: "", es: "" },
    exampleValue: schemas.image.wallpaper().getValue(),
    arguments: [],
  },
  {
    name: "Animate Avatar",
    exampleValue: schemas.image.animateAvatar().getValue(),
    getValue: (a) => schemas.image.animateAvatar().getValue(a),
    arguments: [],
    description: { en: "", es: "" },
  },
];
