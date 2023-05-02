export const inputs = [{name: 'Nombre', type: 'text', label: 'Coloque su nombre', validation: (value)=>{return value===''?false:true}}, 
{name: 'Fecha', type: 'date', label: 'Coloque su fecha de nacimiento', validation: (value)=>{return !(new Date(value).getTime()>new Date('1/5/2023').getTime())}},
{name: 'Contraseña', type: 'password', label: 'Coloque su contraseña', validation: (value)=>{return /^[A-z-0-9]{8,10}$/.test(value)}},
{name: 'Confirmar contraseña', type: 'password', label: 'Confirme su contraseña', validation: (value)=>{return true}},
{name: 'Email', type: 'text', label: 'Coloque su email', validation: (value)=>{return /\w+@(hotmail|gmail)\./g.test(value)}}
, {name: 'Edad', type: 'number', label: 'Coloque su edad', validation: (value)=>{return parseInt(value)>29}}]   
