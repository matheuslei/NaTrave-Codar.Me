import { addDays, subDays, format, formatISO } from "date-fns"
import { ptBR } from 'date-fns/locale'

//Para que um componente não seja importado um pelo outro e se torne recursivo, importamos com o nome final do componente
import { Icon } from '~/components/icon'

export const DateSelect = ({currentDate, onChange}) => {
  const date = new Date(currentDate)
  
  const prevDay = () => {
    const nextDate = subDays(date, 1)
    onChange(formatISO(nextDate))
  }

  const nextDay = () => {
    const nextDate = addDays(date, 1)
    onChange(formatISO(nextDate))
  }

  return (
    <div className="p-4 flex space-x-4 items-center justify-center">
      <Icon name="arrowLeft" className="w-6 text-red-500" onClick={prevDay} />
      <span className="font-bold">{format(date, "d 'de' MMMM", { locale: ptBR })}</span>
      <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
    </div>
  )
}