import moment from "moment";
import { DATETIME_FORMAT } from "@/constants/datetime";

export default class DatetimeUtil {
  static now(format: string = DATETIME_FORMAT.DATETIME_DEFAULT): string {
    return moment().format(format);
  }

  static format(
    value: Date | string,
    format: string = DATETIME_FORMAT.DATETIME_DEFAULT
  ): string {
    return moment(value).format(format);
  }

  static timestamp(): number {
    return moment().unix();
  }

  static formatTimestamp(
    value: number,
    format: string = DATETIME_FORMAT.DATETIME_DEFAULT
  ): string {
    return moment.unix(value).format(format);
  }
}
