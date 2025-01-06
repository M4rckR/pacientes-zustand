import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"


type PatientDetailsProps = {
    patient : Patient
}


export const PatientDetails = ({patient}:PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleCLick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }

  return (
    <div className="mx-5 my-10 py-10 px-5 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Nombre" data={patient.name} />
        <PatientDetailItem label="Propietario" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Fecha" data={patient.date.toString()} />
        <PatientDetailItem label="Sintomas" data={patient.textarea} />

        <div className="flex gap-3 flex-col md:flex-row justify-between mt-10 ">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
                onClick={() => getPatientById(patient.id)}
            >Editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
                onClick={handleCLick}
            >Eliminar</button>
        </div>
    </div>
  )
}
