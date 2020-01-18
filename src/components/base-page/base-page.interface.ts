import { WithStyles, StyleRulesCallback } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

export interface IBasePageProp
  extends WithStyles<StyleRulesCallback<any, any, any>>,
    RouteComponentProps {}
