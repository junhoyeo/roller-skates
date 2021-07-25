import { Color } from '../Color';
import { Config } from '../Config';
import { ColorInput, RgbaString, RgbString } from '@roller-skates/types';
import { parseColorFromHexString } from './Hex';
import { parseColorFromRgbString } from './Rgb';
import { parseColorFromRgbaString } from './Rgba';

export const parseColor = <Str extends string>(
  colorInput: ColorInput<Str>,
  config?: Config,
) => {
  if (typeof colorInput === 'string') {
    if (colorInput.startsWith('rgba')) {
      // RgbaString
      return parseColorFromRgbaString(colorInput as RgbaString, config)
    }

    if (colorInput.startsWith('rgb')) {
      // RgbString
      return parseColorFromRgbString(colorInput as RgbString, config)
    }

    // HexString
    return parseColorFromHexString(colorInput, config)
  }

  // RgbaObject
  return new Color(colorInput, config)
}
