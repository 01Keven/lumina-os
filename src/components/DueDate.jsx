import DatePicker from "react-datepicker";
import { Calendar } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";

export function DueDate({ selectedDate, onDateChange }) {
 

    return (
        <div className="relative" >
            <DatePicker
                selected={selectedDate} // No TaskItem 'tempDate'
                onChange={onDateChange} //TaskI  'setTempDate'
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Hora"
                dateFormat="MM/dd/yyyy HH:mm"
                placeholderText="MM/dd/yyyy HH:mm"
                className="input-field w-full"
                showYearDropdown // Permite mudar o facilmente
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                autoComplete="off"
            />
            <Calendar className="absolute right-4 top-2.5 m-1 text-deb-nude pointer-events-none " size={20} />
        </div> 
    )
}