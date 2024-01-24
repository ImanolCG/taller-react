import './bootstrap';
import '../sass/app.scss';

import {createRoot} from 'react-dom/client';
import React from 'react';
import { Counter } from './bases/01-useState/Counter';
import { MultipleCounter } from './bases/01-useState/MultipleCounter';
import { Form } from './bases/01-useState/Form';
import { MultipleInputForm } from './bases/01-useState/MultipleInputForm';
import { EffectCleanUp } from './bases/02-useEffect/EffectCleanUp';
import { RandomNumber } from './bases/02-useEffect/RandomNumber';
import { Examen01 } from './examen/Examen01';
export const App = () => {
    return (
        <>
            <Examen01 />
        </>
    );
};

createRoot(document.getElementById('root')).render(<App/>);