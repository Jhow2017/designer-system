import { ReactNode } from 'react';

// types
import { BaseViewTypesProps } from '../types/view';
import { StyledComponents } from '../styles';
import { LinkProps } from 'expo-router';

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
    as?: keyof typeof StyledComponents;
    href?: LinkProps<''>['href'];
    asChild?: LinkProps<''>['asChild'];
}
