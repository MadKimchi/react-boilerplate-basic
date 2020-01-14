import React from 'react';
import { InjectorService } from '../services/injector.service';

export const ServiceContext = React.createContext(new InjectorService());
