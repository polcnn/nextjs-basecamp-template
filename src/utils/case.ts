import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

export default class CaseUtil {
  static toCamel<T = any>(data: any): T {
    return camelcaseKeys(data, { deep: true });
  }

  static toSnake<T = any>(data: any): T {
    return snakecaseKeys(data, { deep: true });
  }
}
