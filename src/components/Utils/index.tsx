import moment from 'moment';
moment.locale('pt-br')

export const evento_dias_restantes = (data : string) => {
  const data1 = moment(new Date()).subtract(1, 'days') //.format('DD/MM/YYYY')
  const data2 = moment(data) //.format('DD/MM/YYYY')
  const dias =  data2.diff(data1, 'days');
  return dias
}