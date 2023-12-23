import styled from 'styled-components/native';
import {
    ViewProps,
    TextProps,
    TouchableOpacityProps,
    ScrollViewProps,
} from 'react-native';

import generateCustomCss from '../utils/generateCustomCss';
import { BreakpointValue } from '../types/breakpointValue';

interface BaseStyleViewProps {
    _css?: BreakpointValue<string>;
}

type StyledComponentType = {
    View: React.ComponentType<ViewProps & BaseStyleViewProps>;
    Text: React.ComponentType<TextProps & BaseStyleViewProps>;
    button: React.ComponentType<TouchableOpacityProps & BaseStyleViewProps>;
    ScrollView: React.ComponentType<ScrollViewProps & BaseStyleViewProps>;
};

const applyCustomStyles = (styleProps: BaseStyleViewProps) =>
    styleProps._css ? generateCustomCss(styleProps._css) : '';

export const StyledComponents: StyledComponentType = {
    View: styled.View`
        ${applyCustomStyles}
    `,
    Text: styled.Text`
        ${applyCustomStyles}
    `,
    button: styled.TouchableOpacity`
        ${applyCustomStyles}
    `,
    ScrollView: styled.ScrollView`
        ${applyCustomStyles}
    `,
};
