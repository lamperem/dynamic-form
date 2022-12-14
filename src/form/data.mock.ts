import {FieldInterface} from './form.model';

const data: Array<FieldInterface> = [
  {
    description: 'Campo para registrar el nombre de la ciudad',
    type: 'input',
    name: 'country',
    label: 'Ingresar información',
    placeholder: 'Escribir aquí',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '0',
  },
  {
    description: 'Campo para registrar numeros',
    type: 'number',
    name: 'counter',
    label: 'Ingresar cantidad',
    placeholder: 'Escribir aquí',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '0',
  },
  {
    description: 'Seleccionar opcion del select',
    type: 'select',
    name: 'region',
    label: 'Selecciona una opción',
    placeholder: 'Selecciona una opción',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '0',
    options: [
      {
        key: 'America',
        translate: '',
        value: '1',
      },
      {
        key: 'Europe',
        translate: '',
        value: '2',
      },
    ],
  },
  {
    description: 'Ingresar texto largo',
    type: 'textarea',
    name: 'comment',
    label: 'Ingresa un comentario',
    placeholder: 'Ingresa un comentario',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '',
  },
  {
    description: 'Seleccionar una sola opcion',
    type: 'radio',
    name: 'type',
    label: 'Selecciona una opcion',
    placeholder: 'Option',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '',
    options: [
      {
        key: 'Tipo A',
        translate: '',
        value: '1',
      },
      {
        key: 'Tipo B',
        translate: '',
        value: '2',
      },
      {
        key: 'Tipo C',
        translate: '',
        value: '3',
      },
      {
        key: 'Tipo D',
        translate: '',
        value: '4',
      },
    ],
  },
  {
    description: 'Confirmar accion',
    type: 'checkbox',
    label: 'Estas de acuerdo',
    placeholder: 'Aceptar las condiciones',
    name: 'accept',
    status: 1,
    required: false,
    visible: false,
    modifiable: false,
    defaultValue: '0',
  },
];

export default data;
