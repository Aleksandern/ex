
import Localize from 'src/Utils/Localize';

import {
  RouteOptions,
} from './typesNavigation';

export default {
  formatOptions(optionsInp: RouteOptions) {
    const options = { ...optionsInp };
    const {
      title,
    } = optionsInp;

    if (title) {
      options.title = Localize.t(title);
    }

    return options;
  },
};
