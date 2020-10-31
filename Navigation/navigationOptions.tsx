
import React from 'react';
import {
  StackHeaderLeftButtonProps,
} from '@react-navigation/stack';

import BackButton from 'src/Components/BackButton';
import {
  cs,
  gs,
} from 'src/Styles';

import {
  RouteOptions,
} from './typesNavigation';

export const renderHeaderLeft = (options: RouteOptions, props: StackHeaderLeftButtonProps) => {
  const { canGoBack } = props;
  const { headerTransparent } = options;

  if (!canGoBack) {
    return null;
  }

  return (
    <BackButton
      noBackground={!headerTransparent}
    />
  );
};

export const getHeaderSyle = (): {} => ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: cs.backgroundContent,
    ...gs.noShadow,
  },
  headerTitleStyle: {
    fontSize: cs.h3FontSize,
    color: cs.hTextColor,
    fontFamily: cs.hFontFamily,
    fontVariant: cs.fontVariant,
    lineHeight: cs.h3LineHeight,
    letterSpacing: cs.letterSpacing,
  },
});
