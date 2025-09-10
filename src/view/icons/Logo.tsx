import React from 'react'
import {StyleSheet, type TextProps} from 'react-native'
import Svg, {
  Defs,
  LinearGradient,
  Path,
  type PathProps,
  Stop,
  type SvgProps,
} from 'react-native-svg'

import {colors} from '#/lib/styles'

const ratio = 512 / 512

type Props = {
  fill?: PathProps['fill']
  style?: TextProps['style']
} & Omit<SvgProps, 'style'>

export const Logo = React.forwardRef(function LogoImpl(props: Props, ref) {
  const {fill, ...rest} = props
  const gradient = fill === 'sky'
  const styles = StyleSheet.flatten(props.style)
  const _fill = gradient ? 'url(#sky)' : fill || styles?.color || colors.blue3
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32)

  // const isKawaii = useKawaiiMode()

  // if (isKawaii) {
  //   return (
  //     <Image
  //       source={
  //         size > 100
  //           ? require('../../../assets/kawaii.png')
  //           : require('../../../assets/kawaii_smol.png')
  //       }
  //       accessibilityLabel="Bluesky"
  //       accessibilityHint=""
  //       accessibilityIgnoresInvertColors
  //       style={[{height: size, aspectRatio: 1.4}]}
  //     />
  //   )
  // }

  return (
    <Svg
      fill="none"
      // @ts-ignore it's fiiiiine
      ref={ref}
      viewBox="0 0 512 512"
      {...rest}
      style={[{width: size, height: size * ratio}, styles]}>
      {gradient && (
        <Defs>
          <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#978ab1" stopOpacity="1" />
            <Stop offset="1" stopColor="#41344e" stopOpacity="1" />
          </LinearGradient>
        </Defs>
      )}

      <Path
        fill={_fill}
        d="m 38.722656,22.974609 c 0,0 -28.026062,40.854404 3.066406,176.732421 a 158.15543,158.15543 0 0 0 -0.160156,7.09766 158.15543,158.15543 0 0 0 12.927735,62.62695 l -14.927735,53.4082 25.283203,-0.56836 0.335938,46.6836 52.023433,-27.22461 a 158.15543,158.15543 0 0 0 82.51368,23.22851 158.15543,158.15543 0 0 0 86.53125,-25.77148 l 49.24023,25.76758 0.33594,-46.6836 25.2832,0.56836 -14.7539,-52.7832 a 158.15543,158.15543 0 0 0 11.51757,-59.25195 158.15543,158.15543 0 0 0 -0.38476,-11.03907 c 29.65852,-132.72911 2.17383,-172.791011 2.17383,-172.791011 0,0 -54.40405,6.892114 -85.5879,44.244141 A 158.15543,158.15543 0 0 0 199.78516,48.648438 158.15543,158.15543 0 0 0 124.6543,67.632812 C 93.528428,29.917082 38.722656,22.974609 38.722656,22.974609 Z"
        transform="translate(-27.1278,-22.974609)"
      />
    </Svg>
  )
})
